export interface AddEntityPacket {
  unique_entity_id: bigint;
  runtime_entity_id: bigint;
  entity_type: number;
  position: { x: number; y: number; z: number; };
  motion: { x: number; y: number; z: number; };
  rotation: { x: number; y: number; };
  head_rotation: number;
  attributes?: Array<{ name: string; min: number; max: number; value: number; }>;
  metadata_raw?: Buffer;
  entity_links_raw?: Buffer;
  raw?: Buffer;
}
