import { TransferPacket } from "../../../packets/transfer";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class TransferSerializer implements PacketSerializer<TransferPacket> {
  encode(buf: BufferWriter, p: TransferPacket) {
    buf.writeString(p.server_address);
    buf.writeUInt16LE(p.port);
    buf.writeBool(p.reload_world ?? false);
  }

  decode(buf: BufferReader): TransferPacket {
    const server_address = buf.readString();
    const port = buf.readUInt16LE();
    const reload_world = buf.readBool();
    return { server_address, port, reload_world };
  }
}
