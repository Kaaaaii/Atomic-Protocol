import { BlockEntityDataPacket } from "../../../packets/block_entity_data";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function writeBlockCoords(buf: BufferWriter, pos: { x: number; y: number; z: number }) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}
function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

export class BlockEntityDataSerializer implements PacketSerializer<BlockEntityDataPacket> {
  encode(buf: BufferWriter, p: BlockEntityDataPacket) {
    writeBlockCoords(buf, p.position);
    const nbt = p.nbt ?? { type: "end" };
    // NBT serialization omitted; store raw placeholder
    const raw = Buffer.from([]);
    buf.writeBuffer(raw);
  }

  decode(buf: BufferReader): BlockEntityDataPacket {
    const position = readBlockCoords(buf);
    const nbt = buf.readBytes(buf.remaining()); // placeholder raw
    return { position, nbt };
  }
}
