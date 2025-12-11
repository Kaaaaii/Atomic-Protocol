import { RemoveEntityPacket } from "../../../packets/remove_entity";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class RemoveEntitySerializer implements PacketSerializer<RemoveEntityPacket> {
  encode(buf: BufferWriter, p: RemoveEntityPacket) {
    buf.writeZigZag64(p.unique_entity_id);
  }

  decode(buf: BufferReader): RemoveEntityPacket {
    return { unique_entity_id: buf.readZigZag64() };
  }
}
