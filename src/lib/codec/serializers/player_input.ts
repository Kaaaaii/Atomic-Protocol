import { PlayerInputPacket } from "../../../packets/player_input";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class PlayerInputSerializer implements PacketSerializer<PlayerInputPacket> {
  encode(buf: BufferWriter, p: PlayerInputPacket) {
    buf.writeFloatLE(p.motion_x);
    buf.writeFloatLE(p.motion_z);
    buf.writeBool(p.jumping);
    buf.writeBool(p.sneaking);
  }

  decode(buf: BufferReader): PlayerInputPacket {
    const motion_x = buf.readFloatLE();
    const motion_z = buf.readFloatLE();
    const jumping = buf.readBool();
    const sneaking = buf.readBool();
    return { motion_x, motion_z, jumping, sneaking };
  }
}
