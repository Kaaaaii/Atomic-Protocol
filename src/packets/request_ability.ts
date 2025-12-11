export type AbilityType =
  | "build"
  | "mine"
  | "doors_and_switches"
  | "open_containers"
  | "attack_players"
  | "attack_mobs"
  | "operator_commands"
  | "teleport"
  | "invulnerable"
  | "flying"
  | "may_fly"
  | "instant_build"
  | "lightning"
  | "fly_speed"
  | "walk_speed"
  | "muted"
  | "world_builder"
  | "no_clip"
  | "ability_count"
  | number;

export type AbilityValueType = "bool" | "float" | number;

export interface RequestAbilityPacket {
  ability: AbilityType;
  value_type: AbilityValueType;
  bool_value: boolean;
  float_val: number;
}
