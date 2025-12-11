import { RequestChunkRadiusPacket } from "../../../packets/request_chunk_radius";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class RequestChunkRadiusSerializer implements PacketSerializer<RequestChunkRadiusPacket> {
  encode(buf: BufferWriter, p: RequestChunkRadiusPacket) {
    buf.writeVarInt(p.chunk_radius);
    if (p.max_radius !== undefined) buf.writeUInt8(p.max_radius);
  }
  decode(buf: BufferReader): RequestChunkRadiusPacket {
    const chunk_radius = buf.readVarInt();
    const max_radius = buf.remaining() > 0 ? buf.readUInt8() : 0;
    return { chunk_radius, max_radius };
  }
}
