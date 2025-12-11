export interface EmotePacket {
  runtime_entity_id?: bigint;
  xuid?: string;
  platform_id?: string;
  emote_id?: string;
  flags?: number;
  raw?: Buffer;
}
