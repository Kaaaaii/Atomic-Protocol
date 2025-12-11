import { AddEntityPacket } from "../../../packets/add_entity";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

export class AddEntitySerializer implements PacketSerializer<AddEntityPacket> {
  encode(buf: BufferWriter, p: AddEntityPacket) {
    buf.writeZigZag64(p.unique_entity_id);
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeVarInt(p.entity_type);
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeFloatLE(p.motion.x);
    buf.writeFloatLE(p.motion.y);
    buf.writeFloatLE(p.motion.z);
    buf.writeFloatLE(p.rotation.x);
    buf.writeFloatLE(p.rotation.y);
    buf.writeFloatLE(p.head_rotation);
    const attrs = p.attributes ?? [];
    buf.writeVarInt(attrs.length);
    for (const a of attrs) {
      buf.writeString(a.name);
      buf.writeFloatLE(a.min);
      buf.writeFloatLE(a.max);
      buf.writeFloatLE(a.value);
    }
    buf.writeBuffer(p.metadata_raw ?? Buffer.from([0xff]));
    if (p.entity_links_raw) buf.writeBuffer(p.entity_links_raw);
  }

  decode(buf: BufferReader): AddEntityPacket {
    const unique_entity_id = buf.readZigZag64();
    const runtime_entity_id = buf.readVarInt64();
    const entity_type = buf.readVarInt();
    const position = readVec3(buf);
    const motion = readVec3(buf);
    const rotation = { x: buf.readFloatLE(), y: buf.readFloatLE() };
    const head_rotation = buf.readFloatLE();
    const attrCount = buf.readVarInt();
    const attributes = [];
    for (let i = 0; i < attrCount; i++) {
      const name = buf.readString();
      const min = buf.readFloatLE();
      const max = buf.readFloatLE();
      const value = buf.readFloatLE();
      attributes.push({ name, min, max, value });
    }
    const remainder = buf.remaining() > 0 ? buf.readBytes(buf.remaining()) : Buffer.alloc(0);
    const raw = remainder;

    return {
      unique_entity_id,
      runtime_entity_id,
      entity_type,
      position,
      motion,
      rotation,
      head_rotation,
      attributes,
      metadata_raw: remainder,
      raw,
    };
  }
}
