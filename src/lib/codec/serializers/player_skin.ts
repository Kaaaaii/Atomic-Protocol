import { PlayerSkinPacket } from "../../../packets/player_skin";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class PlayerSkinSerializer implements PacketSerializer<PlayerSkinPacket> {
  encode(buf: BufferWriter, p: PlayerSkinPacket) {
    buf.writeUuid(p.uuid);
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }

  decode(buf: BufferReader): PlayerSkinPacket {
    const uuid = buf.readUuid();
    const raw = buf.readBytes(buf.remaining());
    return { uuid, raw };
  }
}
