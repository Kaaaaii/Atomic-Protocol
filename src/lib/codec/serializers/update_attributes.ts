import { UpdateAttributesPacket, PlayerAttribute, AttributeModifier } from "../../../packets/update_attributes";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function writeModifier(buf: BufferWriter, m: AttributeModifier) {
  buf.writeString(m.id);
  buf.writeString(m.name);
  buf.writeFloatLE(m.amount);
  buf.writeInt32LE(m.operation);
  buf.writeInt32LE(m.operand);
  buf.writeBool(m.serializable);
}

function readModifier(buf: BufferReader): AttributeModifier {
  return {
    id: buf.readString(),
    name: buf.readString(),
    amount: buf.readFloatLE(),
    operation: buf.readInt32LE(),
    operand: buf.readInt32LE(),
    serializable: buf.readBool(),
  };
}

function writeAttribute(buf: BufferWriter, a: PlayerAttribute) {
  buf.writeFloatLE(a.min);
  buf.writeFloatLE(a.max);
  buf.writeFloatLE(a.current);
  buf.writeFloatLE(a.default_min);
  buf.writeFloatLE(a.default_max);
  buf.writeFloatLE(a.default_value);
  buf.writeString(a.name);
  buf.writeVarInt(a.modifiers.length);
  for (const m of a.modifiers) writeModifier(buf, m);
}

function readAttribute(buf: BufferReader): PlayerAttribute {
  const min = buf.readFloatLE();
  const max = buf.readFloatLE();
  const current = buf.readFloatLE();
  const default_min = buf.readFloatLE();
  const default_max = buf.readFloatLE();
  const default_value = buf.readFloatLE();
  const name = buf.readString();
  const modifiers: AttributeModifier[] = [];
  const count = buf.readVarInt();
  for (let i = 0; i < count; i++) modifiers.push(readModifier(buf));
  return { min, max, current, default_min, default_max, default_value, name, modifiers };
}

export class UpdateAttributesSerializer implements PacketSerializer<UpdateAttributesPacket> {
  encode(buf: BufferWriter, p: UpdateAttributesPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeVarInt(p.attributes.length);
    for (const a of p.attributes) writeAttribute(buf, a);
    buf.writeVarInt64(p.tick);
  }

  decode(buf: BufferReader): UpdateAttributesPacket {
    const runtime_entity_id = buf.readVarInt64();
    const attributes: PlayerAttribute[] = [];
    const len = buf.readVarInt();
    for (let i = 0; i < len; i++) attributes.push(readAttribute(buf));
    const tick = buf.readVarInt64();
    return { runtime_entity_id, attributes, tick };
  }
}
