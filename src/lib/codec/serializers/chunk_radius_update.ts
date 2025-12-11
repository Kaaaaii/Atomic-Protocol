import { ChunkRadiusUpdatePacket } from "../../../packets/chunk_radius_update";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ChunkRadiusUpdateSerializer implements PacketSerializer<ChunkRadiusUpdatePacket> {
  encode(buf: BufferWriter, p: ChunkRadiusUpdatePacket) {
    buf.writeZigZag32(p.chunk_radius);
  }

  decode(buf: BufferReader): ChunkRadiusUpdatePacket {
    return { chunk_radius: buf.readZigZag32() };
  }
}
