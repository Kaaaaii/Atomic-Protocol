export interface AddPaintingPacket {
  entity_id_self: bigint;
  runtime_entity_id: bigint;
  coordinates: { x: number; y: number; z: number };
  direction: number;
  title: string;
}
