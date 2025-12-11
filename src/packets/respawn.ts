export interface RespawnPacket {
  position: { x: number; y: number; z: number };
  state: number;
  runtime_entity_id: bigint;
}
