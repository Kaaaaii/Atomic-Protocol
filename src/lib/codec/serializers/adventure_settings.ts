import { AdventureSettingsPacket } from "../../../packets/adventure_settings";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class AdventureSettingsSerializer implements PacketSerializer<AdventureSettingsPacket> {
  encode(buf: BufferWriter, p: AdventureSettingsPacket) {
    buf.writeVarInt(p.flags);
    buf.writeVarInt(p.command_permission);
    buf.writeVarInt(p.action_permissions);
    buf.writeVarInt(p.permission_level);
    buf.writeVarInt(p.custom_stored_permissions);
    buf.writeInt64LE(p.user_id);
  }

  decode(buf: BufferReader): AdventureSettingsPacket {
    const flags = buf.readVarInt();
    const command_permission = buf.readVarInt();
    const action_permissions = buf.readVarInt();
    const permission_level = buf.readVarInt();
    const custom_stored_permissions = buf.readVarInt();
    const user_id = buf.readInt64LE();
    return { flags, command_permission, action_permissions, permission_level, custom_stored_permissions, user_id };
  }
}
