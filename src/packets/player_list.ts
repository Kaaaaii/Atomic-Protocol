export interface PlayerListRecord {
  uuid: string;
  entity_unique_id: bigint;
  username: string;
  xbox_user_id: string;
  platform_chat_id: string;
  build_platform: number;
  skin: Skin;
  is_teacher: boolean;
  is_host: boolean;
  is_subclient: boolean;
  player_color: number;
}

export interface PlayerListPacket {
  type: "add" | "remove" | number;
  records: PlayerListRecord[];
  verified?: boolean[];
  raw?: Buffer;
}

export interface Skin {
  skin_id: string;
  play_fab_id: string;
  skin_resource_pack: string;
  skin_image: SkinImage;
  animations: SkinAnimation[];
  cape_data: SkinImage;
  geometry_data: string;
  geometry_data_version: string;
  animation_data: string;
  cape_id: string;
  full_skin_id: string;
  arm_size: string;
  skin_color: string;
  personal_pieces: PersonalPiece[];
  piece_tint_colors: PieceTintColor[];
  premium: boolean;
  persona: boolean;
  cape_on_classic: boolean;
  primary_user: boolean;
  override_skin: boolean;
  is_verified: boolean;
  trusted: boolean;
}

export interface SkinImage {
  width: number;
  height: number;
  data: Buffer;
}

export interface SkinAnimation {
  skin_image: SkinImage;
  animation_type: number;
  animation_frames: number;
  expression_type: number;
}

export interface PersonalPiece {
  piece_id: string;
  piece_type: string;
  pack_id: string;
  is_default_piece: boolean;
  product_id: string;
}

export interface PieceTintColor {
  piece_type: string;
  colors: string[];
}
