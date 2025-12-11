import { UpdatePlayerGameTypePacket } from "../../../packets/update_player_game_type";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class UpdatePlayerGameTypeSerializer implements PacketSerializer<UpdatePlayerGameTypePacket> {
  encode(buf: BufferWriter, p: UpdatePlayerGameTypePacket) {
    buf.writeZigZag32(typeof p.gamemode === "number" ? p.gamemode : 0);
    buf.writeZigZag64(p.player_unique_id);
    buf.writeVarInt64(p.tick);
  }

  decode(buf: BufferReader): UpdatePlayerGameTypePacket {
    const gamemode = buf.readZigZag32();
    const player_unique_id = buf.readZigZag64();
    const tick = buf.readVarInt64();
    return { gamemode, player_unique_id, tick };
  }
}
