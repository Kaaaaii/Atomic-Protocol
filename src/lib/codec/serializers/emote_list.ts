import { EmoteListPacket } from "../../../packets/emote_list";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class EmoteListSerializer implements PacketSerializer<EmoteListPacket> {
  encode(buf: BufferWriter, p: EmoteListPacket) {
    buf.writeVarInt64(p.player_id);
    buf.writeVarInt(p.emote_pieces.length);
    for (const e of p.emote_pieces) buf.writeUuid(e);
  }

  decode(buf: BufferReader): EmoteListPacket {
    const player_id = buf.readVarInt64();
    const len = buf.readVarInt();
    const emote_pieces = [];
    for (let i = 0; i < len; i++) emote_pieces.push(buf.readUuid());
    return { player_id, emote_pieces };
  }
}
