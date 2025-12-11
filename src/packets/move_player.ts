export type MovePlayerMode = "normal" | "reset" | "teleport" | "rotation" | number;

export interface MovePlayerTeleport {
  cause: string | number;
  source_entity_type: number | string;
}

export interface MovePlayerPacket {
  runtime_id: number;
  position: { x: number; y: number; z: number };
  pitch: number;
  yaw: number;
  head_yaw: number;
  mode: MovePlayerMode;
  on_ground: boolean;
  ridden_runtime_id: number;
  teleport?: MovePlayerTeleport;
  tick: bigint;
}
