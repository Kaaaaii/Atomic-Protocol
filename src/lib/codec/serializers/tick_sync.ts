import { TickSyncPacket } from "../../../packets/tick_sync";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class TickSyncSerializer implements PacketSerializer<TickSyncPacket> {
  encode(buf: BufferWriter, p: TickSyncPacket) {
    buf.writeInt64LE(p.request_time);
    buf.writeInt64LE(p.response_time);
  }

  decode(buf: BufferReader): TickSyncPacket {
    const request_time = buf.readInt64LE();
    const response_time = buf.readInt64LE();
    return { request_time, response_time };
  }
}
