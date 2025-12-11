import { LevelEventPacket } from "../../../packets/level_event";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class LevelEventSerializer implements PacketSerializer<LevelEventPacket> {
  encode(buf: BufferWriter, p: LevelEventPacket) {
    const eventCode = typeof p.event === "number" ? p.event : 0;
    buf.writeZigZag32(eventCode);
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeZigZag32(p.data);
  }

  decode(buf: BufferReader): LevelEventPacket {
    const eventCode = buf.readZigZag32();
    const position = {
      x: buf.readFloatLE(),
      y: buf.readFloatLE(),
      z: buf.readFloatLE(),
    };
    const data = buf.readZigZag32();
    return { event: eventCode, position, data };
  }
}
