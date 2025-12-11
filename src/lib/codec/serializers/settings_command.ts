import { SettingsCommandPacket } from "../../../packets/settings_command";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SettingsCommandSerializer implements PacketSerializer<SettingsCommandPacket> {
  encode(buf: BufferWriter, p: SettingsCommandPacket) {
    buf.writeString(p.command_line);
    buf.writeBool(p.suppress_output);
  }

  decode(buf: BufferReader): SettingsCommandPacket {
    const command_line = buf.readString();
    const suppress_output = buf.readBool();
    return { command_line, suppress_output };
  }
}
