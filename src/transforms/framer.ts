import * as zlib from "zlib";
import type { Connection } from "../client/connection";
import { config } from "../config/config";
import { Logger } from "../utils/logger";
import { readVarInt, sizeOfVarInt, writeVarInt } from "../utils/varints";

export default class Framer {
    packets: Array<Buffer>;
    batchHeader: number;
    compressor: string;
    compressionLevel: number;
    compressionThreshold: number;
    compressionHeader: number;
    writeCompressor: boolean;

    constructor(client: Connection) {
        this.packets = [];
        this.batchHeader = client.batchHeader!;
        this.compressor = client.compressionAlgorithm || 'none';
        this.compressionLevel = client.compressionLevel;
        this.compressionThreshold = client.compressionThreshold;
        this.compressionHeader = client.compressionHeader || 0;
        this.writeCompressor = client.compressionReady;
    }

    reset(client: Connection) {
        this.packets = [];
        this.batchHeader = client.batchHeader!;
        this.compressor = client.compressionAlgorithm || 'none';
        this.compressionLevel = client.compressionLevel;
        this.compressionThreshold = client.compressionThreshold;
        this.compressionHeader = client.compressionHeader || 0;
        this.writeCompressor = client.compressionReady;
    }

    compress(buffer: Buffer) {
        switch (this.compressor) {
            case 'deflate': return zlib.deflateRawSync(buffer, { level: this.compressionLevel });
            case 'snappy': throw Error('Snappy compression not implemented');
            case 'none': return buffer;
            default: return buffer;
        }
    }

    static decompress(algorithm: any, buffer: Buffer) {
        switch (algorithm) {
            case 0:
            case 'deflate':
                return zlib.inflateRawSync(buffer, { chunkSize: 512000 });
            case 1:
            case 'snappy':
                throw Error('Snappy compression not implemented');
            case 'none':
            case 255:
                return buffer;
            default: throw Error('Unknown compression type ' + algorithm);
        }
    }

    static decode(client: Connection, buf: Buffer) {
        //Changed batchHeader from "this.batchHeader" to "client.batchHeader" & added a ? 1 : 0 check

        //@ts-ignore
        if (client.batchHeader && buf[0] !== client.batchHeader) throw Error(`bad batch packet header, received: ${buf[0]}, expected: ${this.batchHeader}`);
        const buffer = buf.slice(client.batchHeader ? 1 : 0);

        let decompressed;

        //@ts-ignore
        if (client.compressionReady) {
            try {
                decompressed = Framer.decompress(buffer[0], buffer.slice(1));
            } catch (e) {
                //Fallback with debug context
                Logger.debug(`[Framer] decompress failed label=decode ready=true compressionHeader=${buffer[0]} bufferLength=${buffer.byteLength}`, config.debug);
                client.emit?.("error", e as Error);
                return [];
            }
        } else {
            try {
                decompressed = Framer.decompress(client.compressionAlgorithm, buffer);
            } catch (e) {
                Logger.debug(`[Framer] decompress failed label=decode ready=false compression=${client.compressionAlgorithm} bufferLength=${buffer.byteLength}`, config.debug);
                decompressed = buffer;
            }
        }

        return Framer.getPackets(decompressed, { label: "decode" });
    }

    encode() {
        const buf = Buffer.concat(this.packets);
        const shouldCompress = buf.length > this.compressionThreshold;
        const header = this.batchHeader ? [this.batchHeader] : [];

        if (this.writeCompressor) {
            header.push(shouldCompress ? this.compressionHeader : 255);
        }

        return Buffer.concat([Buffer.from(header), shouldCompress ? this.compress(buf) : buf]);
    }

    addEncodedPacket(chunk: Buffer) {
        const varIntSize = sizeOfVarInt(chunk.byteLength);
        const buffer = Buffer.allocUnsafe(varIntSize + chunk.byteLength);
        writeVarInt(chunk.length, buffer, 0);
        chunk.copy(buffer, varIntSize);
        this.packets.push(buffer);
    }

    addEncodedPackets(packets: Buffer[]) {
        let allocSize = 0;
        for (const packet of packets) {
            allocSize += sizeOfVarInt(packet.byteLength);
            allocSize += packet.byteLength;
        }
        const buffer = Buffer.allocUnsafe(allocSize);
        let offset = 0;
        for (const chunk of packets) {
            offset = writeVarInt(chunk.length, buffer, offset);
            offset += chunk.copy(buffer, offset, 0);
        }

        this.packets.push(buffer);
    }

    getBuffer() {
        return Buffer.concat(this.packets);
    }

    private static logPacketDebug(reason: string, buffer: Buffer, offset: number, value: number | null, size: number | null, label?: string) {
        const previewLength = 96;
        const preview = buffer.subarray(offset, Math.min(buffer.byteLength, offset + previewLength)).toString("hex");
        const msg = `[Framer] ${reason}` +
            ` label=${label ?? "getPackets"}` +
            ` bufferLength=${buffer.byteLength}` +
            ` offset=${offset}` +
            ` varInt=${value ?? "n/a"}` +
            ` varIntSize=${size ?? "n/a"}` +
            ` preview=${preview}`;
        Logger.debug(msg, config.debug);
    }

    static getPackets(buffer: Buffer, options: { label?: string } = {}) {
        const maxPacket = 2 * 1024 * 1024;
        const packets: Buffer[] = [];
        let offset = 0;
        const label = options.label ?? "getPackets";

        while (offset < buffer.byteLength) {
            let value: number;
            let size: number;
            try {
                const parsed = readVarInt(buffer, offset);
                value = parsed.value;
                size = parsed.size;
            } catch (err) {
                this.logPacketDebug("Failed to read varint", buffer, offset, null, null, label);
                throw err;
            }

            if (value < 0 || value > maxPacket) {
                this.logPacketDebug("Packet too large/invalid", buffer, offset, value, size, label);
                throw new Error(`Packet too large/invalid (${value} bytes)`);
            }

            if (offset + size + value > buffer.byteLength) {
                this.logPacketDebug("Truncated packet payload", buffer, offset, value, size, label);
                throw new Error("Truncated packet payload");
            }

            const dec = Buffer.allocUnsafe(value);
            offset += size;
            offset += buffer.copy(dec, 0, offset, offset + value);
            packets.push(dec);
        }

        return packets;
    }
}
