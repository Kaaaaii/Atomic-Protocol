import { NetworkSettingsPacket } from "../../../packets/network_settings";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class NetworkSettingsSerializer implements PacketSerializer<NetworkSettingsPacket> {
  encode(buf: BufferWriter, p: NetworkSettingsPacket) {
    buf.writeUInt16LE(p.compression_threshold);
    buf.writeUInt16LE(p.compression_algorithm === "snappy" ? 1 : 0);
    buf.writeBool(p.client_throttle);
    buf.writeUInt8(p.client_throttle_threshold);
    buf.writeFloatLE(p.client_throttle_scalar);
  }
  decode(buf: BufferReader): NetworkSettingsPacket {
    const compression_threshold = buf.readUInt16LE();
    const algoId = buf.readUInt16LE();
    const compression_algorithm = algoId === 1 ? "snappy" : "deflate";
    const client_throttle = buf.readBool();
    const client_throttle_threshold = buf.readUInt8();
    const client_throttle_scalar = buf.readFloatLE();
    return { compression_threshold, compression_algorithm, client_throttle, client_throttle_threshold, client_throttle_scalar };
  }
}
