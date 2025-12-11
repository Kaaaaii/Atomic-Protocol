import { PersonalPiece, PieceTintColor, PlayerListPacket, Skin, SkinAnimation, SkinImage } from "../../../packets/player_list";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class PlayerListSerializer implements PacketSerializer<PlayerListPacket> {
  encode(buf: BufferWriter, p: PlayerListPacket) {
    buf.writeUInt8(typeof p.type === "number" ? p.type : p.type === "remove" ? 1 : 0);
    buf.writeVarInt(p.records.length);
    // For brevity, when encoding we only support remove/add with minimal fields
    for (const r of p.records) {
      buf.writeUuid(r.uuid);
      if (p.type === "add" || p.type === 0) {
        buf.writeZigZag64(r.entity_unique_id ?? 0n);
        buf.writeString(r.username ?? "");
        buf.writeString(r.xbox_user_id ?? "");
        buf.writeString(r.platform_chat_id ?? "");
        buf.writeInt32LE(r.build_platform ?? 0);
        // Skin blob passthrough not supported on encode without raw
        const skinBuf = r.skin?.skin_image?.data ?? Buffer.alloc(0);
        buf.writeVarInt(skinBuf.length);
        buf.writeBuffer(skinBuf);
      }
    }
  }

  decode(buf: BufferReader): PlayerListPacket {
    const startPos = buf.position();
    try {
      const typeCode = buf.readUInt8();
      const type = typeCode === 0 ? "add" : typeCode === 1 ? "remove" : typeCode;
      const records_count = buf.readVarInt();
      const records = [];
      for (let i = 0; i < records_count; i++) {
        const entryType = type;
        const uuid = buf.readUuid();
        if (entryType === "remove" || entryType === 1) {
          records.push({
            uuid,
            entity_unique_id: 0n,
            username: "",
            xbox_user_id: "",
            platform_chat_id: "",
            build_platform: 0,
            skin: emptySkin(),
            is_teacher: false,
            is_host: false,
            is_subclient: false,
            player_color: 0,
          });
          continue;
        }
        const entity_unique_id = buf.readZigZag64();
        const username = buf.readString();
        const xbox_user_id = buf.readString();
        const platform_chat_id = buf.readString();
        const build_platform = buf.readInt32LE();
        const skin = readSkin(buf);
        const is_teacher = buf.readBool();
        const is_host = buf.readBool();
        const is_subclient = buf.readBool();
        const player_color = buf.readInt32LE();
        records.push({
          uuid,
          entity_unique_id,
          username,
          xbox_user_id,
          platform_chat_id,
          build_platform,
          skin,
          is_teacher,
          is_host,
          is_subclient,
          player_color,
        });
      }
      let verified: boolean[] | undefined;
      if (type === "add" || type === 0) {
        // Verified array is optional; only read if there is enough data left
        if (buf.remaining() >= records_count) {
          verified = [];
          for (let i = 0; i < records_count; i++) {
            verified.push(buf.readBool());
          }
        }
      }
      const raw = buf.remaining() > 0 ? buf.readBytes(buf.remaining()) : undefined;
      return { type, records, verified, raw };
    } catch (e) {
      // If parsing fails, fall back to raw passthrough to avoid crashes
      const remaining = buf.remaining();
      const rewind = buf.readBytes(remaining + (startPos ? 0 : 0));
      return { type: 0, records: [], raw: rewind };
    }
  }
}

function readByteArray(buf: BufferReader): Buffer {
  const len = buf.readVarInt();
  return buf.readBytes(len);
}

function readSkinImage(buf: BufferReader): SkinImage {
  const width = buf.readInt32LE();
  const height = buf.readInt32LE();
  const data = readByteArray(buf);
  return { width, height, data };
}

function readSkin(buf: BufferReader): Skin {
  const skin_id = buf.readString();
  const play_fab_id = buf.readString();
  const skin_resource_pack = buf.readString();
  const skin_image = readSkinImage(buf);

  const animationsCount = buf.readInt32LE();
  const animations: SkinAnimation[] = [];
  for (let i = 0; i < animationsCount; i++) {
    const skin_image = readSkinImage(buf);
    const animation_type = buf.readInt32LE();
    const animation_frames = buf.readFloatLE();
    const expression_type = buf.readFloatLE();
    animations.push({ skin_image, animation_type, animation_frames, expression_type });
  }

  const cape_data = readSkinImage(buf);
  const geometry_data = buf.readString();
  const geometry_data_version = buf.readString();
  const animation_data = buf.readString();
  const cape_id = buf.readString();
  const full_skin_id = buf.readString();
  const arm_size = buf.readString();
  const skin_color = buf.readString();

  const personalCount = buf.readInt32LE();
  const personal_pieces: PersonalPiece[] = [];
  for (let i = 0; i < personalCount; i++) {
    personal_pieces.push({
      piece_id: buf.readString(),
      piece_type: buf.readString(),
      pack_id: buf.readString(),
      is_default_piece: buf.readBool(),
      product_id: buf.readString(),
    });
  }

  const tintCount = buf.readInt32LE();
  const piece_tint_colors: PieceTintColor[] = [];
  for (let i = 0; i < tintCount; i++) {
    const piece_type = buf.readString();
    const colorsCount = buf.readInt32LE();
    const colors: string[] = [];
    for (let j = 0; j < colorsCount; j++) colors.push(buf.readString());
    piece_tint_colors.push({ piece_type, colors });
  }

  const premium = buf.readBool();
  const persona = buf.readBool();
  const cape_on_classic = buf.readBool();
  const primary_user = buf.readBool();
  const override_skin = buf.readBool();
  const is_verified = buf.readBool();
  const trusted = buf.readBool();

  return {
    skin_id,
    play_fab_id,
    skin_resource_pack,
    skin_image,
    animations,
    cape_data,
    geometry_data,
    geometry_data_version,
    animation_data,
    cape_id,
    full_skin_id,
    arm_size,
    skin_color,
    personal_pieces,
    piece_tint_colors,
    premium,
    persona,
    cape_on_classic,
    primary_user,
    override_skin,
    is_verified,
    trusted,
  };
}

function emptySkin(): Skin {
  return {
    skin_id: "",
    play_fab_id: "",
    skin_resource_pack: "",
    skin_image: { width: 0, height: 0, data: Buffer.alloc(0) },
    animations: [],
    cape_data: { width: 0, height: 0, data: Buffer.alloc(0) },
    geometry_data: "",
    geometry_data_version: "",
    animation_data: "",
    cape_id: "",
    full_skin_id: "",
    arm_size: "",
    skin_color: "",
    personal_pieces: [],
    piece_tint_colors: [],
    premium: false,
    persona: false,
    cape_on_classic: false,
    primary_user: false,
    override_skin: false,
    is_verified: false,
    trusted: false,
  };
}
