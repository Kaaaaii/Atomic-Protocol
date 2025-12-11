import { LoginPacket } from "../../../packets/login";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class LoginSerializer implements PacketSerializer<LoginPacket> {
  encode(buf: BufferWriter, p: LoginPacket) {
    buf.writeInt32BE(p.protocol_version);

    const inner = new BufferWriter();
    inner.writeLittleString(p.identity);
    inner.writeLittleString(p.client);
    const payload = inner.final();

    buf.writeVarInt(payload.length);
    buf.writeBuffer(payload);
  }

  decode(buf: BufferReader): LoginPacket {
    const protocol_version = buf.readInt32BE();
    const len = buf.readVarInt();
    const inner = new BufferReader(buf.readBytes(len));
    return {
      protocol_version,
      identity: inner.readLittleString(),
      client: inner.readLittleString(),
    };
  }
}
