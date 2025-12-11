import { MobArmorEquipmentPacket } from "../../../packets/mob_armor_equipment";
import { readItem, writeItem } from "./shared_items";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class MobArmorEquipmentSerializer implements PacketSerializer<MobArmorEquipmentPacket> {
  encode(buf: BufferWriter, p: MobArmorEquipmentPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    writeItem(buf, p.helmet);
    writeItem(buf, p.chestplate);
    writeItem(buf, p.leggings);
    writeItem(buf, p.boots);
    writeItem(buf, p.body ?? { network_id: 0 });
  }

  decode(buf: BufferReader): MobArmorEquipmentPacket {
    const runtime_entity_id = buf.readVarInt64();
    const helmet = readItem(buf);
    const chestplate = readItem(buf);
    const leggings = readItem(buf);
    const boots = readItem(buf);
    const body = readItem(buf);
    return { runtime_entity_id, helmet, chestplate, leggings, boots, body };
  }
}
