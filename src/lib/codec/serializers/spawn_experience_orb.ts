import { SpawnExperienceOrbPacket } from "../../../packets/spawn_experience_orb";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SpawnExperienceOrbSerializer implements PacketSerializer<SpawnExperienceOrbPacket> {
  encode(buf: BufferWriter, p: SpawnExperienceOrbPacket) {
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeZigZag32(p.count);
  }

  decode(buf: BufferReader): SpawnExperienceOrbPacket {
    const position = { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
    const count = buf.readZigZag32();
    return { position, count };
  }
}
