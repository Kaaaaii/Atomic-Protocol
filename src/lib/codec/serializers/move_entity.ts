import { MoveEntityPacket } from "../../../packets/move_entity";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

export class MoveEntitySerializer implements PacketSerializer<MoveEntityPacket> {
  encode(buf: BufferWriter, p: MoveEntityPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeUInt8(p.flags);
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeUInt8(p.rotation.yaw);
    buf.writeUInt8(p.rotation.pitch);
    buf.writeUInt8(p.rotation.head_yaw);
  }

  decode(buf: BufferReader): MoveEntityPacket {
    const runtime_entity_id = buf.readVarInt64();
    const flags = buf.readUInt8();
    const position = readVec3(buf);
    const rotation = {
      yaw: buf.readUInt8(),
      pitch: buf.readUInt8(),
      head_yaw: buf.readUInt8(),
    };

    return { runtime_entity_id, flags, position, rotation };
  }
}
