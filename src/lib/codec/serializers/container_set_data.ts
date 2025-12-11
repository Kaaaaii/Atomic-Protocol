import { ContainerSetDataPacket } from "../../../packets/container_set_data";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ContainerSetDataSerializer implements PacketSerializer<ContainerSetDataPacket> {
  encode(buf: BufferWriter, p: ContainerSetDataPacket) {
    buf.writeUInt8(typeof p.window_id === "number" ? p.window_id : 0);
    buf.writeZigZag32(p.property);
    buf.writeZigZag32(p.value);
  }

  decode(buf: BufferReader): ContainerSetDataPacket {
    const window_id = buf.readUInt8();
    const property = buf.readZigZag32();
    const value = buf.readZigZag32();
    return { window_id, property, value };
  }
}
