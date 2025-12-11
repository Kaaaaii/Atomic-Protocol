export interface Rotation {
  yaw: number;
  pitch: number;
  head_yaw: number;
}

export interface MoveEntityPacket {
  runtime_entity_id: bigint;
  flags: number;
  position: { x: number; y: number; z: number };
  rotation: Rotation;
}
