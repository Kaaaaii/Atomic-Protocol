import { AnimatePacket, AnimateAction } from "../../../packets/animate";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const ACTION_MAP: AnimateAction[] = [
  "none",
  "swing_arm",
  "unknown",
  "wake_up",
  "critical_hit",
  "magic_critical_hit",
  "row_right",
  "row_left",
];

const ACTION_INV: Record<string, number> = {
  none: 0,
  swing_arm: 1,
  unknown: 2,
  wake_up: 3,
  critical_hit: 4,
  magic_critical_hit: 5,
  row_right: 128,
  row_left: 129,
};

export class AnimateSerializer implements PacketSerializer<AnimatePacket> {
  encode(buf: BufferWriter, p: AnimatePacket) {
    const id = typeof p.action_id === "number" ? p.action_id : ACTION_INV[p.action_id] ?? 0;
    buf.writeZigZag32(id);
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeFloatLE(p.data);
    buf.writeInt32LE(p.swing_source);
  }

  decode(buf: BufferReader): AnimatePacket {
    const actionId = buf.readZigZag32();
    const action_id = ACTION_MAP[actionId] ?? actionId;
    const runtime_entity_id = buf.readVarInt64();
    const data = buf.readFloatLE();
    const swing_source = buf.readInt32LE();
    return { action_id, runtime_entity_id, data, swing_source };
  }
}
