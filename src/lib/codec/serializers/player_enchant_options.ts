import { PlayerEnchantOptionsPacket } from "../../../packets/player_enchant_options";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class PlayerEnchantOptionsSerializer implements PacketSerializer<PlayerEnchantOptionsPacket> {
  encode(buf: BufferWriter, p: PlayerEnchantOptionsPacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }
  decode(buf: BufferReader): PlayerEnchantOptionsPacket {
    return { raw: buf.readBytes(buf.remaining()) };
  }
}
