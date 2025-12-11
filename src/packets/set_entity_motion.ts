export interface SetEntityMotionPacket {
  runtime_entity_id: bigint;
  velocity: { x: number; y: number; z: number };
  tick: bigint;
}
