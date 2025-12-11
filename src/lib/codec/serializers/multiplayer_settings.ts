import { MultiplayerSettingsPacket, MultiplayerAction } from "../../../packets/multiplayer_settings";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const ACTIONS: MultiplayerAction[] = ["enable_multiplayer", "disable_multiplayer", "refresh_join_code"];
const ACTION_INV: Record<string, number> = ACTIONS.reduce(
  (acc, action, idx) => Object.assign(acc, { [String(action)]: idx }),
  {} as Record<string, number>,
);

export class MultiplayerSettingsSerializer implements PacketSerializer<MultiplayerSettingsPacket> {
  encode(buf: BufferWriter, p: MultiplayerSettingsPacket) {
    const id = typeof p.action_type === "number" ? p.action_type : ACTION_INV[p.action_type] ?? 0;
    buf.writeZigZag32(id);
  }

  decode(buf: BufferReader): MultiplayerSettingsPacket {
    const id = buf.readZigZag32();
    const action_type = ACTIONS[id] ?? id;
    return { action_type };
  }
}
