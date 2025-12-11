import { MobEffectPacket } from "../../../packets/mob_effect";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const EVENT_MAP = [0, "add", "update", "remove"] as const;
const EVENT_INV: Record<string, number> = { add: 1, update: 2, remove: 3 };

export class MobEffectSerializer implements PacketSerializer<MobEffectPacket> {
  encode(buf: BufferWriter, p: MobEffectPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    const eventId = typeof p.event_id === "number" ? p.event_id : EVENT_INV[p.event_id] ?? 0;
    buf.writeUInt8(eventId);
    buf.writeZigZag32(p.effect_id);
    buf.writeZigZag32(p.amplifier);
    buf.writeBool(p.particles);
    buf.writeZigZag32(p.duration);
    buf.writeVarInt64(p.tick);
    buf.writeBool(p.ambient);
  }

  decode(buf: BufferReader): MobEffectPacket {
    const runtime_entity_id = buf.readVarInt64();
    const eventId = buf.readUInt8();
    const event_id = EVENT_MAP[eventId] ?? eventId;
    const effect_id = buf.readZigZag32();
    const amplifier = buf.readZigZag32();
    const particles = buf.readBool();
    const duration = buf.readZigZag32();
    const tick = buf.readVarInt64();
    const ambient = buf.readBool();
    return { runtime_entity_id, event_id, effect_id, amplifier, particles, duration, tick, ambient };
  }
}
