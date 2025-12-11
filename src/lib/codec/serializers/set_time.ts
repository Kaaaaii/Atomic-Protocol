import { SetTimePacket } from "../../../packets/set_time";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetTimeSerializer implements PacketSerializer<SetTimePacket> {
  encode(buf: BufferWriter, p: SetTimePacket) {
    buf.writeZigZag32(p.time);
  }

  decode(buf: BufferReader): SetTimePacket {
    return { time: buf.readZigZag32() };
  }
}
