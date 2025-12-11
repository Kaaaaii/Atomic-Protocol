import { DisconnectPacket, DisconnectReason } from "../../../packets/disconnect";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const REASON_MAP: DisconnectReason[] = [
  "unknown",
  "cant_connect_no_internet",
  "no_permissions",
  "unrecoverable_error",
  "third_party_blocked",
  "third_party_no_internet",
  "third_party_bad_ip",
  "third_party_no_server_or_server_locked",
  "version_mismatch",
  "skin_issue",
  "invite_session_not_found",
  "edu_level_settings_missing",
  "local_server_not_found",
  "legacy_disconnect",
  "user_leave_game_attempted",
  "platform_locked_skins_error",
  "realms_world_unassigned",
  "realms_server_cant_connect",
  "realms_server_hidden",
  "realms_server_disabled_beta",
  "realms_server_disabled",
  "cross_platform_disallowed",
  "cant_connect",
  "session_not_found",
  "client_settings_incompatible_with_server",
  "server_full",
  "invalid_platform_skin",
  "edition_version_mismatch",
  "edition_mismatch",
  "level_newer_than_exe_version",
  "no_fail_occurred",
];

export class DisconnectSerializer implements PacketSerializer<DisconnectPacket> {
  encode(buf: BufferWriter, p: DisconnectPacket) {
    const reason = typeof p.reason === "number" ? p.reason : REASON_MAP.indexOf(p.reason);
    buf.writeVarInt(reason);
    const hide = !!p.hide_disconnect_reason || !!(p as any).hide_disconnect_screen || !!(p as any).message_skipped;
    buf.writeBool(hide);
    if (!hide) {
      buf.writeString(p.message ?? "");
      buf.writeString(p.filtered_message ?? "");
    }
  }
  decode(buf: BufferReader): DisconnectPacket {
    const reasonCode = buf.readVarInt();
    const reason = REASON_MAP[reasonCode] ?? reasonCode;
    const hide = buf.readBool();
    let message = "";
    let filtered_message = "";
    if (!hide) {
      message = buf.readString();
      filtered_message = buf.readString();
    }
    return { reason, hide_disconnect_reason: hide, message, filtered_message };
  }
}
