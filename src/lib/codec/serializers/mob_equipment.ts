import { MobEquipmentPacket } from "../../../packets/mob_equipment";
import { readItem, writeItem } from "./shared_items";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class MobEquipmentSerializer implements PacketSerializer<MobEquipmentPacket> {
  encode(buf: BufferWriter, p: MobEquipmentPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    writeItem(buf, p.item);
    buf.writeUInt8(p.slot);
    buf.writeUInt8(p.selected_slot);
    buf.writeUInt8(p.window_id);
  }

  decode(buf: BufferReader): MobEquipmentPacket {
    const runtime_entity_id = buf.readVarInt64();
    const item = readItem(buf);
    const slot = buf.readUInt8();
    const selected_slot = buf.readUInt8();
    const window_id = buf.readUInt8();
    return { runtime_entity_id, item, slot, selected_slot, window_id };
  }
}
