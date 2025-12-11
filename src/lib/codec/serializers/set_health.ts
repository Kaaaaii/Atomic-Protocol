import { SetHealthPacket } from "../../../packets/set_health";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetHealthSerializer implements PacketSerializer<SetHealthPacket> {
  encode(buf: BufferWriter, p: SetHealthPacket) {
    buf.writeZigZag32(p.health);
  }

  decode(buf: BufferReader): SetHealthPacket {
    return { health: buf.readZigZag32() };
  }
}
