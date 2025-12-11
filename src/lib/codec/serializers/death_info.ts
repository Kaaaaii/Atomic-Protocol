import { DeathInfoPacket } from "../../../packets/death_info";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class DeathInfoSerializer implements PacketSerializer<DeathInfoPacket> {
  encode(buf: BufferWriter, p: DeathInfoPacket) {
    buf.writeString(p.cause);
    buf.writeVarInt(p.messages.length);
    for (const m of p.messages) buf.writeString(m);
  }

  decode(buf: BufferReader): DeathInfoPacket {
    const cause = buf.readString();
    const len = buf.readVarInt();
    const messages: string[] = [];
    for (let i = 0; i < len; i++) messages.push(buf.readString());
    return { cause, messages };
  }
}
