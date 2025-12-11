export interface UpdatePlayerGameTypePacket {
  gamemode: number | string;
  player_unique_id: bigint;
  tick: bigint;
}
