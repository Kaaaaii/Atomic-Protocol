import { ServerPostMovePacket } from "../../../packets/server_post_move";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ServerPostMoveSerializer implements PacketSerializer<ServerPostMovePacket> {
  encode(buf: BufferWriter, p: ServerPostMovePacket) {
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
  }

  decode(buf: BufferReader): ServerPostMovePacket {
    const x = buf.readFloatLE();
    const y = buf.readFloatLE();
    const z = buf.readFloatLE();
    return { position: { x, y, z } };
  }
}
