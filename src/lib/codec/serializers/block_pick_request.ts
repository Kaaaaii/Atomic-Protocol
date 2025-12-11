import { BlockPickRequestPacket } from "../../../packets/block_pick_request";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class BlockPickRequestSerializer implements PacketSerializer<BlockPickRequestPacket> {
  encode(buf: BufferWriter, p: BlockPickRequestPacket) {
    buf.writeInt32LE(p.x);
    buf.writeInt32BE(p.y);
    buf.writeInt32LE(p.z);
    buf.writeBool(p.add_user_data);
  }

  decode(buf: BufferReader): BlockPickRequestPacket {
    const x = buf.readInt32LE();
    const y = buf.readInt32BE();
    const z = buf.readInt32LE();
    const add_user_data = buf.readBool();
    return { x, y, z, add_user_data };
  }
}
