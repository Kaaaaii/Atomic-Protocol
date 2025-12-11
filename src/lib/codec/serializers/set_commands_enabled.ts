import { SetCommandsEnabledPacket } from "../../../packets/set_commands_enabled";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetCommandsEnabledSerializer implements PacketSerializer<SetCommandsEnabledPacket> {
  encode(buf: BufferWriter, p: SetCommandsEnabledPacket) {
    buf.writeBool(p.enabled);
  }

  decode(buf: BufferReader): SetCommandsEnabledPacket {
    return { enabled: buf.readBool() };
  }
}
