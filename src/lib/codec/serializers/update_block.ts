import { UpdateBlockPacket } from "../../../packets/update_block";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function writeBlockCoords(buf: BufferWriter, pos: UpdateBlockPacket["position"]) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}

function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

export class UpdateBlockSerializer implements PacketSerializer<UpdateBlockPacket> {
  encode(buf: BufferWriter, p: UpdateBlockPacket) {
    writeBlockCoords(buf, p.position);
    buf.writeVarInt(p.block_runtime_id);
    buf.writeVarInt(p.flags);
    buf.writeVarInt(p.layer);
  }

  decode(buf: BufferReader): UpdateBlockPacket {
    const position = readBlockCoords(buf);
    const block_runtime_id = buf.readVarInt();
    const flags = buf.readVarInt();
    const layer = buf.readVarInt();
    return { position, block_runtime_id, flags, layer };
  }
}
