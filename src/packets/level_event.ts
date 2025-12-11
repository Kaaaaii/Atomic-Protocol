export interface LevelEventPacket {
  event: number | string;
  position: { x: number; y: number; z: number };
  data: number;
}
