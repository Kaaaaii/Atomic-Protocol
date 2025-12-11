export interface ResourcePackStackEntry {
  pack_id: string;
  pack_version: string;
  sub_pack_name: string;
}

export interface ResourcePackStackPacket {
  behaviour_packs: ResourcePackStackEntry[];
  resource_packs: ResourcePackStackEntry[];
  game_version: string;
  experiments_previously_used: boolean;
}
