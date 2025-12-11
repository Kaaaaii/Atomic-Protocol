export type SimpleEventType = "uninitialized_subtype" | "enable_commands" | "disable_commands" | "unlock_world_template_settings" | number;

export interface SimpleEventPacket {
  event_type: SimpleEventType;
}
