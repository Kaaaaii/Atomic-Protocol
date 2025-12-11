export interface EntityLink {
  ridden_entity_id: bigint;
  rider_entity_id: bigint;
  type: number;
  immediate: boolean;
  rider_initiated: boolean;
  angular_velocity: number;
}

export interface SetEntityLinkPacket {
  link: EntityLink;
}
