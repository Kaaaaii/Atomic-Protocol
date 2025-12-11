export interface ResourcePackInfo {
  pack_id: string;
  pack_version: string;
  size: bigint;
  content_key: string;
  sub_pack_name: string;
  content_identity: string;
  has_scripts: boolean;
  rtx_enabled: boolean;
}

export interface ResourcePacksInfoPacket {
  must_accept: boolean;
  has_scripts: boolean;
  behaviour_packs: ResourcePackInfo[];
  resource_packs: ResourcePackInfo[];
}
