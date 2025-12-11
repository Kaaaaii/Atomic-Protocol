import { SetEntityMotionPacket } from "../../../packets/set_entity_motion";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetEntityMotionSerializer implements PacketSerializer<SetEntityMotionPacket> {
  encode(buf: BufferWriter, p: SetEntityMotionPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeFloatLE(p.velocity.x);
    buf.writeFloatLE(p.velocity.y);
    buf.writeFloatLE(p.velocity.z);
    buf.writeVarInt64(p.tick);
  }

  decode(buf: BufferReader): SetEntityMotionPacket {
    const runtime_entity_id = buf.readVarInt64();
    const velocity = { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
    const tick = buf.readVarInt64();
    return { runtime_entity_id, velocity, tick };
  }
}
