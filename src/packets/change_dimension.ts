export interface ChangeDimensionPacket {
  dimension: number;
  position: { x: number; y: number; z: number };
  respawn: boolean;
  loading_screen_id?: number | null;
}
