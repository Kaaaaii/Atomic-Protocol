export interface EntityPropertiesValue {
  index: number;
  value: number;
}

export interface EntityPropertiesData {
  ints: EntityPropertiesValue[];
  floats: EntityPropertiesValue[];
}

export interface SetEntityDataPacket {
  runtime_entity_id: bigint;
  metadata_raw: Buffer;
  properties: EntityPropertiesData;
  tick: bigint;
}
