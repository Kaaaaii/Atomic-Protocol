export type PermissionLevel = "visitor" | "member" | "operator" | "custom" | number;

export interface RequestPermissionsPacket {
  entity_unique_id: bigint;
  permission_level: PermissionLevel;
  requested_permissions: number;
}
