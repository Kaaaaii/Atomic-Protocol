import { SetPlayerGameTypePacket } from "../../../packets/set_player_game_type";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetPlayerGameTypeSerializer implements PacketSerializer<SetPlayerGameTypePacket> {
  encode(buf: BufferWriter, p: SetPlayerGameTypePacket) {
    buf.writeZigZag32(typeof p.gamemode === "number" ? p.gamemode : 0);
  }

  decode(buf: BufferReader): SetPlayerGameTypePacket {
    return { gamemode: buf.readZigZag32() };
  }
}
