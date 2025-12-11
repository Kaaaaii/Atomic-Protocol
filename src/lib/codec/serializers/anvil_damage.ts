import { AnvilDamagePacket } from "../../../packets/anvil_damage";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function writeBlockCoords(buf: BufferWriter, pos: AnvilDamagePacket["position"]) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}

function readBlockCoords(buf: BufferReader): AnvilDamagePacket["position"] {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

export class AnvilDamageSerializer implements PacketSerializer<AnvilDamagePacket> {
  encode(buf: BufferWriter, p: AnvilDamagePacket) {
    buf.writeUInt8(p.damage);
    writeBlockCoords(buf, p.position);
  }

  decode(buf: BufferReader): AnvilDamagePacket {
    const damage = buf.readUInt8();
    const position = readBlockCoords(buf);
    return { damage, position };
  }
}
