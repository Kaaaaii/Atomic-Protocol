import { SetSpawnPositionPacket, SpawnType } from "../../../packets/set_spawn_position";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const SPAWN_MAP: Record<number, SpawnType> = { 0: "player", 1: "world" };
const SPAWN_INV: Record<string, number> = { player: 0, world: 1 };

function writeBlockCoords(buf: BufferWriter, pos: { x: number; y: number; z: number }) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}
function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

export class SetSpawnPositionSerializer implements PacketSerializer<SetSpawnPositionPacket> {
  encode(buf: BufferWriter, p: SetSpawnPositionPacket) {
    const typeId = typeof p.spawn_type === "number" ? p.spawn_type : SPAWN_INV[p.spawn_type] ?? 0;
    buf.writeZigZag32(typeId);
    writeBlockCoords(buf, p.player_position);
    buf.writeZigZag32(p.dimension);
    writeBlockCoords(buf, p.world_position);
  }

  decode(buf: BufferReader): SetSpawnPositionPacket {
    const typeId = buf.readZigZag32();
    const spawn_type = SPAWN_MAP[typeId] ?? typeId;
    const player_position = readBlockCoords(buf);
    const dimension = buf.readZigZag32();
    const world_position = readBlockCoords(buf);
    return { spawn_type, player_position, dimension, world_position };
  }
}
