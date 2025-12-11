import { SetEntityDataPacket, EntityPropertiesData } from "../../../packets/set_entity_data";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function writeProperties(buf: BufferWriter, props: EntityPropertiesData) {
  buf.writeVarInt(props.ints.length);
  for (const p of props.ints) {
    buf.writeVarInt(p.index);
    buf.writeZigZag32(p.value);
  }
  buf.writeVarInt(props.floats.length);
  for (const p of props.floats) {
    buf.writeVarInt(p.index);
    buf.writeFloatLE(p.value);
  }
}

function readProperties(buf: BufferReader): EntityPropertiesData {
  const intsLen = buf.readVarInt();
  const ints = [];
  for (let i = 0; i < intsLen; i++) {
    ints.push({ index: buf.readVarInt(), value: buf.readZigZag32() });
  }
  const floatsLen = buf.readVarInt();
  const floats = [];
  for (let i = 0; i < floatsLen; i++) {
    floats.push({ index: buf.readVarInt(), value: buf.readFloatLE() });
  }
  return { ints, floats };
}

export class SetEntityDataSerializer implements PacketSerializer<SetEntityDataPacket> {
  encode(buf: BufferWriter, p: SetEntityDataPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeBuffer(p.metadata_raw ?? Buffer.from([0xff]));
    writeProperties(buf, p.properties ?? { ints: [], floats: [] });
    buf.writeVarInt64(p.tick);
  }

  decode(buf: BufferReader): SetEntityDataPacket {
    const runtime_entity_id = buf.readVarInt64();
    const remaining = buf.readBytes(buf.remaining());
    const temp = new BufferReader(remaining);

    // Extract metadata_raw up to sentinel 0xff
    let metaEnd = 0;
    while (temp.remaining() > 0) {
      const b = temp.readUInt8();
      metaEnd++;
      if (b === 0xff) break;
    }
    const metadata_raw = remaining.subarray(0, metaEnd);

    // Parse properties starting at metaEnd
    const propsReader = new BufferReader(remaining.subarray(metaEnd));
    const properties = readProperties(propsReader);

    // Tick follows properties
    const tickReader = new BufferReader(remaining.subarray(metaEnd + propsReader.position()));
    const tick = tickReader.readVarInt64();

    return { runtime_entity_id, metadata_raw, properties, tick };
  }
}
