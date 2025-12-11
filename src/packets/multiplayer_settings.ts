export type MultiplayerAction = "enable_multiplayer" | "disable_multiplayer" | "refresh_join_code" | number;

export interface MultiplayerSettingsPacket {
  action_type: MultiplayerAction;
}
