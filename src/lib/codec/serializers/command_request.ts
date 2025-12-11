import { CommandRequestPacket } from "../../../packets/command_request";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class CommandRequestSerializer implements PacketSerializer<CommandRequestPacket> {
  encode(buf: BufferWriter, p: CommandRequestPacket) {
    buf.writeString(p.command);

    // CommandOrigin
    buf.writeString("player");
    buf.writeUuid(p.uuid);
    buf.writeString(p.requestId);
    buf.writeInt64LE(p.playerEntityId);

    buf.writeBool(p.internal);
    buf.writeString("latest");
  }

  decode(buf: BufferReader) {
    const p = new CommandRequestPacket();

    p.command = buf.readString();
    buf.readString(); // origin string
    p.uuid = buf.readUuid();
    p.requestId = buf.readString();
    p.playerEntityId = buf.readInt64LE();
    p.internal = buf.readBool();
    buf.readString(); // version ignored

    return p;
  }
}
