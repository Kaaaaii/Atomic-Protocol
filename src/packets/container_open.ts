export interface ContainerOpenPacket {
  window_id: string | number;
  window_type: string | number;
  coordinates: { x: number; y: number; z: number };
  runtime_entity_id: bigint;
}
