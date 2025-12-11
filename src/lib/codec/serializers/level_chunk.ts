import { LevelChunkPacket } from "../../../packets/level_chunk";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class LevelChunkSerializer implements PacketSerializer<LevelChunkPacket> {
  encode(buf: BufferWriter, p: LevelChunkPacket) {
    buf.writeZigZag32(p.x);
    buf.writeZigZag32(p.z);
    buf.writeZigZag32(p.dimension);
    buf.writeVarInt(p.sub_chunk_count);
    if (p.sub_chunk_count === -2 && p.highest_subchunk_count !== undefined) {
      buf.writeUInt16LE(p.highest_subchunk_count);
    }
    buf.writeBool(p.cache_enabled);
    if (p.cache_enabled && p.hashes) {
      buf.writeVarInt(p.hashes.length);
      for (const h of p.hashes) buf.writeUInt64LE(h);
    }
    buf.writeVarInt(p.payload.length);
    buf.writeBuffer(p.payload);
  }

  decode(buf: BufferReader): LevelChunkPacket {
    const x = buf.readZigZag32();
    const z = buf.readZigZag32();
    const dimension = buf.readZigZag32();
    const sub_chunk_count = buf.readVarInt();
    let highest_subchunk_count;
    if (sub_chunk_count === -2) {
      highest_subchunk_count = buf.readUInt16LE();
    }
    const cache_enabled = buf.readBool();
    let hashes: bigint[] | undefined;
    if (cache_enabled) {
      const len = buf.readVarInt();
      hashes = [];
      for (let i = 0; i < len; i++) hashes.push(buf.readUInt64LE());
    }
    const payloadLen = buf.readVarInt();
    const payload = buf.readBytes(payloadLen);
    return { x, z, dimension, sub_chunk_count, highest_subchunk_count, cache_enabled, hashes, payload };
  }
}
