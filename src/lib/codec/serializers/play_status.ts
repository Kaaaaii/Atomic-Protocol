import { PlayStatusPacket } from "../../../packets/play_status";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const PLAY_STATUS: Record<number, string> = {
  0: "login_success",
  1: "failed_client",
  2: "failed_spawn",
  3: "player_spawn",
  4: "failed_invalid_tenant",
  5: "failed_vanilla_edu",
  6: "failed_edu_vanilla",
  7: "failed_server_full",
  8: "failed_editor_vanilla_mismatch",
  9: "failed_vanilla_editor_mismatch",
};

export class PlayStatusSerializer implements PacketSerializer<PlayStatusPacket> {
  encode(buf: BufferWriter, p: PlayStatusPacket) {
    const value = typeof p.status === "number" ? p.status : Number(Object.entries(PLAY_STATUS).find(([, v]) => v === p.status)?.[0] ?? 0);
    buf.writeInt32BE(value);
  }
  decode(buf: BufferReader): PlayStatusPacket {
    const code = buf.readInt32BE();
    return { status: PLAY_STATUS[code] ?? code };
  }
}
