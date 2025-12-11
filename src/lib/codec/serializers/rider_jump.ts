import { RiderJumpPacket } from "../../../packets/rider_jump";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class RiderJumpSerializer implements PacketSerializer<RiderJumpPacket> {
  encode(buf: BufferWriter, p: RiderJumpPacket) {
    buf.writeZigZag32(p.jump_strength);
  }

  decode(buf: BufferReader): RiderJumpPacket {
    return { jump_strength: buf.readZigZag32() };
  }
}
