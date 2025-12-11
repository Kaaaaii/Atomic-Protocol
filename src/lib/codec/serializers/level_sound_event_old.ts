import { LevelSoundEventOldPacket } from "../../../packets/level_sound_event_old";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

export class LevelSoundEventOldSerializer implements PacketSerializer<LevelSoundEventOldPacket> {
  encode(buf: BufferWriter, p: LevelSoundEventOldPacket) {
    buf.writeUInt8(p.sound_id);
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeZigZag32(p.block_id);
    buf.writeZigZag32(p.entity_type);
    buf.writeBool(p.is_baby_mob);
    buf.writeBool(p.is_global);
  }

  decode(buf: BufferReader): LevelSoundEventOldPacket {
    const sound_id = buf.readUInt8();
    const position = readVec3(buf);
    const block_id = buf.readZigZag32();
    const entity_type = buf.readZigZag32();
    const is_baby_mob = buf.readBool();
    const is_global = buf.readBool();
    return { sound_id, position, block_id, entity_type, is_baby_mob, is_global };
  }
}
