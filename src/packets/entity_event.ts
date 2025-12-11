export type EntityEventId = number | string;

export interface EntityEventPacket {
  runtime_entity_id: bigint;
  event_id: EntityEventId;
  data: number;
}
