import { BlockCoordinates } from "./update_block";

export type SpawnType = "player" | "world" | number;

export interface SetSpawnPositionPacket {
  spawn_type: SpawnType;
  player_position: BlockCoordinates;
  dimension: number;
  world_position: BlockCoordinates;
}
