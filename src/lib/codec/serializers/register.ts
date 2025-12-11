import { CommandRequestPacket } from "../../../packets/command_request";
import { ClientCacheStatusPacket } from "../../../packets/client_cache_status";
import { ClientToServerHandshakePacket } from "../../../packets/client_to_server_handshake";
import { DisconnectPacket } from "../../../packets/disconnect";
import { LoginPacket } from "../../../packets/login";
import { NetworkSettingsPacket } from "../../../packets/network_settings";
import { PlayStatusPacket } from "../../../packets/play_status";
import { TextPacket } from "../../../packets/text";
import { SetTimePacket } from "../../../packets/set_time";
import { AddPlayerPacket } from "../../../packets/add_player";
import { AddEntityPacket } from "../../../packets/add_entity";
import { RemoveEntityPacket } from "../../../packets/remove_entity";
import { AddItemEntityPacket } from "../../../packets/add_item_entity";
import { ServerPostMovePacket } from "../../../packets/server_post_move";
import { TakeItemEntityPacket } from "../../../packets/take_item_entity";
import { MoveEntityPacket } from "../../../packets/move_entity";
import { MovePlayerPacket } from "../../../packets/move_player";
import { RiderJumpPacket } from "../../../packets/rider_jump";
import { UpdateBlockPacket } from "../../../packets/update_block";
import { AddPaintingPacket } from "../../../packets/add_painting";
import { TickSyncPacket } from "../../../packets/tick_sync";
import { LevelSoundEventOldPacket } from "../../../packets/level_sound_event_old";
import { LevelEventPacket } from "../../../packets/level_event";
import { BlockEventPacket } from "../../../packets/block_event";
import { EntityEventPacket } from "../../../packets/entity_event";
import { MobEffectPacket } from "../../../packets/mob_effect";
import { UpdateAttributesPacket } from "../../../packets/update_attributes";
import { InventoryTransactionPacket } from "../../../packets/inventory_transaction";
import { MobEquipmentPacket } from "../../../packets/mob_equipment";
import { MobArmorEquipmentPacket } from "../../../packets/mob_armor_equipment";
import { InteractPacket } from "../../../packets/interact";
import { BlockPickRequestPacket } from "../../../packets/block_pick_request";
import { EntityPickRequestPacket } from "../../../packets/entity_pick_request";
import { PlayerActionPacket } from "../../../packets/player_action";
import { HurtArmorPacket } from "../../../packets/hurt_armor";
import { SetEntityDataPacket } from "../../../packets/set_entity_data";
import { SetEntityMotionPacket } from "../../../packets/set_entity_motion";
import { SetEntityLinkPacket } from "../../../packets/set_entity_link";
import { SetHealthPacket } from "../../../packets/set_health";
import { SetSpawnPositionPacket } from "../../../packets/set_spawn_position";
import { AnimatePacket } from "../../../packets/animate";
import { RespawnPacket } from "../../../packets/respawn";
import { ContainerOpenPacket } from "../../../packets/container_open";
import { ContainerClosePacket } from "../../../packets/container_close";
import { PlayerHotbarPacket } from "../../../packets/player_hotbar";
import { InventoryContentPacket } from "../../../packets/inventory_content";
import { InventorySlotPacket } from "../../../packets/inventory_slot";
import { ContainerSetDataPacket } from "../../../packets/container_set_data";
import { CraftingDataPacket } from "../../../packets/crafting_data";
import { CraftingEventPacket } from "../../../packets/crafting_event";
import { GuiDataPickItemPacket } from "../../../packets/gui_data_pick_item";
import { AdventureSettingsPacket } from "../../../packets/adventure_settings";
import { BlockEntityDataPacket } from "../../../packets/block_entity_data";
import { ChangeDimensionPacket } from "../../../packets/change_dimension";
import { PlayerInputPacket } from "../../../packets/player_input";
import { LevelChunkPacket } from "../../../packets/level_chunk";
import { SetCommandsEnabledPacket } from "../../../packets/set_commands_enabled";
import { SetDifficultyPacket } from "../../../packets/set_difficulty";
import { SetPlayerGameTypePacket } from "../../../packets/set_player_game_type";
import { PlayerListPacket } from "../../../packets/player_list";
import { SimpleEventPacket } from "../../../packets/simple_event";
import { EventPacket } from "../../../packets/event";
import { SpawnExperienceOrbPacket } from "../../../packets/spawn_experience_orb";
import { ClientboundMapItemDataPacket } from "../../../packets/clientbound_map_item_data";
import { MapInfoRequestPacket } from "../../../packets/map_info_request";
import { AvailableCommandsPacket } from "../../../packets/available_commands";
import { CameraPacket } from "../../../packets/camera";
import { BossEventPacket } from "../../../packets/boss_event";
import { ShowCreditsPacket } from "../../../packets/show_credits";
import { CommandBlockUpdatePacket } from "../../../packets/command_block_update";
import { CommandOutputPacket } from "../../../packets/command_output";
import { UpdateTradePacket } from "../../../packets/update_trade";
import { UpdateEquipmentPacket } from "../../../packets/update_equipment";
import { ResourcePackDataInfoPacket } from "../../../packets/resource_pack_data_info";
import { ResourcePackChunkDataPacket } from "../../../packets/resource_pack_chunk_data";
import { ResourcePackChunkRequestPacket } from "../../../packets/resource_pack_chunk_request";
import { TransferPacket } from "../../../packets/transfer";
import { PlayerSkinPacket } from "../../../packets/player_skin";
import { UpdateSoftEnumPacket } from "../../../packets/update_soft_enum";
import { EmotePacket } from "../../../packets/emote";
import { PlayerAuthInputPacket } from "../../../packets/player_auth_input";
import { CreativeContentPacket } from "../../../packets/creative_content";
import { PacketViolationWarningPacket } from "../../../packets/packet_violation_warning";
import { DeathInfoPacket } from "../../../packets/death_info";
import { PlayerEnchantOptionsPacket } from "../../../packets/player_enchant_options";
import { ItemStackRequestPacket } from "../../../packets/item_stack_request";
import { ItemStackResponsePacket } from "../../../packets/item_stack_response";
import { PlayerArmorDamagePacket } from "../../../packets/player_armor_damage";
import { CodeBuilderPacket } from "../../../packets/code_builder";
import { CodeBuilderSourcePacket } from "../../../packets/code_builder_source";
import { UpdatePlayerGameTypePacket } from "../../../packets/update_player_game_type";
import { RequestChunkRadiusPacket } from "../../../packets/request_chunk_radius";
import { RequestNetworkSettingsPacket } from "../../../packets/request_network_settings";
import { RequestAbilityPacket } from "../../../packets/request_ability";
import { RequestPermissionsPacket } from "../../../packets/request_permissions";
import { ToastRequestPacket } from "../../../packets/toast_request";
import { ResourcePackClientResponsePacket } from "../../../packets/resource_pack_client_response";
import { ResourcePackStackPacket } from "../../../packets/resource_pack_stack";
import { ResourcePacksInfoPacket } from "../../../packets/resource_packs_info";
import { ServerStatsPacket } from "../../../packets/server_stats";
import { ServerToClientHandshakePacket } from "../../../packets/server_to_client_handshake";
import { SetLocalPlayerAsInitializedPacket } from "../../../packets/set_local_player_as_initialized";
import { StartGamePacket } from "../../../packets/start_game";
import { EducationSettingsPacket } from "../../../packets/education_settings";
import { MultiplayerSettingsPacket } from "../../../packets/multiplayer_settings";
import { SettingsCommandPacket } from "../../../packets/settings_command";
import { AnvilDamagePacket } from "../../../packets/anvil_damage";
import { CompletedUsingItemPacket } from "../../../packets/completed_using_item";
import { NetworkStackLatencyPacket } from "../../../packets/network_stack_latency";
import { PacketRegistry } from "../PacketRegistry";
import { CommandRequestSerializer } from "./command_request";
import { ClientCacheStatusSerializer } from "./client_cache_status";
import { ClientToServerHandshakeSerializer } from "./client_to_server_handshake";
import { DisconnectSerializer } from "./disconnect";
import { LoginSerializer } from "./login";
import { NetworkSettingsSerializer } from "./network_settings";
import { PlayStatusSerializer } from "./play_status";
import { TextSerializer } from "./text";
import { SetTimeSerializer } from "./set_time";
import { AddPlayerSerializer } from "./add_player";
import { AddEntitySerializer } from "./add_entity";
import { RemoveEntitySerializer } from "./remove_entity";
import { AddItemEntitySerializer } from "./add_item_entity";
import { ServerPostMoveSerializer } from "./server_post_move";
import { TakeItemEntitySerializer } from "./take_item_entity";
import { MoveEntitySerializer } from "./move_entity";
import { MovePlayerSerializer } from "./move_player";
import { RiderJumpSerializer } from "./rider_jump";
import { UpdateBlockSerializer } from "./update_block";
import { AddPaintingSerializer } from "./add_painting";
import { TickSyncSerializer } from "./tick_sync";
import { LevelSoundEventOldSerializer } from "./level_sound_event_old";
import { LevelEventSerializer } from "./level_event";
import { BlockEventSerializer } from "./block_event";
import { EntityEventSerializer } from "./entity_event";
import { MobEffectSerializer } from "./mob_effect";
import { UpdateAttributesSerializer } from "./update_attributes";
import { MobEquipmentSerializer } from "./mob_equipment";
import { MobArmorEquipmentSerializer } from "./mob_armor_equipment";
import { InteractSerializer } from "./interact";
import { BlockPickRequestSerializer } from "./block_pick_request";
import { EntityPickRequestSerializer } from "./entity_pick_request";
import { InventoryTransactionSerializer } from "./inventory_transaction";
import { PlayerActionSerializer } from "./player_action";
import { HurtArmorSerializer } from "./hurt_armor";
import { SetEntityDataSerializer } from "./set_entity_data";
import { SetEntityMotionSerializer } from "./set_entity_motion";
import { SetEntityLinkSerializer } from "./set_entity_link";
import { SetHealthSerializer } from "./set_health";
import { SetSpawnPositionSerializer } from "./set_spawn_position";
import { AnimateSerializer } from "./animate";
import { RespawnSerializer } from "./respawn";
import { ContainerOpenSerializer } from "./container_open";
import { ContainerCloseSerializer } from "./container_close";
import { PlayerHotbarSerializer } from "./player_hotbar";
import { InventoryContentSerializer } from "./inventory_content";
import { InventorySlotSerializer } from "./inventory_slot";
import { ContainerSetDataSerializer } from "./container_set_data";
import { CraftingDataSerializer } from "./crafting_data";
import { CraftingEventSerializer } from "./crafting_event";
import { GuiDataPickItemSerializer } from "./gui_data_pick_item";
import { AdventureSettingsSerializer } from "./adventure_settings";
import { BlockEntityDataSerializer } from "./block_entity_data";
import { ChangeDimensionSerializer } from "./change_dimension";
import { PlayerInputSerializer } from "./player_input";
import { LevelChunkSerializer } from "./level_chunk";
import { SetCommandsEnabledSerializer } from "./set_commands_enabled";
import { SetDifficultySerializer } from "./set_difficulty";
import { SetPlayerGameTypeSerializer } from "./set_player_game_type";
import { PlayerListSerializer } from "./player_list";
import { SimpleEventSerializer } from "./simple_event";
import { EventSerializer } from "./event";
import { SpawnExperienceOrbSerializer } from "./spawn_experience_orb";
import { MapInfoRequestSerializer } from "./map_info_request";
import { ShowCreditsSerializer } from "./show_credits";
import { AvailableCommandsSerializer } from "./available_commands";
import { CommandBlockUpdateSerializer } from "./command_block_update";
import { CommandOutputSerializer } from "./command_output";
import { TransferSerializer } from "./transfer";
import { PlayerSkinSerializer } from "./player_skin";
import { UpdateSoftEnumSerializer } from "./update_soft_enum";
import { EmoteSerializer } from "./emote";
import { PlayerAuthInputSerializer } from "./player_auth_input";
import { CreativeContentSerializer } from "./creative_content";
import { PacketViolationWarningSerializer } from "./packet_violation_warning";
import { DeathInfoSerializer } from "./death_info";
import { PlayerEnchantOptionsSerializer } from "./player_enchant_options";
import { ItemStackRequestSerializer } from "./item_stack_request";
import { ItemStackResponseSerializer } from "./item_stack_response";
import { PlayerArmorDamageSerializer } from "./player_armor_damage";
import { CodeBuilderSerializer } from "./code_builder";
import { CodeBuilderSourceSerializer } from "./code_builder_source";
import { UpdatePlayerGameTypeSerializer } from "./update_player_game_type";
import { EmoteListSerializer } from "./emote_list";
import { RawPassthroughSerializer } from "./raw_passthrough";
import { ChunkRadiusUpdatePacket } from "../../../packets/chunk_radius_update";
import { GameRulesChangedPacket } from "../../../packets/game_rules_changed";
import { ClientCacheBlobStatusPacket } from "../../../packets/client_cache_blob_status";
import { ClientCacheMissResponsePacket } from "../../../packets/client_cache_miss_response";
import { ChunkRadiusUpdateSerializer } from "./chunk_radius_update";
import { EmoteListPacket } from "../../../packets/emote_list";
import { PositionTrackingDbBroadcastPacket } from "../../../packets/position_tracking_db_broadcast";
import { PositionTrackingDbRequestPacket } from "../../../packets/position_tracking_db_request";
import { DebugInfoPacket } from "../../../packets/debug_info";
import { MotionPredictionHintsPacket } from "../../../packets/motion_prediction_hints";
import { AnimateEntityPacket } from "../../../packets/animate_entity";
import { CameraShakePacket } from "../../../packets/camera_shake";
import { PlayerFogPacket } from "../../../packets/player_fog";
import { CorrectPlayerMovePredictionPacket } from "../../../packets/correct_player_move_prediction";
import { ItemRegistryPacket } from "../../../packets/item_registry";
import { FilterTextPacket } from "../../../packets/filter_text_packet";
import { DebugRendererPacket } from "../../../packets/debug_renderer";
import { SyncEntityPropertyPacket } from "../../../packets/sync_entity_property";
import { AddVolumeEntityPacket } from "../../../packets/add_volume_entity";
import { RemoveVolumeEntityPacket } from "../../../packets/remove_volume_entity";
import { RequestChunkRadiusSerializer } from "./request_chunk_radius";
import { RequestNetworkSettingsSerializer } from "./request_network_settings";
import { RequestAbilitySerializer } from "./request_ability";
import { RequestPermissionsSerializer } from "./request_permissions";
import { ToastRequestSerializer } from "./toast_request";
import { ResourcePackClientResponseSerializer } from "./resource_pack_client_response";
import { ResourcePackStackSerializer } from "./resource_pack_stack";
import { ResourcePacksInfoSerializer } from "./resource_packs_info";
import { ServerStatsSerializer } from "./server_stats";
import { ServerToClientHandshakeSerializer } from "./server_to_client_handshake";
import { SetLocalPlayerAsInitializedSerializer } from "./set_local_player_as_initialized";
import { StartGameSerializer } from "./start_game";
import { EducationSettingsSerializer } from "./education_settings";
import { MultiplayerSettingsSerializer } from "./multiplayer_settings";
import { SettingsCommandSerializer } from "./settings_command";
import { AnvilDamageSerializer } from "./anvil_damage";
import { CompletedUsingItemSerializer } from "./completed_using_item";
import { NetworkStackLatencySerializer } from "./network_stack_latency";

const PACKET_IDS = {
  login: 1,
  play_status: 2,
  server_to_client_handshake: 3,
  client_to_server_handshake: 4,
  disconnect: 5,
  resource_packs_info: 6,
  resource_pack_stack: 7,
  resource_pack_client_response: 8,
  text: 9,
  set_time: 10,
  start_game: 11,
  add_player: 12,
  add_entity: 13,
  remove_entity: 14,
  add_item_entity: 15,
  server_post_move: 16,
  take_item_entity: 17,
  move_entity: 18,
  move_player: 19,
  rider_jump: 20,
  update_block: 21,
  add_painting: 22,
  tick_sync: 23,
  level_sound_event_old: 24,
  level_event: 25,
  block_event: 26,
  entity_event: 27,
  mob_effect: 28,
  update_attributes: 29,
  inventory_transaction: 30,
  mob_equipment: 31,
  mob_armor_equipment: 32,
  interact: 33,
  block_pick_request: 34,
  entity_pick_request: 35,
  player_action: 36,
  hurt_armor: 38,
  set_entity_data: 39,
  set_entity_motion: 40,
  set_entity_link: 41,
  set_health: 42,
  set_spawn_position: 43,
  animate: 44,
  respawn: 45,
  container_open: 46,
  container_close: 47,
  player_hotbar: 48,
  inventory_content: 49,
  inventory_slot: 50,
  container_set_data: 51,
  crafting_data: 52,
  crafting_event: 53,
  gui_data_pick_item: 54,
  adventure_settings: 55,
  block_entity_data: 56,
  player_input: 57,
  level_chunk: 58,
  set_commands_enabled: 59,
  set_difficulty: 60,
  change_dimension: 61,
  set_player_game_type: 62,
  player_list: 63,
  simple_event: 64,
  event: 65,
  spawn_experience_orb: 66,
  clientbound_map_item_data: 67,
  map_info_request: 68,
  request_chunk_radius: 69,
  chunk_radius_update: 70,
  game_rules_changed: 72,
  camera: 73,
  boss_event: 74,
  show_credits: 75,
  available_commands: 76,
  command_request: 77,
  command_block_update: 78,
  command_output: 79,
  update_trade: 80,
  update_equipment: 81,
  resource_pack_data_info: 82,
  resource_pack_chunk_data: 83,
  resource_pack_chunk_request: 84,
  transfer: 85,
  play_sound: 86,
  stop_sound: 87,
  set_title: 88,
  add_behavior_tree: 89,
  structure_block_update: 90,
  show_store_offer: 91,
  purchase_receipt: 92,
  player_skin: 93,
  sub_client_login: 94,
  initiate_web_socket_connection: 95,
  set_last_hurt_by: 96,
  book_edit: 97,
  npc_request: 98,
  photo_transfer: 99,
  modal_form_request: 100,
  modal_form_response: 101,
  server_settings_request: 102,
  server_settings_response: 103,
  show_profile: 104,
  set_default_game_type: 105,
  remove_objective: 106,
  set_display_objective: 107,
  set_score: 108,
  lab_table: 109,
  update_block_synced: 110,
  move_entity_delta: 111,
  set_scoreboard_identity: 112,
  set_local_player_as_initialized: 113,
  update_soft_enum: 114,
  network_stack_latency: 115,
  script_custom_event: 117,
  spawn_particle_effect: 118,
  available_entity_identifiers: 119,
  level_sound_event_v2: 120,
  network_chunk_publisher_update: 121,
  biome_definition_list: 122,
  level_sound_event: 123,
  level_event_generic: 124,
  lectern_update: 125,
  video_stream_connect: 126,
  client_cache_status: 129,
  on_screen_texture_animation: 130,
  map_create_locked_copy: 131,
  structure_template_data_export_request: 132,
  structure_template_data_export_response: 133,
  update_block_properties: 134,
  client_cache_blob_status: 135,
  client_cache_miss_response: 136,
  education_settings: 137,
  emote: 138,
  multiplayer_settings: 139,
  settings_command: 140,
  anvil_damage: 141,
  completed_using_item: 142,
  network_settings: 143,
  player_auth_input: 144,
  creative_content: 145,
  player_enchant_options: 146,
  item_stack_request: 147,
  item_stack_response: 148,
  player_armor_damage: 149,
  code_builder: 150,
  update_player_game_type: 151,
  emote_list: 152,
  position_tracking_db_broadcast: 153,
  position_tracking_db_request: 154,
  debug_info: 155,
  packet_violation_warning: 156,
  motion_prediction_hints: 157,
  animate_entity: 158,
  camera_shake: 159,
  player_fog: 160,
  correct_player_move_prediction: 161,
  item_registry: 162,
  filter_text_packet: 163,
  debug_renderer: 164,
  sync_entity_property: 165,
  add_volume_entity: 166,
  remove_volume_entity: 167,
  simulation_type: 168,
  npc_dialogue: 169,
  edu_uri_resource_packet: 170,
  create_photo: 171,
  update_subchunk_blocks: 172,
  photo_info_request: 173,
  subchunk: 174,
  subchunk_request: 175,
  client_start_item_cooldown: 176,
  script_message: 177,
  code_builder_source: 178,
  ticking_areas_load_status: 179,
  dimension_data: 180,
  agent_action: 181,
  change_mob_property: 182,
  lesson_progress: 183,
  request_ability: 184,
  request_permissions: 185,
  toast_request: 186,
  update_abilities: 187,
  update_adventure_settings: 188,
  death_info: 189,
  editor_network: 190,
  feature_registry: 191,
  server_stats: 192,
  request_network_settings: 193,
  game_test_request: 194,
  game_test_results: 195,
  update_client_input_locks: 196,
  client_cheat_ability: 197,
  camera_presets: 198,
  unlocked_recipes: 199,
  camera_instruction: 300,
  compressed_biome_definitions: 301,
  trim_data: 302,
  open_sign: 303,
  agent_animation: 304,
  refresh_entitlements: 305,
  toggle_crafter_slot_request: 306,
  set_player_inventory_options: 307,
  set_hud: 308,
  award_achievement: 309,
  clientbound_close_form: 310,
  serverbound_loading_screen: 312,
  jigsaw_structure_data: 313,
  current_structure_feature: 314,
  serverbound_diagnostics: 315,
  camera_aim_assist: 316,
  container_registry_cleanup: 317,
  movement_effect: 318,
  set_movement_authority: 319,
  camera_aim_assist_presets: 320,
  client_camera_aim_assist: 321,
  client_movement_prediction_sync: 322,
  update_client_options: 323,
  player_video_capture: 324,
  player_update_entity_overrides: 325,
  player_location: 326,
  clientbound_controls_scheme: 327,
  server_script_debug_drawer: 328,
  serverbound_pack_setting_change: 329,
  graphics_override_parameter: 331,
};

PacketRegistry.register<LoginPacket>("login", PACKET_IDS.login, new LoginSerializer(), (params) => ({
  protocol_version: params.protocol_version,
  identity: params.tokens?.identity ?? params.identity ?? "",
  client: params.tokens?.client ?? params.client ?? "",
}));

PacketRegistry.register<PlayStatusPacket>("play_status", PACKET_IDS.play_status, new PlayStatusSerializer(), (params) => ({
  status: params.status,
}));

PacketRegistry.register<ServerToClientHandshakePacket>(
  "server_to_client_handshake",
  PACKET_IDS.server_to_client_handshake,
  new ServerToClientHandshakeSerializer(),
  (params) => ({ token: params.token ?? "" }),
);

PacketRegistry.register<ClientToServerHandshakePacket>(
  "client_to_server_handshake",
  PACKET_IDS.client_to_server_handshake,
  new ClientToServerHandshakeSerializer(),
  () => ({}),
);

PacketRegistry.register<DisconnectPacket>(
  "disconnect",
  PACKET_IDS.disconnect,
  new DisconnectSerializer(),
  (params) => ({
    reason: params.reason ?? 0,
    hide_disconnect_reason: params.hide_disconnect_reason ?? params.hide_disconnect_screen ?? false,
    message: params.message ?? "",
    filtered_message: params.filtered_message ?? "",
  }),
);

PacketRegistry.register<ResourcePacksInfoPacket>(
  "resource_packs_info",
  PACKET_IDS.resource_packs_info,
  new ResourcePacksInfoSerializer(),
  (params) => ({
    must_accept: params.must_accept ?? false,
    has_scripts: params.has_scripts ?? false,
    behaviour_packs: params.behaviour_packs ?? [],
    resource_packs: params.resource_packs ?? [],
  }),
);

PacketRegistry.register<ResourcePackStackPacket>(
  "resource_pack_stack",
  PACKET_IDS.resource_pack_stack,
  new ResourcePackStackSerializer(),
  (params) => ({
    behaviour_packs: params.behaviour_packs ?? [],
    resource_packs: params.resource_packs ?? [],
    game_version: params.game_version ?? "",
    experiments_previously_used: params.experiments_previously_used ?? false,
  }),
);

PacketRegistry.register<ResourcePackClientResponsePacket>(
  "resource_pack_client_response",
  PACKET_IDS.resource_pack_client_response,
  new ResourcePackClientResponseSerializer(),
  (params) => ({
    response_status: params.response_status ?? 0,
    resourcepackids: params.resourcepackids ?? [],
  }),
);

PacketRegistry.register<StartGamePacket>(
  "start_game",
  PACKET_IDS.start_game,
  new StartGameSerializer(),
  (params) => ({
    entity_id: params.entity_id ?? 0n,
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    player_gamemode: params.player_gamemode ?? 0,
    player_position: params.player_position ?? { x: 0, y: 0, z: 0 },
    rotation: params.rotation ?? { x: 0, y: 0 },
    seed: params.seed ?? 0n,
    biome_type: params.biome_type ?? 0,
    biome_name: params.biome_name ?? "",
    dimension: params.dimension ?? 0,
    generator: params.generator ?? 0,
    world_gamemode: params.world_gamemode ?? 0,
    hardcore: params.hardcore ?? false,
    difficulty: params.difficulty ?? 0,
    spawn_position: params.spawn_position ?? { x: 0, y: 0, z: 0 },
    achievements_disabled: params.achievements_disabled ?? false,
    editor_world_type: params.editor_world_type ?? 0,
    created_in_editor: params.created_in_editor ?? false,
    exported_from_editor: params.exported_from_editor ?? false,
    day_cycle_stop_time: params.day_cycle_stop_time ?? 0,
    edu_offer: params.edu_offer ?? 0,
    edu_features_enabled: params.edu_features_enabled ?? false,
    edu_product_uuid: params.edu_product_uuid ?? "",
    rain_level: params.rain_level ?? 0,
    lightning_level: params.lightning_level ?? 0,
    has_confirmed_platform_locked_content: params.has_confirmed_platform_locked_content ?? false,
    is_multiplayer: params.is_multiplayer ?? false,
    broadcast_to_lan: params.broadcast_to_lan ?? false,
    xbox_live_broadcast_mode: params.xbox_live_broadcast_mode ?? 0,
    platform_broadcast_mode: params.platform_broadcast_mode ?? 0,
    enable_commands: params.enable_commands ?? false,
    is_texturepacks_required: params.is_texturepacks_required ?? false,
    gamerules: params.gamerules ?? [],
    experiments: params.experiments ?? {},
    experiments_previously_used: params.experiments_previously_used ?? false,
    bonus_chest: params.bonus_chest ?? false,
    map_enabled: params.map_enabled ?? false,
    permission_level: params.permission_level ?? 0,
    server_chunk_tick_range: params.server_chunk_tick_range ?? 0,
    has_locked_behavior_pack: params.has_locked_behavior_pack ?? false,
    has_locked_resource_pack: params.has_locked_resource_pack ?? false,
    is_from_locked_world_template: params.is_from_locked_world_template ?? false,
    msa_gamertags_only: params.msa_gamertags_only ?? false,
    is_from_world_template: params.is_from_world_template ?? false,
    is_world_template_option_locked: params.is_world_template_option_locked ?? false,
    only_spawn_v1_villagers: params.only_spawn_v1_villagers ?? false,
    persona_disabled: params.persona_disabled ?? false,
    custom_skins_disabled: params.custom_skins_disabled ?? false,
    emote_chat_muted: params.emote_chat_muted ?? false,
    game_version: params.game_version ?? "",
    limited_world_width: params.limited_world_width ?? 0,
    limited_world_length: params.limited_world_length ?? 0,
    is_new_nether: params.is_new_nether ?? false,
    edu_resource_uri: params.edu_resource_uri ?? {},
    experimental_gameplay_override: params.experimental_gameplay_override ?? false,
    chat_restriction_level: params.chat_restriction_level ?? 0,
    disable_player_interactions: params.disable_player_interactions ?? false,
    server_identifier: params.server_identifier ?? "",
    world_identifier: params.world_identifier ?? "",
    scenario_identifier: params.scenario_identifier ?? "",
    owner_identifier: params.owner_identifier ?? "",
    level_id: params.level_id ?? "",
    world_name: params.world_name ?? "",
    premium_world_template_id: params.premium_world_template_id ?? "",
    is_trial: params.is_trial ?? false,
    rewind_history_size: params.rewind_history_size ?? 0,
    server_authoritative_block_breaking: params.server_authoritative_block_breaking ?? false,
    current_tick: params.current_tick ?? 0n,
    enchantment_seed: params.enchantment_seed ?? 0,
    block_properties: params.block_properties ?? {},
    multiplayer_correlation_id: params.multiplayer_correlation_id ?? "",
    server_authoritative_inventory: params.server_authoritative_inventory ?? false,
    engine: params.engine ?? "",
    property_data: params.property_data ?? {},
    block_pallette_checksum: params.block_pallette_checksum ?? 0n,
    world_template_id: params.world_template_id ?? "00000000-0000-0000-0000-000000000000",
    client_side_generation: params.client_side_generation ?? false,
    block_network_ids_are_hashes: params.block_network_ids_are_hashes ?? false,
    server_controlled_sound: params.server_controlled_sound ?? false,
  }),
);

PacketRegistry.register<TextPacket>(
  "text",
  PACKET_IDS.text,
  new TextSerializer(),
  (params) => ({
    type: params.type ?? "raw",
    needs_translation: params.needs_translation ?? false,
    source_name: params.source_name ?? "",
    message: params.message ?? "",
    parameters: params.parameters ?? [],
    xuid: params.xuid ?? "",
    platform_chat_id: params.platform_chat_id ?? "",
  }),
);

PacketRegistry.register<SetTimePacket>(
  "set_time",
  PACKET_IDS.set_time,
  new SetTimeSerializer(),
  (params) => ({ time: params.time ?? 0 }),
);

PacketRegistry.register<AddPlayerPacket>(
  "add_player",
  PACKET_IDS.add_player,
  new AddPlayerSerializer(),
  (params) => ({
    uuid: params.uuid ?? "00000000-0000-0000-0000-000000000000",
    username: params.username ?? "",
    unique_entity_id: params.unique_entity_id ?? 0n,
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    platform_chat_id: params.platform_chat_id ?? "",
    position: params.position ?? { x: 0, y: 0, z: 0 },
    motion: params.motion ?? { x: 0, y: 0, z: 0 },
    rotation: params.rotation ?? { x: 0, y: 0, z: 0 },
  }),
);

PacketRegistry.register<AddEntityPacket>(
  "add_entity",
  PACKET_IDS.add_entity,
  new AddEntitySerializer(),
  (params) => ({
    unique_entity_id: params.unique_entity_id ?? 0n,
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    entity_type: params.entity_type ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    motion: params.motion ?? { x: 0, y: 0, z: 0 },
    rotation: params.rotation ?? { x: 0, y: 0 },
    head_rotation: params.head_rotation ?? 0,
  }),
);

PacketRegistry.register<RemoveEntityPacket>(
  "remove_entity",
  PACKET_IDS.remove_entity,
  new RemoveEntitySerializer(),
  (params) => ({ unique_entity_id: params.unique_entity_id ?? 0n }),
);

PacketRegistry.register<AddItemEntityPacket>(
  "add_item_entity",
  PACKET_IDS.add_item_entity,
  new AddItemEntitySerializer(),
  (params) => ({
    entity_id_self: params.entity_id_self ?? 0n,
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    motion: params.motion ?? { x: 0, y: 0, z: 0 },
    from_fishing: params.from_fishing ?? false,
  }),
);

PacketRegistry.register<ServerPostMovePacket>(
  "server_post_move",
  PACKET_IDS.server_post_move,
  new ServerPostMoveSerializer(),
  (params) => ({
    position: params.position ?? { x: 0, y: 0, z: 0 },
  }),
);

PacketRegistry.register<TakeItemEntityPacket>(
  "take_item_entity",
  PACKET_IDS.take_item_entity,
  new TakeItemEntitySerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    target: params.target ?? 0,
  }),
);

PacketRegistry.register<MoveEntityPacket>(
  "move_entity",
  PACKET_IDS.move_entity,
  new MoveEntitySerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    flags: params.flags ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    rotation: params.rotation ?? { yaw: 0, pitch: 0, head_yaw: 0 },
  }),
);

PacketRegistry.register<MovePlayerPacket>(
  "move_player",
  PACKET_IDS.move_player,
  new MovePlayerSerializer(),
  (params) => ({
    runtime_id: params.runtime_id ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    pitch: params.pitch ?? 0,
    yaw: params.yaw ?? 0,
    head_yaw: params.head_yaw ?? 0,
    mode: params.mode ?? "normal",
    on_ground: params.on_ground ?? false,
    ridden_runtime_id: params.ridden_runtime_id ?? 0,
    teleport: params.teleport,
    tick: params.tick ?? 0n,
  }),
);

PacketRegistry.register<RiderJumpPacket>(
  "rider_jump",
  PACKET_IDS.rider_jump,
  new RiderJumpSerializer(),
  (params) => ({
    jump_strength: params.jump_strength ?? 0,
  }),
);

PacketRegistry.register<UpdateBlockPacket>(
  "update_block",
  PACKET_IDS.update_block,
  new UpdateBlockSerializer(),
  (params) => ({
    position: params.position ?? { x: 0, y: 0, z: 0 },
    block_runtime_id: params.block_runtime_id ?? 0,
    flags: params.flags ?? 0,
    layer: params.layer ?? 0,
  }),
);

PacketRegistry.register<AddPaintingPacket>(
  "add_painting",
  PACKET_IDS.add_painting,
  new AddPaintingSerializer(),
  (params) => ({
    entity_id_self: params.entity_id_self ?? 0n,
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    coordinates: params.coordinates ?? { x: 0, y: 0, z: 0 },
    direction: params.direction ?? 0,
    title: params.title ?? "",
  }),
);

PacketRegistry.register<TickSyncPacket>(
  "tick_sync",
  PACKET_IDS.tick_sync,
  new TickSyncSerializer(),
  (params) => ({
    request_time: params.request_time ?? 0n,
    response_time: params.response_time ?? 0n,
  }),
);

PacketRegistry.register<LevelSoundEventOldPacket>(
  "level_sound_event_old",
  PACKET_IDS.level_sound_event_old,
  new LevelSoundEventOldSerializer(),
  (params) => ({
    sound_id: params.sound_id ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    block_id: params.block_id ?? 0,
    entity_type: params.entity_type ?? 0,
    is_baby_mob: params.is_baby_mob ?? false,
    is_global: params.is_global ?? false,
  }),
);

PacketRegistry.register<LevelEventPacket>(
  "level_event",
  PACKET_IDS.level_event,
  new LevelEventSerializer(),
  (params) => ({
    event: params.event ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    data: params.data ?? 0,
  }),
);

PacketRegistry.register<BlockEventPacket>(
  "block_event",
  PACKET_IDS.block_event,
  new BlockEventSerializer(),
  (params) => ({
    position: params.position ?? { x: 0, y: 0, z: 0 },
    type: params.type ?? 0,
    data: params.data ?? 0,
  }),
);

PacketRegistry.register<EntityEventPacket>(
  "entity_event",
  PACKET_IDS.entity_event,
  new EntityEventSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    event_id: params.event_id ?? 0,
    data: params.data ?? 0,
  }),
);

PacketRegistry.register<MobEffectPacket>(
  "mob_effect",
  PACKET_IDS.mob_effect,
  new MobEffectSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    event_id: params.event_id ?? 0,
    effect_id: params.effect_id ?? 0,
    amplifier: params.amplifier ?? 0,
    particles: params.particles ?? false,
    duration: params.duration ?? 0,
    tick: params.tick ?? 0n,
    ambient: params.ambient ?? false,
  }),
);

PacketRegistry.register<UpdateAttributesPacket>(
  "update_attributes",
  PACKET_IDS.update_attributes,
  new UpdateAttributesSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    attributes: params.attributes ?? [],
    tick: params.tick ?? 0n,
  }),
);

PacketRegistry.register<MobEquipmentPacket>(
  "mob_equipment",
  PACKET_IDS.mob_equipment,
  new MobEquipmentSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    item: params.item ?? { network_id: 0 },
    slot: params.slot ?? 0,
    selected_slot: params.selected_slot ?? 0,
    window_id: params.window_id ?? 0,
  }),
);

PacketRegistry.register<MobArmorEquipmentPacket>(
  "mob_armor_equipment",
  PACKET_IDS.mob_armor_equipment,
  new MobArmorEquipmentSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    helmet: params.helmet ?? { network_id: 0 },
    chestplate: params.chestplate ?? { network_id: 0 },
    leggings: params.leggings ?? { network_id: 0 },
    boots: params.boots ?? { network_id: 0 },
    body: params.body ?? { network_id: 0 },
  }),
);

PacketRegistry.register<InteractPacket>(
  "interact",
  PACKET_IDS.interact,
  new InteractSerializer(),
  (params) => ({
    action_id: params.action_id ?? 0,
    target_entity_id: params.target_entity_id ?? 0n,
    position: params.position,
  }),
);

PacketRegistry.register<BlockPickRequestPacket>(
  "block_pick_request",
  PACKET_IDS.block_pick_request,
  new BlockPickRequestSerializer(),
  (params) => ({
    x: params.x ?? 0,
    y: params.y ?? 0,
    z: params.z ?? 0,
    add_user_data: params.add_user_data ?? false,
  }),
);

PacketRegistry.register<EntityPickRequestPacket>(
  "entity_pick_request",
  PACKET_IDS.entity_pick_request,
  new EntityPickRequestSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    hotbar_slot: params.hotbar_slot ?? 0,
  }),
);

PacketRegistry.register<InventoryTransactionPacket>(
  "inventory_transaction",
  PACKET_IDS.inventory_transaction,
  new InventoryTransactionSerializer(),
  (params) => ({
    legacy: params.legacy ?? { legacy_request_id: 0 },
    transaction_type: params.transaction_type ?? "normal",
    actions: params.actions ?? [],
    transaction_data: params.transaction_data,
  }),
);

PacketRegistry.register<PlayerActionPacket>(
  "player_action",
  PACKET_IDS.player_action,
  new PlayerActionSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    action: params.action ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    result_position: params.result_position ?? { x: 0, y: 0, z: 0 },
    face: params.face ?? 0,
  }),
);

PacketRegistry.register<HurtArmorPacket>(
  "hurt_armor",
  PACKET_IDS.hurt_armor,
  new HurtArmorSerializer(),
  (params) => ({
    cause: params.cause ?? 0,
    damage: params.damage ?? 0,
    armor_slots: params.armor_slots ?? 0n,
  }),
);

PacketRegistry.register<SetEntityDataPacket>(
  "set_entity_data",
  PACKET_IDS.set_entity_data,
  new SetEntityDataSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    metadata_raw: params.metadata_raw ?? Buffer.from([0xff]),
    properties: params.properties ?? { ints: [], floats: [] },
    tick: params.tick ?? 0n,
  }),
);

PacketRegistry.register<SetEntityMotionPacket>(
  "set_entity_motion",
  PACKET_IDS.set_entity_motion,
  new SetEntityMotionSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    velocity: params.velocity ?? { x: 0, y: 0, z: 0 },
    tick: params.tick ?? 0n,
  }),
);

PacketRegistry.register<SetEntityLinkPacket>(
  "set_entity_link",
  PACKET_IDS.set_entity_link,
  new SetEntityLinkSerializer(),
  (params) => ({
    link: params.link ?? {
      ridden_entity_id: 0n,
      rider_entity_id: 0n,
      type: 0,
      immediate: false,
      rider_initiated: false,
      angular_velocity: 0,
    },
  }),
);

PacketRegistry.register<SetHealthPacket>(
  "set_health",
  PACKET_IDS.set_health,
  new SetHealthSerializer(),
  (params) => ({ health: params.health ?? 0 }),
);

PacketRegistry.register<SetSpawnPositionPacket>(
  "set_spawn_position",
  PACKET_IDS.set_spawn_position,
  new SetSpawnPositionSerializer(),
  (params) => ({
    spawn_type: params.spawn_type ?? 0,
    player_position: params.player_position ?? { x: 0, y: 0, z: 0 },
    dimension: params.dimension ?? 0,
    world_position: params.world_position ?? { x: 0, y: 0, z: 0 },
  }),
);

PacketRegistry.register<AnimatePacket>(
  "animate",
  PACKET_IDS.animate,
  new AnimateSerializer(),
  (params) => ({
    action_id: params.action_id ?? 0,
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    data: params.data ?? 0,
    swing_source: params.swing_source ?? 0,
  }),
);

PacketRegistry.register<RespawnPacket>(
  "respawn",
  PACKET_IDS.respawn,
  new RespawnSerializer(),
  (params) => ({
    position: params.position ?? { x: 0, y: 0, z: 0 },
    state: params.state ?? 0,
    runtime_entity_id: params.runtime_entity_id ?? 0n,
  }),
);

PacketRegistry.register<ContainerOpenPacket>(
  "container_open",
  PACKET_IDS.container_open,
  new ContainerOpenSerializer(),
  (params) => ({
    window_id: params.window_id ?? 0,
    window_type: params.window_type ?? 0,
    coordinates: params.coordinates ?? { x: 0, y: 0, z: 0 },
    runtime_entity_id: params.runtime_entity_id ?? 0n,
  }),
);

PacketRegistry.register<ContainerClosePacket>(
  "container_close",
  PACKET_IDS.container_close,
  new ContainerCloseSerializer(),
  (params) => ({
    window_id: params.window_id ?? 0,
    window_type: params.window_type ?? 0,
    server: params.server ?? false,
  }),
);

PacketRegistry.register<PlayerHotbarPacket>(
  "player_hotbar",
  PACKET_IDS.player_hotbar,
  new PlayerHotbarSerializer(),
  (params) => ({
    selected_slot: params.selected_slot ?? 0,
    window_id: params.window_id ?? 0,
    select_slot: params.select_slot ?? false,
  }),
);

PacketRegistry.register<InventoryContentPacket>(
  "inventory_content",
  PACKET_IDS.inventory_content,
  new InventoryContentSerializer(),
  (params) => ({
    window_id: params.window_id ?? 0,
    input: params.input ?? [],
    container: params.container ?? 0,
    storage_item: params.storage_item ?? { network_id: 0 },
  }),
);

PacketRegistry.register<InventorySlotPacket>(
  "inventory_slot",
  PACKET_IDS.inventory_slot,
  new InventorySlotSerializer(),
  (params) => ({
    window_id: params.window_id ?? 0,
    slot: params.slot ?? 0,
    container: params.container ?? 0,
    storage_item: params.storage_item ?? { network_id: 0 },
    item: params.item ?? { network_id: 0 },
  }),
);

PacketRegistry.register<ContainerSetDataPacket>(
  "container_set_data",
  PACKET_IDS.container_set_data,
  new ContainerSetDataSerializer(),
  (params) => ({
    window_id: params.window_id ?? 0,
    property: params.property ?? 0,
    value: params.value ?? 0,
  }),
);

PacketRegistry.register<CraftingDataPacket>(
  "crafting_data",
  PACKET_IDS.crafting_data,
  new CraftingDataSerializer(),
  (params) => ({
    recipes: params.recipes ?? [],
    potion_type_recipes: params.potion_type_recipes ?? [],
    potion_container_recipes: params.potion_container_recipes ?? [],
    material_reducers: params.material_reducers ?? [],
    clear_recipes: params.clear_recipes ?? false,
  }),
);

PacketRegistry.register<CraftingEventPacket>(
  "crafting_event",
  PACKET_IDS.crafting_event,
  new CraftingEventSerializer(),
  (params) => ({
    window_id: params.window_id ?? 0,
    recipe_type: params.recipe_type ?? 0,
    recipe_id: params.recipe_id ?? "00000000-0000-0000-0000-000000000000",
    input: params.input ?? [],
    result: params.result ?? [],
  }),
);

PacketRegistry.register<GuiDataPickItemPacket>(
  "gui_data_pick_item",
  PACKET_IDS.gui_data_pick_item,
  new GuiDataPickItemSerializer(),
  (params) => ({
    item_name: params.item_name ?? "",
    item_effects: params.item_effects ?? "",
    hotbar_slot: params.hotbar_slot ?? 0,
  }),
);

PacketRegistry.register<AdventureSettingsPacket>(
  "adventure_settings",
  PACKET_IDS.adventure_settings,
  new AdventureSettingsSerializer(),
  (params) => ({
    flags: params.flags ?? 0,
    command_permission: params.command_permission ?? 0,
    action_permissions: params.action_permissions ?? 0,
    permission_level: params.permission_level ?? 0,
    custom_stored_permissions: params.custom_stored_permissions ?? 0,
    user_id: params.user_id ?? 0n,
  }),
);

PacketRegistry.register<BlockEntityDataPacket>(
  "block_entity_data",
  PACKET_IDS.block_entity_data,
  new BlockEntityDataSerializer(),
  (params) => ({
    position: params.position ?? { x: 0, y: 0, z: 0 },
    nbt: params.nbt ?? {},
  }),
);

PacketRegistry.register<PlayerInputPacket>(
  "player_input",
  PACKET_IDS.player_input,
  new PlayerInputSerializer(),
  (params) => ({
    motion_x: params.motion_x ?? 0,
    motion_z: params.motion_z ?? 0,
    jumping: params.jumping ?? false,
    sneaking: params.sneaking ?? false,
  }),
);

PacketRegistry.register<LevelChunkPacket>(
  "level_chunk",
  PACKET_IDS.level_chunk,
  new LevelChunkSerializer(),
  (params) => ({
    x: params.x ?? 0,
    z: params.z ?? 0,
    dimension: params.dimension ?? 0,
    sub_chunk_count: params.sub_chunk_count ?? 0,
    highest_subchunk_count: params.highest_subchunk_count,
    cache_enabled: params.cache_enabled ?? false,
    hashes: params.hashes ?? [],
    payload: params.payload ?? Buffer.alloc(0),
  }),
);

PacketRegistry.register<SetCommandsEnabledPacket>(
  "set_commands_enabled",
  PACKET_IDS.set_commands_enabled,
  new SetCommandsEnabledSerializer(),
  (params) => ({ enabled: params.enabled ?? false }),
);

PacketRegistry.register<SetDifficultyPacket>(
  "set_difficulty",
  PACKET_IDS.set_difficulty,
  new SetDifficultySerializer(),
  (params) => ({ difficulty: params.difficulty ?? 0 }),
);

PacketRegistry.register<ChangeDimensionPacket>(
  "change_dimension",
  PACKET_IDS.change_dimension,
  new ChangeDimensionSerializer(),
  (params) => ({
    dimension: params.dimension ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
    respawn: params.respawn ?? false,
    loading_screen_id: params.loading_screen_id,
  }),
);

PacketRegistry.register<SetPlayerGameTypePacket>(
  "set_player_game_type",
  PACKET_IDS.set_player_game_type,
  new SetPlayerGameTypeSerializer(),
  (params) => ({ gamemode: params.gamemode ?? 0 }),
);
PacketRegistry.register<SetPlayerGameTypePacket>(
  "set_player_game_type",
  PACKET_IDS.set_player_game_type,
  new SetPlayerGameTypeSerializer(),
  (params) => ({ gamemode: params.gamemode ?? 0 }),
);

PacketRegistry.register<PlayerListPacket>(
  "player_list",
  PACKET_IDS.player_list,
  new PlayerListSerializer(),
  (params) => ({ type: params.type ?? 0, records: params.records ?? [], raw: params.raw, verified: params.verified }),
);

PacketRegistry.register<SimpleEventPacket>(
  "simple_event",
  PACKET_IDS.simple_event,
  new SimpleEventSerializer(),
  (params) => ({ event_type: params.event_type ?? 0 }),
);

PacketRegistry.register<EventPacket>(
  "event",
  PACKET_IDS.event,
  new EventSerializer(),
  (params) => ({ runtime_id: params.runtime_id ?? 0n, event_type: params.event_type ?? 0, use_player_id: params.use_player_id ?? false, event_data: params.event_data ?? Buffer.alloc(0) }),
);

PacketRegistry.register<SpawnExperienceOrbPacket>(
  "spawn_experience_orb",
  PACKET_IDS.spawn_experience_orb,
  new SpawnExperienceOrbSerializer(),
  (params) => ({ position: params.position ?? { x: 0, y: 0, z: 0 }, count: params.count ?? 0 }),
);

PacketRegistry.register<AvailableCommandsPacket>(
  "available_commands",
  PACKET_IDS.available_commands,
  new AvailableCommandsSerializer(),
  (params) => ({
    values_len: params.values_len ?? 0,
    enum_values: params.enum_values ?? [],
    postfixes: params.postfixes ?? [],
    enums: params.enums ?? [],
    commands: params.commands ?? [],
    dynamic_enums: params.dynamic_enums ?? {},
    constraints: params.constraints ?? [],
    raw: params.raw,
  }),
);

PacketRegistry.register<CommandBlockUpdatePacket>(
  "command_block_update",
  PACKET_IDS.command_block_update,
  new CommandBlockUpdateSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<CommandOutputPacket>(
  "command_output",
  PACKET_IDS.command_output,
  new CommandOutputSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<TransferPacket>(
  "transfer",
  PACKET_IDS.transfer,
  new TransferSerializer(),
  (params) => ({ server_address: params.server_address ?? "", port: params.port ?? 0, reload_world: params.reload_world ?? false }),
);

PacketRegistry.register<PlayerSkinPacket>(
  "player_skin",
  PACKET_IDS.player_skin,
  new PlayerSkinSerializer(),
  (params) => ({ uuid: params.uuid ?? "00000000-0000-0000-0000-000000000000", raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<UpdateSoftEnumPacket>(
  "update_soft_enum",
  PACKET_IDS.update_soft_enum,
  new UpdateSoftEnumSerializer(),
  (params) => ({ enum_type: params.enum_type ?? "", options: params.options ?? [], type: params.type ?? 0 }),
);

PacketRegistry.register<EmotePacket>(
  "emote",
  PACKET_IDS.emote,
  new EmoteSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    emote_id: params.emote_id ?? "",
    flags: params.flags ?? 0,
    xuid: params.xuid ?? "",
    platform_id: params.platform_id ?? "",
  }),
);

PacketRegistry.register<PlayerAuthInputPacket>(
  "player_auth_input",
  PACKET_IDS.player_auth_input,
  new PlayerAuthInputSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<CreativeContentPacket>(
  "creative_content",
  PACKET_IDS.creative_content,
  new CreativeContentSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<PlayerEnchantOptionsPacket>(
  "player_enchant_options",
  PACKET_IDS.player_enchant_options,
  new PlayerEnchantOptionsSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ItemStackRequestPacket>(
  "item_stack_request",
  PACKET_IDS.item_stack_request,
  new ItemStackRequestSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ItemStackResponsePacket>(
  "item_stack_response",
  PACKET_IDS.item_stack_response,
  new ItemStackResponseSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<PlayerArmorDamagePacket>(
  "player_armor_damage",
  PACKET_IDS.player_armor_damage,
  new PlayerArmorDamageSerializer(),
  (params) => ({ entries: params.entries ?? [] }),
);

PacketRegistry.register<CodeBuilderPacket>(
  "code_builder",
  PACKET_IDS.code_builder,
  new CodeBuilderSerializer(),
  (params) => ({
    url: params.url ?? "",
    should_open_code_builder: params.should_open_code_builder ?? false,
  }),
);

PacketRegistry.register<UpdatePlayerGameTypePacket>(
  "update_player_game_type",
  PACKET_IDS.update_player_game_type,
  new UpdatePlayerGameTypeSerializer(),
  (params) => ({
    gamemode: params.gamemode ?? 0,
    player_unique_id: params.player_unique_id ?? 0n,
    tick: params.tick ?? 0n,
  }),
);

PacketRegistry.register<PlayerEnchantOptionsPacket>(
  "player_enchant_options",
  PACKET_IDS.player_enchant_options,
  new PlayerEnchantOptionsSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ItemStackRequestPacket>(
  "item_stack_request",
  PACKET_IDS.item_stack_request,
  new ItemStackRequestSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ItemStackResponsePacket>(
  "item_stack_response",
  PACKET_IDS.item_stack_response,
  new ItemStackResponseSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<PlayerArmorDamagePacket>(
  "player_armor_damage",
  PACKET_IDS.player_armor_damage,
  new PlayerArmorDamageSerializer(),
  (params) => ({ entries: params.entries ?? [] }),
);

PacketRegistry.register<CodeBuilderPacket>(
  "code_builder",
  PACKET_IDS.code_builder,
  new CodeBuilderSerializer(),
  (params) => ({
    url: params.url ?? "",
    should_open_code_builder: params.should_open_code_builder ?? false,
  }),
);

PacketRegistry.register<CodeBuilderSourcePacket>(
  "code_builder_source",
  PACKET_IDS.code_builder_source,
  new CodeBuilderSourceSerializer(),
  (params) => ({
    operation: params.operation ?? 0,
    category: params.category ?? 0,
    code_status: params.code_status ?? 0,
  }),
);

PacketRegistry.register<EmoteListPacket>(
  "emote_list",
  PACKET_IDS.emote_list,
  new EmoteListSerializer(),
  (params) => ({
    player_id: params.player_id ?? 0n,
    emote_pieces: params.emote_pieces ?? [],
  }),
);

PacketRegistry.register<PositionTrackingDbBroadcastPacket>(
  "position_tracking_db_broadcast",
  PACKET_IDS.position_tracking_db_broadcast,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<PositionTrackingDbRequestPacket>(
  "position_tracking_db_request",
  PACKET_IDS.position_tracking_db_request,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<DebugInfoPacket>(
  "debug_info",
  PACKET_IDS.debug_info,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<MotionPredictionHintsPacket>(
  "motion_prediction_hints",
  PACKET_IDS.motion_prediction_hints,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<AnimateEntityPacket>(
  "animate_entity",
  PACKET_IDS.animate_entity,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<CameraShakePacket>(
  "camera_shake",
  PACKET_IDS.camera_shake,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<PlayerFogPacket>(
  "player_fog",
  PACKET_IDS.player_fog,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<CorrectPlayerMovePredictionPacket>(
  "correct_player_move_prediction",
  PACKET_IDS.correct_player_move_prediction,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ItemRegistryPacket>(
  "item_registry",
  PACKET_IDS.item_registry,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<FilterTextPacket>(
  "filter_text_packet",
  PACKET_IDS.filter_text_packet,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<DebugRendererPacket>(
  "debug_renderer",
  PACKET_IDS.debug_renderer,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<SyncEntityPropertyPacket>(
  "sync_entity_property",
  PACKET_IDS.sync_entity_property,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<AddVolumeEntityPacket>(
  "add_volume_entity",
  PACKET_IDS.add_volume_entity,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<RemoveVolumeEntityPacket>(
  "remove_volume_entity",
  PACKET_IDS.remove_volume_entity,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ChunkRadiusUpdatePacket>(
  "chunk_radius_update",
  PACKET_IDS.chunk_radius_update,
  new ChunkRadiusUpdateSerializer(),
  (params) => ({ chunk_radius: params.chunk_radius ?? 0 }),
);

PacketRegistry.register<GameRulesChangedPacket>(
  "game_rules_changed",
  PACKET_IDS.game_rules_changed,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ClientCacheBlobStatusPacket>(
  "client_cache_blob_status",
  PACKET_IDS.client_cache_blob_status,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ClientCacheMissResponsePacket>(
  "client_cache_miss_response",
  PACKET_IDS.client_cache_miss_response,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);
PacketRegistry.register<CodeBuilderSourcePacket>(
  "code_builder_source",
  PACKET_IDS.code_builder_source ?? 178,
  new CodeBuilderSourceSerializer(),
  (params) => ({
    operation: params.operation ?? 0,
    category: params.category ?? 0,
    code_status: params.code_status ?? 0,
  }),
);

PacketRegistry.register<PacketViolationWarningPacket>(
  "packet_violation_warning",
  PACKET_IDS.packet_violation_warning,
  new PacketViolationWarningSerializer(),
  (params) => ({ violation_type: params.violation_type ?? 0, severity: params.severity ?? 0, context: params.context ?? Buffer.alloc(0) }),
);

PacketRegistry.register<DeathInfoPacket>(
  "death_info",
  PACKET_IDS.death_info,
  new DeathInfoSerializer(),
  (params) => ({ cause: params.cause ?? "", messages: params.messages ?? [] }),
);

PacketRegistry.register<CommandRequestPacket>(
  "command_request",
  PACKET_IDS.command_request,
  new CommandRequestSerializer(),
  (params) =>
    Object.assign(new CommandRequestPacket(), {
      command: params.command ?? "",
      uuid: params.uuid ?? "00000000-0000-0000-0000-000000000000",
      requestId: params.requestId ?? "",
      playerEntityId: params.playerEntityId ?? 0n,
      internal: params.internal ?? false,
    }),
);

PacketRegistry.register<SetLocalPlayerAsInitializedPacket>(
  "set_local_player_as_initialized",
  PACKET_IDS.set_local_player_as_initialized,
  new SetLocalPlayerAsInitializedSerializer(),
  (params) => ({ runtime_entity_id: params.runtime_entity_id ?? 0n }),
);

PacketRegistry.register<ClientCacheStatusPacket>(
  "client_cache_status",
  PACKET_IDS.client_cache_status,
  new ClientCacheStatusSerializer(),
  (params) => ({ enabled: params.enabled ?? false }),
);

PacketRegistry.register<NetworkSettingsPacket>(
  "network_settings",
  PACKET_IDS.network_settings,
  new NetworkSettingsSerializer(),
  (params) => ({
    compression_threshold: params.compression_threshold ?? 0,
    compression_algorithm: params.compression_algorithm ?? "deflate",
    client_throttle: params.client_throttle ?? false,
    client_throttle_threshold: params.client_throttle_threshold ?? 0,
    client_throttle_scalar: params.client_throttle_scalar ?? 0,
  }),
);

PacketRegistry.register<RequestChunkRadiusPacket>(
  "request_chunk_radius",
  PACKET_IDS.request_chunk_radius,
  new RequestChunkRadiusSerializer(),
  (params) => ({ chunk_radius: params.chunk_radius ?? 0, max_radius: params.max_radius ?? 0 }),
);

PacketRegistry.register<RequestNetworkSettingsPacket>(
  "request_network_settings",
  PACKET_IDS.request_network_settings,
  new RequestNetworkSettingsSerializer(),
  (params) => ({ client_protocol: params.client_protocol ?? 0 }),
);

PacketRegistry.register<MobEquipmentPacket>(
  "mob_equipment",
  PACKET_IDS.mob_equipment,
  new MobEquipmentSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    item: params.item ?? { network_id: 0 },
    slot: params.slot ?? 0,
    selected_slot: params.selected_slot ?? 0,
    window_id: params.window_id ?? 0,
  }),
);

PacketRegistry.register<MobArmorEquipmentPacket>(
  "mob_armor_equipment",
  PACKET_IDS.mob_armor_equipment,
  new MobArmorEquipmentSerializer(),
  (params) => ({
    runtime_entity_id: params.runtime_entity_id ?? 0n,
    helmet: params.helmet ?? { network_id: 0 },
    chestplate: params.chestplate ?? { network_id: 0 },
    leggings: params.leggings ?? { network_id: 0 },
    boots: params.boots ?? { network_id: 0 },
    body: params.body ?? { network_id: 0 },
  }),
);

PacketRegistry.register<InteractPacket>(
  "interact",
  PACKET_IDS.interact,
  new InteractSerializer(),
  (params) => ({
    action_id: params.action_id ?? 0,
    target_entity_id: params.target_entity_id ?? 0n,
    position: params.position,
  }),
);

PacketRegistry.register<ClientboundMapItemDataPacket>(
  "clientbound_map_item_data",
  PACKET_IDS.clientbound_map_item_data,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<MapInfoRequestPacket>(
  "map_info_request",
  PACKET_IDS.map_info_request,
  new MapInfoRequestSerializer(),
  (params) => ({ map_id: params.map_id ?? 0n, client_pixels: params.client_pixels ?? [] }),
);

PacketRegistry.register<CameraPacket>(
  "camera",
  PACKET_IDS.camera,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<BossEventPacket>(
  "boss_event",
  PACKET_IDS.boss_event,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ShowCreditsPacket>(
  "show_credits",
  PACKET_IDS.show_credits,
  new ShowCreditsSerializer(),
  (params) => ({ runtime_entity_id: params.runtime_entity_id ?? 0n, status: params.status ?? 0 }),
);

PacketRegistry.register<UpdateTradePacket>(
  "update_trade",
  PACKET_IDS.update_trade,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<UpdateEquipmentPacket>(
  "update_equipment",
  PACKET_IDS.update_equipment,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ResourcePackDataInfoPacket>(
  "resource_pack_data_info",
  PACKET_IDS.resource_pack_data_info,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ResourcePackChunkDataPacket>(
  "resource_pack_chunk_data",
  PACKET_IDS.resource_pack_chunk_data,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<ResourcePackChunkRequestPacket>(
  "resource_pack_chunk_request",
  PACKET_IDS.resource_pack_chunk_request,
  new RawPassthroughSerializer(),
  (params) => ({ raw: params.raw ?? Buffer.alloc(0) }),
);

PacketRegistry.register<RequestAbilityPacket>(
  "request_ability",
  PACKET_IDS.request_ability,
  new RequestAbilitySerializer(),
  (params) => ({
    ability: params.ability ?? 0,
    value_type: params.value_type ?? "bool",
    bool_value: params.bool_value ?? false,
    float_val: params.float_val ?? 0,
  }),
);

PacketRegistry.register<RequestPermissionsPacket>(
  "request_permissions",
  PACKET_IDS.request_permissions,
  new RequestPermissionsSerializer(),
  (params) => ({
    entity_unique_id: params.entity_unique_id ?? 0n,
    permission_level: params.permission_level ?? "visitor",
    requested_permissions: params.requested_permissions ?? 0,
  }),
);

PacketRegistry.register<ToastRequestPacket>(
  "toast_request",
  PACKET_IDS.toast_request,
  new ToastRequestSerializer(),
  (params) => ({ title: params.title ?? "", message: params.message ?? "" }),
);

PacketRegistry.register<EducationSettingsPacket>(
  "education_settings",
  PACKET_IDS.education_settings,
  new EducationSettingsSerializer(),
  (params) => ({
    CodeBuilderDefaultURI: params.CodeBuilderDefaultURI ?? "",
    CodeBuilderTitle: params.CodeBuilderTitle ?? "",
    CanResizeCodeBuilder: params.CanResizeCodeBuilder ?? false,
    disable_legacy_title_bar: params.disable_legacy_title_bar ?? false,
    post_process_filter: params.post_process_filter ?? "",
    screenshot_border_path: params.screenshot_border_path ?? "",
    has_agent_capabilities: params.has_agent_capabilities ?? false,
    agent_capabilities: params.agent_capabilities,
    HasOverrideURI: params.HasOverrideURI ?? false,
    OverrideURI: params.OverrideURI,
    HasQuiz: params.HasQuiz ?? false,
    has_external_link_settings: params.has_external_link_settings ?? false,
    external_link_settings: params.external_link_settings,
  }),
);

PacketRegistry.register<MultiplayerSettingsPacket>(
  "multiplayer_settings",
  PACKET_IDS.multiplayer_settings,
  new MultiplayerSettingsSerializer(),
  (params) => ({ action_type: params.action_type ?? 0 }),
);

PacketRegistry.register<SettingsCommandPacket>(
  "settings_command",
  PACKET_IDS.settings_command,
  new SettingsCommandSerializer(),
  (params) => ({
    command_line: params.command_line ?? "",
    suppress_output: params.suppress_output ?? false,
  }),
);

PacketRegistry.register<AnvilDamagePacket>(
  "anvil_damage",
  PACKET_IDS.anvil_damage,
  new AnvilDamageSerializer(),
  (params) => ({
    damage: params.damage ?? 0,
    position: params.position ?? { x: 0, y: 0, z: 0 },
  }),
);

PacketRegistry.register<CompletedUsingItemPacket>(
  "completed_using_item",
  PACKET_IDS.completed_using_item,
  new CompletedUsingItemSerializer(),
  (params) => ({
    used_item_id: params.used_item_id ?? 0,
    use_method: params.use_method ?? 0,
  }),
);

PacketRegistry.register<NetworkStackLatencyPacket>(
  "network_stack_latency",
  PACKET_IDS.network_stack_latency,
  new NetworkStackLatencySerializer(),
  (params) => ({
    timestamp: params.timestamp ?? 0n,
    needs_response: params.needs_response ?? false,
  }),
);

PacketRegistry.register<ServerStatsPacket>(
  "server_stats",
  PACKET_IDS.server_stats,
  new ServerStatsSerializer(),
  (params) => ({
    server_time: params.server_time ?? 0,
    network_time: params.network_time ?? 0,
  }),
);
