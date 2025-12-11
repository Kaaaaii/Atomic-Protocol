export type InteractAction =
  | "leave_vehicle"
  | "mouse_over_entity"
  | "npc_open"
  | "open_inventory"
  | number;

export interface InteractPacket {
  action_id: InteractAction;
  target_entity_id: bigint;
  position?: { x: number; y: number; z: number };
}
