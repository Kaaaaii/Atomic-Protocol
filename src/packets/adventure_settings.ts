export interface AdventureSettingsPacket {
  flags: number;
  command_permission: number;
  action_permissions: number;
  permission_level: number;
  custom_stored_permissions: number;
  user_id: bigint;
}
