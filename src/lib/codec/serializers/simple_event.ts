import { SimpleEventPacket, SimpleEventType } from "../../../packets/simple_event";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const MAP: Record<number, SimpleEventType> = { 0: "uninitialized_subtype", 1: "enable_commands", 2: "disable_commands", 3: "unlock_world_template_settings" };
const INV: Record<string, number> = { uninitialized_subtype: 0, enable_commands: 1, disable_commands: 2, unlock_world_template_settings: 3 };

export class SimpleEventSerializer implements PacketSerializer<SimpleEventPacket> {
  encode(buf: BufferWriter, p: SimpleEventPacket) {
    const id = typeof p.event_type === "number" ? p.event_type : INV[p.event_type] ?? 0;
    buf.writeUInt16LE(id);
  }

  decode(buf: BufferReader): SimpleEventPacket {
    const id = buf.readUInt16LE();
    return { event_type: MAP[id] ?? id };
  }
}
