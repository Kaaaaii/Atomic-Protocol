import { AddItemEntityPacket } from "../../../packets/add_item_entity";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";
import { readItem, writeItem } from "./shared_items";

function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

export class AddItemEntitySerializer implements PacketSerializer<AddItemEntityPacket> {
  encode(buf: BufferWriter, p: AddItemEntityPacket) {
    buf.writeZigZag64(p.entity_id_self);
    buf.writeVarInt64(p.runtime_entity_id);
    if (p.item) writeItem(buf, p.item);
    else buf.writeZigZag32(0);
    const pos = p.position ?? { x: 0, y: 0, z: 0 };
    buf.writeFloatLE(pos.x);
    buf.writeFloatLE(pos.y);
    buf.writeFloatLE(pos.z);
    const vel = p.motion ?? { x: 0, y: 0, z: 0 };
    buf.writeFloatLE(vel.x);
    buf.writeFloatLE(vel.y);
    buf.writeFloatLE(vel.z);
    const meta = p.metadata_raw ?? Buffer.from([0xff]);
    buf.writeBuffer(meta);
    buf.writeBool(p.from_fishing ?? false);
  }

  decode(buf: BufferReader): AddItemEntityPacket {
    const entity_id_self = buf.readZigZag64();
    const runtime_entity_id = buf.readVarInt64();
    const item = readItem(buf);
    const position = readVec3(buf);
    const motion = readVec3(buf);
    const remainderLen = buf.remaining();
    let metadata_raw = Buffer.alloc(0);
    let from_fishing = false;
    if (remainderLen > 0) {
      const rest = buf.readBytes(remainderLen);
      if (rest.length > 0) {
        metadata_raw = Buffer.from(rest.subarray(0, Math.max(0, rest.length - 1)));
        from_fishing = !!rest[rest.length - 1];
      }
    }
    return { entity_id_self, runtime_entity_id, item, position, motion, metadata_raw, from_fishing };
  }
}
