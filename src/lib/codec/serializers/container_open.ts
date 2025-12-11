import { ContainerOpenPacket } from "../../../packets/container_open";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function writeBlockCoords(buf: BufferWriter, pos: { x: number; y: number; z: number }) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}
function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

export class ContainerOpenSerializer implements PacketSerializer<ContainerOpenPacket> {
  encode(buf: BufferWriter, p: ContainerOpenPacket) {
    buf.writeUInt8(typeof p.window_id === "number" ? p.window_id : 0);
    buf.writeUInt8(typeof p.window_type === "number" ? p.window_type : 0);
    writeBlockCoords(buf, p.coordinates);
    buf.writeZigZag64(p.runtime_entity_id);
  }

  decode(buf: BufferReader): ContainerOpenPacket {
    const window_id = buf.readUInt8();
    const window_type = buf.readUInt8();
    const coordinates = readBlockCoords(buf);
    const runtime_entity_id = buf.readZigZag64();
    return { window_id, window_type, coordinates, runtime_entity_id };
  }
}
