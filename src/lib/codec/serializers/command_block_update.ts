import { CommandBlockUpdatePacket } from "../../../packets/command_block_update";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class CommandBlockUpdateSerializer implements PacketSerializer<CommandBlockUpdatePacket> {
  encode(buf: BufferWriter, p: CommandBlockUpdatePacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }
  decode(buf: BufferReader): CommandBlockUpdatePacket {
    return { raw: buf.readBytes(buf.remaining()) };
  }
}
