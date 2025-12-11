export interface AttributeModifier {
  id: string;
  name: string;
  amount: number;
  operation: number;
  operand: number;
  serializable: boolean;
}

export interface PlayerAttribute {
  min: number;
  max: number;
  current: number;
  default_min: number;
  default_max: number;
  default_value: number;
  name: string;
  modifiers: AttributeModifier[];
}

export interface UpdateAttributesPacket {
  runtime_entity_id: bigint;
  attributes: PlayerAttribute[];
  tick: bigint;
}
