import { TextPacket, TextType, TextCategory } from "../../../packets/text";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const TYPES: TextType[] = [
  "raw",
  "chat",
  "translation",
  "popup",
  "jukebox_popup",
  "tip",
  "system",
  "whisper",
  "announcement",
  "json_whisper",
  "json",
  "json_announcement",
];

const CATEGORIES: TextCategory[] = ["message_only", "author_and_message", "message_and_params"];

export class TextSerializer implements PacketSerializer<TextPacket> {
  encode(buf: BufferWriter, p: TextPacket) {
    buf.writeBool(!!p.needs_translation);
    const categoryIndex = typeof p.category === "number" ? p.category : CATEGORIES.indexOf(p.category ?? "message_only");
    buf.writeUInt8(categoryIndex < 0 ? 0 : categoryIndex);

    const typeIndex = typeof p.type === "number" ? p.type : TYPES.indexOf(p.type);
    const safeType = typeIndex < 0 ? 0 : typeIndex;

    switch (categoryIndex) {
      case 0: // message_only
        buf.writeString(p.name_raw ?? "");
        buf.writeString(p.name_tip ?? "");
        buf.writeString(p.name_system ?? "");
        buf.writeString(p.name_object_whisper ?? "");
        buf.writeString(p.name_object_announcement ?? "");
        buf.writeString(p.name_object ?? "");
        buf.writeUInt8(safeType);
        buf.writeString(p.message ?? "");
        break;
      case 1: // author_and_message
        buf.writeString(p.name_chat ?? "");
        buf.writeString(p.name_whisper ?? "");
        buf.writeString(p.name_announcement ?? "");
        buf.writeUInt8(safeType);
        buf.writeString(p.source_name ?? "");
        buf.writeString(p.message ?? "");
        break;
      case 2: // message_and_params
      default:
        buf.writeString(p.name_translate ?? "");
        buf.writeString(p.name_popup ?? "");
        buf.writeString(p.name_jukebox_popup ?? "");
        buf.writeUInt8(safeType);
        buf.writeString(p.message ?? "");
        buf.writeVarInt(p.parameters?.length ?? 0);
        for (const param of p.parameters ?? []) buf.writeString(param);
        break;
    }

    buf.writeString(p.xuid ?? "");
    buf.writeString(p.platform_chat_id ?? "");
    if (p.filtered_message !== undefined) {
      buf.writeBool(true);
      buf.writeString(p.filtered_message);
    } else {
      buf.writeBool(false);
    }
  }

  decode(buf: BufferReader): TextPacket {
    const needs_translation = buf.readBool();
    const categoryIndex = buf.readUInt8();
    const category = CATEGORIES[categoryIndex] ?? categoryIndex;

    let typeIndex = 0;
    let type: TextType | number = 0;
    let message = "";
    let parameters: string[] | undefined;
    let source_name: string | undefined;
    let names: Partial<TextPacket> = {};

    switch (categoryIndex) {
      case 0: {
        const name_raw = buf.readString();
        const name_tip = buf.readString();
        const name_system = buf.readString();
        const name_object_whisper = buf.readString();
        const name_object_announcement = buf.readString();
        const name_object = buf.readString();
        typeIndex = buf.readUInt8();
        message = buf.readString();
        names = { name_raw, name_tip, name_system, name_object_whisper, name_object_announcement, name_object };
        break;
      }
      case 1: {
        const name_chat = buf.readString();
        const name_whisper = buf.readString();
        const name_announcement = buf.readString();
        typeIndex = buf.readUInt8();
        source_name = buf.readString();
        message = buf.readString();
        names = { name_chat, name_whisper, name_announcement };
        break;
      }
      case 2:
      default: {
        const name_translate = buf.readString();
        const name_popup = buf.readString();
        const name_jukebox_popup = buf.readString();
        typeIndex = buf.readUInt8();
        message = buf.readString();
        const count = buf.readVarInt();
        parameters = [];
        for (let i = 0; i < count; i++) parameters.push(buf.readString());
        names = { name_translate, name_popup, name_jukebox_popup };
        break;
      }
    }

    type = TYPES[typeIndex] ?? typeIndex;
    const xuid = buf.readString();
    const platform_chat_id = buf.readString();
    const has_filtered = buf.readBool();
    const filtered_message = has_filtered ? buf.readString() : undefined;

    return {
      category,
      type,
      needs_translation,
      source_name,
      message,
      parameters,
      xuid,
      platform_chat_id,
      filtered_message,
      ...names,
    };
  }
}
