import { EntityPickRequestPacket } from "../../../packets/entity_pick_request";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class EntityPickRequestSerializer implements PacketSerializer<EntityPickRequestPacket> {
  encode(buf: BufferWriter, p: EntityPickRequestPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeVarInt(p.hotbar_slot);
  }

  decode(buf: BufferReader): EntityPickRequestPacket {
    const runtime_entity_id = buf.readVarInt64();
    const hotbar_slot = buf.readVarInt();
    return { runtime_entity_id, hotbar_slot };
  }
}
