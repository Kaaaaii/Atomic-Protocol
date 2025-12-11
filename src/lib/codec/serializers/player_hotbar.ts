import { PlayerHotbarPacket } from "../../../packets/player_hotbar";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class PlayerHotbarSerializer implements PacketSerializer<PlayerHotbarPacket> {
  encode(buf: BufferWriter, p: PlayerHotbarPacket) {
    buf.writeVarInt(p.selected_slot);
    buf.writeUInt8(typeof p.window_id === "number" ? p.window_id : 0);
    buf.writeBool(p.select_slot);
  }

  decode(buf: BufferReader): PlayerHotbarPacket {
    const selected_slot = buf.readVarInt();
    const window_id = buf.readUInt8();
    const select_slot = buf.readBool();
    return { selected_slot, window_id, select_slot };
  }
}
