import { BlockEventPacket, BlockEventType } from "../../../packets/block_event";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const BLOCK_EVENT_MAP: Record<number, BlockEventType> = {
  0: "sound",
  1: "change_state",
};

const BLOCK_EVENT_INV: Record<string, number> = {
  sound: 0,
  change_state: 1,
};

function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}
function writeBlockCoords(buf: BufferWriter, pos: { x: number; y: number; z: number }) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}

export class BlockEventSerializer implements PacketSerializer<BlockEventPacket> {
  encode(buf: BufferWriter, p: BlockEventPacket) {
    writeBlockCoords(buf, p.position);
    const typeId = typeof p.type === "number" ? p.type : BLOCK_EVENT_INV[p.type] ?? 0;
    buf.writeZigZag32(typeId);
    buf.writeZigZag32(p.data);
  }

  decode(buf: BufferReader): BlockEventPacket {
    const position = readBlockCoords(buf);
    const typeId = buf.readZigZag32();
    const data = buf.readZigZag32();
    return { position, type: BLOCK_EVENT_MAP[typeId] ?? typeId, data };
  }
}
