import { ContainerClosePacket } from "../../../packets/container_close";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ContainerCloseSerializer implements PacketSerializer<ContainerClosePacket> {
  encode(buf: BufferWriter, p: ContainerClosePacket) {
    buf.writeUInt8(typeof p.window_id === "number" ? p.window_id : 0);
    buf.writeUInt8(typeof p.window_type === "number" ? p.window_type : 0);
    buf.writeBool(p.server);
  }

  decode(buf: BufferReader): ContainerClosePacket {
    const window_id = buf.readUInt8();
    const window_type = buf.readUInt8();
    const server = buf.readBool();
    return { window_id, window_type, server };
  }
}
