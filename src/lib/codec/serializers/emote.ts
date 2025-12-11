import { EmotePacket } from "../../../packets/emote";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class EmoteSerializer implements PacketSerializer<EmotePacket> {
  encode(buf: BufferWriter, p: EmotePacket) {
    buf.writeVarInt64(p.runtime_entity_id ?? 0n);
    buf.writeString(p.emote_id ?? "");
    buf.writeBool(!!p.flags);
    buf.writeString(p.xuid ?? "");
    buf.writeString(p.platform_id ?? "");
  }

  decode(buf: BufferReader): EmotePacket {
    const runtime_entity_id = buf.readVarInt64();
    const emote_id = buf.readString();
    const flags = buf.readBool() ? 1 : 0;
    const xuid = buf.readString();
    const platform_id = buf.readString();
    return { runtime_entity_id, emote_id, flags, xuid, platform_id };
  }
}
