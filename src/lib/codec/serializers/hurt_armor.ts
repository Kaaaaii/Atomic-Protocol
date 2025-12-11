import { HurtArmorPacket } from "../../../packets/hurt_armor";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class HurtArmorSerializer implements PacketSerializer<HurtArmorPacket> {
  encode(buf: BufferWriter, p: HurtArmorPacket) {
    buf.writeZigZag32(p.cause);
    buf.writeZigZag32(p.damage);
    buf.writeZigZag64(p.armor_slots);
  }

  decode(buf: BufferReader): HurtArmorPacket {
    const cause = buf.readZigZag32();
    const damage = buf.readZigZag32();
    const armor_slots = buf.readZigZag64();
    return { cause, damage, armor_slots };
  }
}
