import { AddPaintingPacket } from "../../../packets/add_painting";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

export class AddPaintingSerializer implements PacketSerializer<AddPaintingPacket> {
  encode(buf: BufferWriter, p: AddPaintingPacket) {
    buf.writeZigZag64(p.entity_id_self);
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeFloatLE(p.coordinates.x);
    buf.writeFloatLE(p.coordinates.y);
    buf.writeFloatLE(p.coordinates.z);
    buf.writeZigZag32(p.direction);
    buf.writeString(p.title);
  }

  decode(buf: BufferReader): AddPaintingPacket {
    const entity_id_self = buf.readZigZag64();
    const runtime_entity_id = buf.readVarInt64();
    const coordinates = readVec3(buf);
    const direction = buf.readZigZag32();
    const title = buf.readString();
    return { entity_id_self, runtime_entity_id, coordinates, direction, title };
  }
}
