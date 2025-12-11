export interface EventPacket {
  runtime_id: bigint;
  event_type: number | string;
  use_player_id: boolean;
  event_data: Buffer;
}
