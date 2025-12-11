import { PlayerArmorDamagePacket } from "../../../packets/player_armor_damage";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const SLOT_MAP = ["helmet", "chestplate", "leggings", "boots", "body"] as const;
const SLOT_INV: Record<string, number> = { helmet: 0, chestplate: 1, leggings: 2, boots: 3, body: 4 };

export class PlayerArmorDamageSerializer implements PacketSerializer<PlayerArmorDamagePacket> {
  encode(buf: BufferWriter, p: PlayerArmorDamagePacket) {
    buf.writeVarInt(p.entries.length);
    for (const e of p.entries) {
      const id = typeof e.armor_slot === "number" ? e.armor_slot : SLOT_INV[e.armor_slot] ?? 0;
      buf.writeUInt8(id);
      buf.writeInt16LE(e.damage);
    }
  }

  decode(buf: BufferReader): PlayerArmorDamagePacket {
    const len = buf.readVarInt();
    const entries = [];
    for (let i = 0; i < len; i++) {
      const armor_slot = SLOT_MAP[buf.readUInt8()] ?? 0;
      const damage = buf.readInt16LE();
      entries.push({ armor_slot, damage });
    }
    return { entries };
  }
}
