import { TakeItemEntityPacket } from "../../../packets/take_item_entity";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class TakeItemEntitySerializer implements PacketSerializer<TakeItemEntityPacket> {
  encode(buf: BufferWriter, p: TakeItemEntityPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeVarInt(p.target);
  }

  decode(buf: BufferReader): TakeItemEntityPacket {
    const runtime_entity_id = buf.readVarInt64();
    const target = buf.readVarInt();
    return { runtime_entity_id, target };
  }
}
