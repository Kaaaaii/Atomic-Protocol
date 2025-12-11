export type AnimateAction =
  | "none"
  | "swing_arm"
  | "unknown"
  | "wake_up"
  | "critical_hit"
  | "magic_critical_hit"
  | "row_right"
  | "row_left"
  | number;

export interface AnimatePacket {
  action_id: AnimateAction;
  runtime_entity_id: bigint;
  data: number;
  swing_source: number;
}
