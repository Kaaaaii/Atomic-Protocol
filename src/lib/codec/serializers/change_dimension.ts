import { ChangeDimensionPacket } from "../../../packets/change_dimension";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ChangeDimensionSerializer implements PacketSerializer<ChangeDimensionPacket> {
  encode(buf: BufferWriter, p: ChangeDimensionPacket) {
    buf.writeZigZag32(p.dimension);
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeBool(p.respawn);
    if (p.loading_screen_id !== undefined && p.loading_screen_id !== null) {
      buf.writeBool(true);
      buf.writeInt32LE(p.loading_screen_id);
    } else {
      buf.writeBool(false);
    }
  }

  decode(buf: BufferReader): ChangeDimensionPacket {
    const dimension = buf.readZigZag32();
    const position = { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
    const respawn = buf.readBool();
    const hasLoading = buf.readBool();
    const loading_screen_id = hasLoading ? Number(buf.readInt32LE()) : undefined;
    return { dimension, position, respawn, loading_screen_id };
  }
}
