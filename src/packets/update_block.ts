export interface BlockCoordinates {
  x: number;
  y: number;
  z: number;
}

export interface UpdateBlockPacket {
  position: BlockCoordinates;
  block_runtime_id: number;
  flags: number;
  layer: number;
}
