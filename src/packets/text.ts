export type TextType =
  | "raw"
  | "chat"
  | "translation"
  | "popup"
  | "jukebox_popup"
  | "tip"
  | "system"
  | "whisper"
  | "announcement"
  | "json_whisper"
  | "json"
  | "json_announcement";

export type TextCategory = "message_only" | "author_and_message" | "message_and_params" | number;

export interface TextPacket {
  category?: TextCategory;
  type: TextType | number;
  needs_translation: boolean;
  source_name?: string;
  message: string;
  parameters?: string[];
  xuid?: string;
  platform_chat_id?: string;
  filtered_message?: string;
  // Optional raw fields from the protocol for completeness
  name_raw?: string;
  name_tip?: string;
  name_system?: string;
  name_object_whisper?: string;
  name_object_announcement?: string;
  name_object?: string;
  name_chat?: string;
  name_whisper?: string;
  name_announcement?: string;
  name_translate?: string;
  name_popup?: string;
  name_jukebox_popup?: string;
}
