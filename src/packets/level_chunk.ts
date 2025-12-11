export interface LevelChunkPacket {
  x: number;
  z: number;
  dimension: number;
  sub_chunk_count: number;
  highest_subchunk_count?: number;
  cache_enabled: boolean;
  hashes?: bigint[];
  payload: Buffer;
}
