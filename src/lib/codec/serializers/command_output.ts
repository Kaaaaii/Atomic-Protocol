import { CommandOutputPacket } from "../../../packets/command_output";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class CommandOutputSerializer implements PacketSerializer<CommandOutputPacket> {
  encode(buf: BufferWriter, p: CommandOutputPacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }
  decode(buf: BufferReader): CommandOutputPacket {
    return { raw: buf.readBytes(buf.remaining()) };
  }
}
