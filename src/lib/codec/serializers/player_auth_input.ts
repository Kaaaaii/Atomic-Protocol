import { PlayerAuthInputPacket } from "../../../packets/player_auth_input";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class PlayerAuthInputSerializer implements PacketSerializer<PlayerAuthInputPacket> {
  encode(buf: BufferWriter, p: PlayerAuthInputPacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }

  decode(buf: BufferReader): PlayerAuthInputPacket {
    return { raw: buf.readBytes(buf.remaining()) };
  }
}
