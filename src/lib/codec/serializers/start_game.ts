import { StartGamePacket } from "../../../packets/start_game";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const DIMENSION_MAP: Record<number, string> = { 0: "overworld", 1: "nether", 2: "end" };
const DIMENSION_INV: Record<string, number> = { overworld: 0, nether: 1, end: 2 };

function writeBlockCoords(buf: BufferWriter, pos: { x: number; y: number; z: number }) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}
function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

/**
 * StartGame is extremely dense and varies by version. We parse the leading, stable fields and leave the rest in `raw`
 * so offsets stay correct while still exposing useful information.
 */
export class StartGameSerializer implements PacketSerializer<StartGamePacket> {
  encode(buf: BufferWriter, p: StartGamePacket) {
    if (p.raw) {
      buf.writeBuffer(p.raw);
      return;
    }
    // Minimal required fields (entity/runtime gamemode/pos) then rest raw-less to avoid offset issues.
    buf.writeZigZag64(p.entity_id ?? 0n);
    buf.writeVarInt64(p.runtime_entity_id ?? 0n);
    buf.writeZigZag32(p.player_gamemode ?? 0);
    const pos = p.player_position ?? { x: 0, y: 0, z: 0 };
    buf.writeFloatLE(pos.x);
    buf.writeFloatLE(pos.y);
    buf.writeFloatLE(pos.z);
    const rot = p.rotation ?? { x: 0, y: 0 };
    buf.writeFloatLE(rot.x);
    buf.writeFloatLE(rot.y);
    buf.writeUInt64LE(p.seed ?? 0n);
    buf.writeInt16LE(p.biome_type ?? 0);
    buf.writeString(p.biome_name ?? "");
    const dimId = typeof p.dimension === "number" ? p.dimension : DIMENSION_INV[p.dimension as string] ?? 0;
    buf.writeZigZag32(dimId);
    buf.writeZigZag32(p.generator ?? 0);
    buf.writeZigZag32(p.world_gamemode ?? 0);
    buf.writeBool(p.hardcore ?? false);
    buf.writeZigZag32(p.difficulty ?? 0);
    writeBlockCoords(buf, p.spawn_position ?? { x: 0, y: 0, z: 0 });
    buf.writeBool(p.achievements_disabled ?? false);
    const editorType = typeof p.editor_world_type === "number" ? p.editor_world_type : 0;
    buf.writeZigZag32(editorType);
    buf.writeBool(p.created_in_editor ?? false);
    buf.writeBool(p.exported_from_editor ?? false);
    buf.writeZigZag32(p.day_cycle_stop_time ?? 0);
    buf.writeZigZag32(p.edu_offer ?? 0);
    buf.writeBool(p.edu_features_enabled ?? false);
    buf.writeString(p.edu_product_uuid ?? "");
    buf.writeFloatLE(p.rain_level ?? 0);
    buf.writeFloatLE(p.lightning_level ?? 0);
    buf.writeBool(p.has_confirmed_platform_locked_content ?? false);
    buf.writeBool(p.is_multiplayer ?? false);
    buf.writeBool(p.broadcast_to_lan ?? false);
    buf.writeVarInt(p.xbox_live_broadcast_mode ?? 0);
    buf.writeVarInt(p.platform_broadcast_mode ?? 0);
    buf.writeBool(p.enable_commands ?? false);
    buf.writeBool(p.is_texturepacks_required ?? false);
    // Remaining fields vary; include raw to ensure receiver gets full payload.
    if (p.raw) buf.writeBuffer(p.raw);
  }

  decode(buf: BufferReader): StartGamePacket {
    const startPos = buf.position();
    const entity_id = buf.readZigZag64();
    const runtime_entity_id = buf.readVarInt64();
    const player_gamemode = buf.readZigZag32();
    const player_position = { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
    const rotation = { x: buf.readFloatLE(), y: buf.readFloatLE() };
    const seed = buf.readUInt64LE();
    const biome_type = buf.readInt16LE();
    const biome_name = buf.readString();
    const dimId = buf.readZigZag32();
    const dimension = DIMENSION_MAP[dimId] ?? dimId;
    const generator = buf.readZigZag32();
    const world_gamemode = buf.readZigZag32();
    const hardcore = buf.readBool();
    const difficulty = buf.readZigZag32();
    const spawn_position = readBlockCoords(buf);
    const achievements_disabled = buf.readBool();
    const editor_world_type = buf.readZigZag32();
    const created_in_editor = buf.readBool();
    const exported_from_editor = buf.readBool();
    const day_cycle_stop_time = buf.readZigZag32();
    const edu_offer = buf.readZigZag32();
    const edu_features_enabled = buf.readBool();
    const edu_product_uuid = buf.readString();
    const rain_level = buf.readFloatLE();
    const lightning_level = buf.readFloatLE();
    const has_confirmed_platform_locked_content = buf.readBool();
    const is_multiplayer = buf.readBool();
    const broadcast_to_lan = buf.readBool();
    const xbox_live_broadcast_mode = buf.readVarInt();
    const platform_broadcast_mode = buf.readVarInt();
    const enable_commands = buf.readBool();
    const is_texturepacks_required = buf.readBool();
    // Capture the remainder as raw to avoid offset issues on the rest of the structure.
    const raw = buf.readBytes(buf.remaining());

    return {
      entity_id,
      runtime_entity_id,
      player_gamemode,
      player_position,
      rotation,
      seed,
      biome_type,
      biome_name,
      dimension,
      generator,
      world_gamemode,
      hardcore,
      difficulty,
      spawn_position,
      achievements_disabled,
      editor_world_type,
      created_in_editor,
      exported_from_editor,
      day_cycle_stop_time,
      edu_offer,
      edu_features_enabled,
      edu_product_uuid,
      rain_level,
      lightning_level,
      has_confirmed_platform_locked_content,
      is_multiplayer,
      broadcast_to_lan,
      xbox_live_broadcast_mode,
      platform_broadcast_mode,
      enable_commands,
      is_texturepacks_required,
      gamerules: [],
      experiments: undefined,
      experiments_previously_used: false,
      bonus_chest: false,
      map_enabled: false,
      permission_level: 0,
      server_chunk_tick_range: 0,
      has_locked_behavior_pack: false,
      has_locked_resource_pack: false,
      is_from_locked_world_template: false,
      msa_gamertags_only: false,
      is_from_world_template: false,
      is_world_template_option_locked: false,
      only_spawn_v1_villagers: false,
      persona_disabled: false,
      custom_skins_disabled: false,
      emote_chat_muted: false,
      game_version: "",
      limited_world_width: 0,
      limited_world_length: 0,
      is_new_nether: false,
      edu_resource_uri: undefined,
      experimental_gameplay_override: false,
      chat_restriction_level: 0,
      disable_player_interactions: false,
      server_identifier: "",
      world_identifier: "",
      scenario_identifier: "",
      owner_identifier: "",
      level_id: "",
      world_name: "",
      premium_world_template_id: "",
      is_trial: false,
      rewind_history_size: 0,
      server_authoritative_block_breaking: false,
      current_tick: 0n,
      enchantment_seed: 0,
      block_properties: undefined,
      multiplayer_correlation_id: "",
      server_authoritative_inventory: false,
      engine: "",
      property_data: undefined,
      block_pallette_checksum: 0n,
      world_template_id: "00000000-0000-0000-0000-000000000000",
      client_side_generation: false,
      block_network_ids_are_hashes: false,
      server_controlled_sound: false,
      raw,
    };
  }
}
