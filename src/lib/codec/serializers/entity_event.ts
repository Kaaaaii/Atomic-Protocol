import { EntityEventPacket } from "../../../packets/entity_event";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class EntityEventSerializer implements PacketSerializer<EntityEventPacket> {
  encode(buf: BufferWriter, p: EntityEventPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeUInt8(typeof p.event_id === "number" ? p.event_id : 0);
    buf.writeZigZag32(p.data);
  }

  decode(buf: BufferReader): EntityEventPacket {
    const runtime_entity_id = buf.readVarInt64();
    const event_id = buf.readUInt8();
    const data = buf.readZigZag32();
    return { runtime_entity_id, event_id, data };
  }
}
