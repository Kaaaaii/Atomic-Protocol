import { EventPacket } from "../../../packets/event";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class EventSerializer implements PacketSerializer<EventPacket> {
  encode(buf: BufferWriter, p: EventPacket) {
    buf.writeVarInt64(p.runtime_id);
    buf.writeZigZag32(typeof p.event_type === "number" ? p.event_type : 0);
    buf.writeBool(p.use_player_id);
    buf.writeBuffer(p.event_data ?? Buffer.alloc(0));
  }

  decode(buf: BufferReader): EventPacket {
    const runtime_id = buf.readVarInt64();
    const event_type = buf.readZigZag32();
    const use_player_id = buf.readBool();
    const event_data = buf.readBytes(buf.remaining());
    return { runtime_id, event_type, use_player_id, event_data };
  }
}
