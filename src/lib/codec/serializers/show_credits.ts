import { ShowCreditsPacket } from "../../../packets/show_credits";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ShowCreditsSerializer implements PacketSerializer<ShowCreditsPacket> {
  encode(buf: BufferWriter, p: ShowCreditsPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeZigZag32(p.status);
  }

  decode(buf: BufferReader): ShowCreditsPacket {
    const runtime_entity_id = buf.readVarInt64();
    const status = buf.readZigZag32();
    return { runtime_entity_id, status };
  }
}
