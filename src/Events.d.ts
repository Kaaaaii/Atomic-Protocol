import type { LoginPacket } from "./packets/packet_login";
import type { PlayStatusPacket } from "./packets/packet_play_status";
import type { ServerToClientHandshakePacket } from "./packets/packet_server_to_client_handshake";
import type { ClientToServerHandshakePacket } from "./packets/packet_client_to_server_handshake";
import type { DisconnectPacket } from "./packets/packet_disconnect";
import type { ResourcePacksInfoPacket } from "./packets/packet_resource_packs_info";
import type { ResourcePackStackPacket } from "./packets/packet_resource_pack_stack";
import type { ResourcePackClientResponsePacket } from "./packets/packet_resource_pack_client_response";
import type { TextPacket } from "./packets/packet_text";
import type { SetTimePacket } from "./packets/packet_set_time";
import type { StartGamePacket } from "./packets/packet_start_game";
import type { AddPlayerPacket } from "./packets/packet_add_player";
import type { AddEntityPacket } from "./packets/packet_add_entity";
import type { RemoveEntityPacket } from "./packets/packet_remove_entity";
import type { AddItemEntityPacket } from "./packets/packet_add_item_entity";
import type { TakeItemEntityPacket } from "./packets/packet_take_item_entity";
import type { MoveEntityPacket } from "./packets/packet_move_entity";
import type { MovePlayerPacket } from "./packets/packet_move_player";
import type { RiderJumpPacket } from "./packets/packet_rider_jump";
import type { UpdateBlockPacket } from "./packets/packet_update_block";
import type { AddPaintingPacket } from "./packets/packet_add_painting";
import type { TickSyncPacket } from "./packets/packet_tick_sync";
import type { LevelSoundEventOldPacket } from "./packets/packet_level_sound_event_old";
import type { LevelEventPacket } from "./packets/packet_level_event";
import type { BlockEventPacket } from "./packets/packet_block_event";
import type { EntityEventPacket } from "./packets/packet_entity_event";
import type { MobEffectPacket } from "./packets/packet_mob_effect";
import type { UpdateAttributesPacket } from "./packets/packet_update_attributes";
import type { InventoryTransactionPacket } from "./packets/packet_inventory_transaction";
import type { MobEquipmentPacket } from "./packets/packet_mob_equipment";
import type { MobArmorEquipmentPacket } from "./packets/packet_mob_armor_equipment";
import type { InteractPacket } from "./packets/packet_interact";
import type { BlockPickRequestPacket } from "./packets/packet_block_pick_request";
import type { EntityPickRequestPacket } from "./packets/packet_entity_pick_request";
import type { PlayerActionPacket } from "./packets/packet_player_action";
import type { HurtArmorPacket } from "./packets/packet_hurt_armor";
import type { SetEntityDataPacket } from "./packets/packet_set_entity_data";
import type { SetEntityMotionPacket } from "./packets/packet_set_entity_motion";
import type { SetEntityLinkPacket } from "./packets/packet_set_entity_link";
import type { SetHealthPacket } from "./packets/packet_set_health";
import type { SetSpawnPositionPacket } from "./packets/packet_set_spawn_position";
import type { AnimatePacket } from "./packets/packet_animate";
import type { RespawnPacket } from "./packets/packet_respawn";
import type { ContainerOpenPacket } from "./packets/packet_container_open";
import type { ContainerClosePacket } from "./packets/packet_container_close";
import type { PlayerHotbarPacket } from "./packets/packet_player_hotbar";
import type { InventoryContentPacket } from "./packets/packet_inventory_content";
import type { InventorySlotPacket } from "./packets/packet_inventory_slot";
import type { ContainerSetDataPacket } from "./packets/packet_container_set_data";
import type { CraftingDataPacket } from "./packets/packet_crafting_data";
import type { CraftingEventPacket } from "./packets/packet_crafting_event";
import type { GuiDataPickItemPacket } from "./packets/packet_gui_data_pick_item";
import type { AdventureSettingsPacket } from "./packets/packet_adventure_settings";
import type { BlockEntityDataPacket } from "./packets/packet_block_entity_data";
import type { PlayerInputPacket } from "./packets/packet_player_input";
import type { LevelChunkPacket } from "./packets/packet_level_chunk";
import type { SetCommandsEnabledPacket } from "./packets/packet_set_commands_enabled";
import type { SetDifficultyPacket } from "./packets/packet_set_difficulty";
import type { ChangeDimensionPacket } from "./packets/packet_change_dimension";
import type { SetPlayerGameTypePacket } from "./packets/packet_set_player_game_type";
import type { PlayerListPacket } from "./packets/packet_player_list";
import type { SimpleEventPacket } from "./packets/packet_simple_event";
import type { EventPacket } from "./packets/packet_event";
import type { SpawnExperienceOrbPacket } from "./packets/packet_spawn_experience_orb";
import type { ClientboundMapItemDataPacket } from "./packets/packet_clientbound_map_item_data";
import type { MapInfoRequestPacket } from "./packets/packet_map_info_request";
import type { RequestChunkRadiusPacket } from "./packets/packet_request_chunk_radius";
import type { ChunkRadiusUpdatePacket } from "./packets/packet_chunk_radius_update";
import type { GameRulesChangedPacket } from "./packets/packet_game_rules_changed";
import type { CameraPacket } from "./packets/packet_camera";
import type { BossEventPacket } from "./packets/packet_boss_event";
import type { ShowCreditsPacket } from "./packets/packet_show_credits";
import type { AvailableCommandsPacket } from "./packets/packet_available_commands";
import type { CommandRequestPacket } from "./packets/packet_command_request";
import type { CommandBlockUpdatePacket } from "./packets/packet_command_block_update";
import type { CommandOutputPacket } from "./packets/packet_command_output";
import type { UpdateTradePacket } from "./packets/packet_update_trade";
import type { UpdateEquipmentPacket } from "./packets/packet_update_equipment";
import type { ResourcePackDataInfoPacket } from "./packets/packet_resource_pack_data_info";
import type { ResourcePackChunkDataPacket } from "./packets/packet_resource_pack_chunk_data";
import type { ResourcePackChunkRequestPacket } from "./packets/packet_resource_pack_chunk_request";
import type { TransferPacket } from "./packets/packet_transfer";
import type { PlaySoundPacket } from "./packets/packet_play_sound";
import type { StopSoundPacket } from "./packets/packet_stop_sound";
import type { SetTitlePacket } from "./packets/packet_set_title";
import type { AddBehaviorTreePacket } from "./packets/packet_add_behavior_tree";
import type { StructureBlockUpdatePacket } from "./packets/packet_structure_block_update";
import type { ShowStoreOfferPacket } from "./packets/packet_show_store_offer";
import type { PurchaseReceiptPacket } from "./packets/packet_purchase_receipt";
import type { PlayerSkinPacket } from "./packets/packet_player_skin";
import type { SubClientLoginPacket } from "./packets/packet_sub_client_login";
import type { InitiateWebSocketConnectionPacket } from "./packets/packet_initiate_web_socket_connection";
import type { SetLastHurtByPacket } from "./packets/packet_set_last_hurt_by";
import type { BookEditPacket } from "./packets/packet_book_edit";
import type { NpcRequestPacket } from "./packets/packet_npc_request";
import type { PhotoTransferPacket } from "./packets/packet_photo_transfer";
import type { ModalFormRequestPacket } from "./packets/packet_modal_form_request";
import type { ModalFormResponsePacket } from "./packets/packet_modal_form_response";
import type { ServerSettingsRequestPacket } from "./packets/packet_server_settings_request";
import type { ServerSettingsResponsePacket } from "./packets/packet_server_settings_response";
import type { ShowProfilePacket } from "./packets/packet_show_profile";
import type { SetDefaultGameTypePacket } from "./packets/packet_set_default_game_type";
import type { RemoveObjectivePacket } from "./packets/packet_remove_objective";
import type { SetDisplayObjectivePacket } from "./packets/packet_set_display_objective";
import type { SetScorePacket } from "./packets/packet_set_score";
import type { LabTablePacket } from "./packets/packet_lab_table";
import type { UpdateBlockSyncedPacket } from "./packets/packet_update_block_synced";
import type { MoveEntityDeltaPacket } from "./packets/packet_move_entity_delta";
import type { SetScoreboardIdentityPacket } from "./packets/packet_set_scoreboard_identity";
import type { SetLocalPlayerAsInitializedPacket } from "./packets/packet_set_local_player_as_initialized";
import type { UpdateSoftEnumPacket } from "./packets/packet_update_soft_enum";
import type { NetworkStackLatencyPacket } from "./packets/packet_network_stack_latency";
import type { ScriptCustomEventPacket } from "./packets/packet_script_custom_event";
import type { SpawnParticleEffectPacket } from "./packets/packet_spawn_particle_effect";
import type { AvailableEntityIdentifiersPacket } from "./packets/packet_available_entity_identifiers";
import type { LevelSoundEventV2Packet } from "./packets/packet_level_sound_event_v2";
import type { NetworkChunkPublisherUpdatePacket } from "./packets/packet_network_chunk_publisher_update";
import type { BiomeDefinitionListPacket } from "./packets/packet_biome_definition_list";
import type { LevelSoundEventPacket } from "./packets/packet_level_sound_event";
import type { LevelEventGenericPacket } from "./packets/packet_level_event_generic";
import type { LecternUpdatePacket } from "./packets/packet_lectern_update";
import type { VideoStreamConnectPacket } from "./packets/packet_video_stream_connect";
import type { ClientCacheStatusPacket } from "./packets/packet_client_cache_status";
import type { OnScreenTextureAnimationPacket } from "./packets/packet_on_screen_texture_animation";
import type { MapCreateLockedCopyPacket } from "./packets/packet_map_create_locked_copy";
import type { StructureTemplateDataExportRequestPacket } from "./packets/packet_structure_template_data_export_request";
import type { StructureTemplateDataExportResponsePacket } from "./packets/packet_structure_template_data_export_response";
import type { UpdateBlockPropertiesPacket } from "./packets/packet_update_block_properties";
import type { ClientCacheBlobStatusPacket } from "./packets/packet_client_cache_blob_status";
import type { ClientCacheMissResponsePacket } from "./packets/packet_client_cache_miss_response";
import type { EducationSettingsPacket } from "./packets/packet_education_settings";
import type { EmotePacket } from "./packets/packet_emote";
import type { MultiplayerSettingsPacket } from "./packets/packet_multiplayer_settings";
import type { SettingsCommandPacket } from "./packets/packet_settings_command";
import type { AnvilDamagePacket } from "./packets/packet_anvil_damage";
import type { CompletedUsingItemPacket } from "./packets/packet_completed_using_item";
import type { NetworkSettingsPacket } from "./packets/packet_network_settings";
import type { PlayerAuthInputPacket } from "./packets/packet_player_auth_input";
import type { CreativeContentPacket } from "./packets/packet_creative_content";
import type { PlayerEnchantOptionsPacket } from "./packets/packet_player_enchant_options";
import type { ItemStackRequestPacket } from "./packets/packet_item_stack_request";
import type { ItemStackResponsePacket } from "./packets/packet_item_stack_response";
import type { PlayerArmorDamagePacket } from "./packets/packet_player_armor_damage";
import type { CodeBuilderPacket } from "./packets/packet_code_builder";
import type { UpdatePlayerGameTypePacket } from "./packets/packet_update_player_game_type";
import type { EmoteListPacket } from "./packets/packet_emote_list";
import type { PositionTrackingDbRequestPacket } from "./packets/packet_position_tracking_db_request";
import type { PositionTrackingDbBroadcastPacket } from "./packets/packet_position_tracking_db_broadcast";
import type { DebugInfoPacket } from "./packets/packet_debug_info";
import type { PacketViolationWarningPacket } from "./packets/packet_packet_violation_warning";
import type { MotionPredictionHintsPacket } from "./packets/packet_motion_prediction_hints";
import type { AnimateEntityPacket } from "./packets/packet_animate_entity";
import type { CameraShakePacket } from "./packets/packet_camera_shake";
import type { PlayerFogPacket } from "./packets/packet_player_fog";
import type { CorrectPlayerMovePredictionPacket } from "./packets/packet_correct_player_move_prediction";
import type { ItemRegistryPacket } from "./packets/packet_item_registry";
import type { FilterTextPacketPacket } from "./packets/packet_filter_text_packet";
import type { DebugRendererPacket } from "./packets/packet_debug_renderer";
import type { SyncEntityPropertyPacket } from "./packets/packet_sync_entity_property";
import type { AddVolumeEntityPacket } from "./packets/packet_add_volume_entity";
import type { RemoveVolumeEntityPacket } from "./packets/packet_remove_volume_entity";
import type { SimulationTypePacket } from "./packets/packet_simulation_type";
import type { NpcDialoguePacket } from "./packets/packet_npc_dialogue";
import type { EduUriResourcePacketPacket } from "./packets/packet_edu_uri_resource_packet";
import type { CreatePhotoPacket } from "./packets/packet_create_photo";
import type { UpdateSubchunkBlocksPacket } from "./packets/packet_update_subchunk_blocks";
import type { PhotoInfoRequestPacket } from "./packets/packet_photo_info_request";
import type { SubchunkPacket } from "./packets/packet_subchunk";
import type { SubchunkRequestPacket } from "./packets/packet_subchunk_request";
import type { ClientStartItemCooldownPacket } from "./packets/packet_client_start_item_cooldown";
import type { ScriptMessagePacket } from "./packets/packet_script_message";
import type { CodeBuilderSourcePacket } from "./packets/packet_code_builder_source";
import type { TickingAreasLoadStatusPacket } from "./packets/packet_ticking_areas_load_status";
import type { DimensionDataPacket } from "./packets/packet_dimension_data";
import type { AgentActionPacket } from "./packets/packet_agent_action";
import type { ChangeMobPropertyPacket } from "./packets/packet_change_mob_property";
import type { LessonProgressPacket } from "./packets/packet_lesson_progress";
import type { RequestAbilityPacket } from "./packets/packet_request_ability";
import type { RequestPermissionsPacket } from "./packets/packet_request_permissions";
import type { ToastRequestPacket } from "./packets/packet_toast_request";
import type { UpdateAbilitiesPacket } from "./packets/packet_update_abilities";
import type { UpdateAdventureSettingsPacket } from "./packets/packet_update_adventure_settings";
import type { DeathInfoPacket } from "./packets/packet_death_info";
import type { EditorNetworkPacket } from "./packets/packet_editor_network";
import type { FeatureRegistryPacket } from "./packets/packet_feature_registry";
import type { ServerStatsPacket } from "./packets/packet_server_stats";
import type { RequestNetworkSettingsPacket } from "./packets/packet_request_network_settings";
import type { GameTestRequestPacket } from "./packets/packet_game_test_request";
import type { GameTestResultsPacket } from "./packets/packet_game_test_results";
import type { UpdateClientInputLocksPacket } from "./packets/packet_update_client_input_locks";
import type { ClientCheatAbilityPacket } from "./packets/packet_client_cheat_ability";
import type { CameraPresetsPacket } from "./packets/packet_camera_presets";
import type { UnlockedRecipesPacket } from "./packets/packet_unlocked_recipes";
import type { CameraInstructionPacket } from "./packets/packet_camera_instruction";
import type { CompressedBiomeDefinitionsPacket } from "./packets/packet_compressed_biome_definitions";
import type { TrimDataPacket } from "./packets/packet_trim_data";
import type { OpenSignPacket } from "./packets/packet_open_sign";
import type { AgentAnimationPacket } from "./packets/packet_agent_animation";
import type { RefreshEntitlementsPacket } from "./packets/packet_refresh_entitlements";
import type { ToggleCrafterSlotRequestPacket } from "./packets/packet_toggle_crafter_slot_request";
import type { SetPlayerInventoryOptionsPacket } from "./packets/packet_set_player_inventory_options";
import type { SetHudPacket } from "./packets/packet_set_hud";
import type { AwardAchievementPacket } from "./packets/packet_award_achievement";
import type { ServerPostMovePacket } from "./packets/packet_server_post_move";
import type { ClientboundCloseFormPacket } from "./packets/packet_clientbound_close_form";
import type { ServerboundLoadingScreenPacket } from "./packets/packet_serverbound_loading_screen";
import type { JigsawStructureDataPacket } from "./packets/packet_jigsaw_structure_data";
import type { CurrentStructureFeaturePacket } from "./packets/packet_current_structure_feature";
import type { ServerboundDiagnosticsPacket } from "./packets/packet_serverbound_diagnostics";
import type { CameraAimAssistPacket } from "./packets/packet_camera_aim_assist";
import type { ContainerRegistryCleanupPacket } from "./packets/packet_container_registry_cleanup";
import type { MovementEffectPacket } from "./packets/packet_movement_effect";
import type { SetMovementAuthorityPacket } from "./packets/packet_set_movement_authority";
import type { CameraAimAssistPresetsPacket } from "./packets/packet_camera_aim_assist_presets";
import type { ClientCameraAimAssistPacket } from "./packets/packet_client_camera_aim_assist";
import type { ClientMovementPredictionSyncPacket } from "./packets/packet_client_movement_prediction_sync";
import type { UpdateClientOptionsPacket } from "./packets/packet_update_client_options";
import type { PlayerVideoCapturePacket } from "./packets/packet_player_video_capture";
import type { PlayerUpdateEntityOverridesPacket } from "./packets/packet_player_update_entity_overrides";
import type { PlayerLocationPacket } from "./packets/packet_player_location";
import type { ClientboundControlsSchemePacket } from "./packets/packet_clientbound_controls_scheme";
import type { ServerScriptDebugDrawerPacket } from "./packets/packet_server_script_debug_drawer";
import type { ServerboundPackSettingChangePacket } from "./packets/packet_serverbound_pack_setting_change";
import type { GraphicsOverrideParameterPacket } from "./packets/packet_graphics_override_parameter";

export interface Events {
  /**
   * Sent once from client to server at login. About 100k.
   *
   * Packet ID: 1
   */
  login: (packet: LoginPacket) => void;

  /**
   * Describes the login status of the player
   *
   * Packet ID: 2
   */
  play_status: (packet: PlayStatusPacket) => void;

  /**
   * Server->Client Handshake
   *
   * Packet ID: 3
   */
  server_to_client_handshake: (packet: ServerToClientHandshakePacket) => void;

  /**
   * Sets up encryption and authenticates in educational version once at level startup from client.
   *
   * Packet ID: 4
   */
  client_to_server_handshake: (packet: ClientToServerHandshakePacket) => void;

  /**
   * Event for DisconnectPacket.
   */
  disconnect: (packet: DisconnectPacket) => void;

  /**
   * Event for ResourcePacksInfoPacket.
   */
  resource_packs_info: (packet: ResourcePacksInfoPacket) => void;

  /**
   * Event for ResourcePackStackPacket.
   */
  resource_pack_stack: (packet: ResourcePackStackPacket) => void;

  /**
   * Event for ResourcePackClientResponsePacket.
   */
  resource_pack_client_response: (
    packet: ResourcePackClientResponsePacket,
  ) => void;

  /**
   * Event for TextPacket.
   */
  text: (packet: TextPacket) => void;

  /**
   * Set Time
   *
   * Packet ID: 10
   */
  set_time: (packet: SetTimePacket) => void;

  /**
   * Event for StartGamePacket.
   */
  start_game: (packet: StartGamePacket) => void;

  /**
   * Event for AddPlayerPacket.
   */
  add_player: (packet: AddPlayerPacket) => void;

  /**
   * Event for AddEntityPacket.
   */
  add_entity: (packet: AddEntityPacket) => void;

  /**
   * Event for RemoveEntityPacket.
   */
  remove_entity: (packet: RemoveEntityPacket) => void;

  /**
   * Event for AddItemEntityPacket.
   */
  add_item_entity: (packet: AddItemEntityPacket) => void;

  /**
   * Event for TakeItemEntityPacket.
   */
  take_item_entity: (packet: TakeItemEntityPacket) => void;

  /**
   * Event for MoveEntityPacket.
   */
  move_entity: (packet: MoveEntityPacket) => void;

  /**
   * Event for MovePlayerPacket.
   */
  move_player: (packet: MovePlayerPacket) => void;

  /**
   * Event for RiderJumpPacket.
   */
  rider_jump: (packet: RiderJumpPacket) => void;

  /**
   * Occasional packets sent from server when blocks update or are ticked. (For example, when digging.)
   *
   * Packet ID: 21
   */
  update_block: (packet: UpdateBlockPacket) => void;

  /**
   * Sends the information for a new painting actor from server to client.
   *
   * Packet ID: 22
   */
  add_painting: (packet: AddPaintingPacket) => void;

  /**
   * Event for TickSyncPacket.
   */
  tick_sync: (packet: TickSyncPacket) => void;

  /**
   * Event for LevelSoundEventOldPacket.
   */
  level_sound_event_old: (packet: LevelSoundEventOldPacket) => void;

  /**
   * Splash Potions, weather events, global pause, simlock commands, oh my!
   *
   * Packet ID: 25
   */
  level_event: (packet: LevelEventPacket) => void;

  /**
   * Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1.
   *
   * Packet ID: 26
   */
  block_event: (packet: BlockEventPacket) => void;

  /**
   * Event for EntityEventPacket.
   */
  entity_event: (packet: EntityEventPacket) => void;

  /**
   * Mob Effect
   *
   * Packet ID: 28
   */
  mob_effect: (packet: MobEffectPacket) => void;

  /**
   * Event for UpdateAttributesPacket.
   */
  update_attributes: (packet: UpdateAttributesPacket) => void;

  /**
   * Event for InventoryTransactionPacket.
   */
  inventory_transaction: (packet: InventoryTransactionPacket) => void;

  /**
   * Event for MobEquipmentPacket.
   */
  mob_equipment: (packet: MobEquipmentPacket) => void;

  /**
   * Event for MobArmorEquipmentPacket.
   */
  mob_armor_equipment: (packet: MobArmorEquipmentPacket) => void;

  /**
   * Event for InteractPacket.
   */
  interact: (packet: InteractPacket) => void;

  /**
   * Player picks up a block in the world; client to server.
   *
   * Packet ID: 34
   */
  block_pick_request: (packet: BlockPickRequestPacket) => void;

  /**
   * Event for EntityPickRequestPacket.
   */
  entity_pick_request: (packet: EntityPickRequestPacket) => void;

  /**
   * Sent from the client whenever the player performs an action (dashing, un-dashing, use an item, mine/hit, use a block, etc).
   *
   * Packet ID: 36
   */
  player_action: (packet: PlayerActionPacket) => void;

  /**
   * Hurt Armor
   *
   * Packet ID: 38
   */
  hurt_armor: (packet: HurtArmorPacket) => void;

  /**
   * Event for SetEntityDataPacket.
   */
  set_entity_data: (packet: SetEntityDataPacket) => void;

  /**
   * Event for SetEntityMotionPacket.
   */
  set_entity_motion: (packet: SetEntityMotionPacket) => void;

  /**
   * Event for SetEntityLinkPacket.
   */
  set_entity_link: (packet: SetEntityLinkPacket) => void;

  /**
   * This packet is sent to the client when the player is spawned in and when they respawn.
   *
   * Packet ID: 42
   */
  set_health: (packet: SetHealthPacket) => void;

  /**
   * When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. Does not change when using a bed, that is a separate packet (RespawnPacket)
   *
   * Packet ID: 43
   */
  set_spawn_position: (packet: SetSpawnPositionPacket) => void;

  /**
   * Event for AnimatePacket.
   */
  animate: (packet: AnimatePacket) => void;

  /**
   * Sent as a handshake between the client and server to respawn the player.
   *
   * Packet ID: 45
   */
  respawn: (packet: RespawnPacket) => void;

  /**
   * Sent from the server so that the client knows to open the container screen and do the chest opening animation.
   *
   * Packet ID: 46
   */
  container_open: (packet: ContainerOpenPacket) => void;

  /**
   * After the game deletes the container manager on the client, the client sends this packet.
	Then the server deletes its container manager, and sends a packet back to the client that closes the container screen.
   *
   * Packet ID: 47
   */
  container_close: (packet: ContainerClosePacket) => void;

  /**
   * Sent from the server when the player uses pick block on actors or blocks, in addition to the player uses the clear, give, or replace item command or if the serverplayer uses _sendAdditionalLevelData().
   *
   * Packet ID: 48
   */
  player_hotbar: (packet: PlayerHotbarPacket) => void;

  /**
   * Event for InventoryContentPacket.
   */
  inventory_content: (packet: InventoryContentPacket) => void;

  /**
   * Event for InventorySlotPacket.
   */
  inventory_slot: (packet: InventorySlotPacket) => void;

  /**
   * This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar)
   *
   * Packet ID: 51
   */
  container_set_data: (packet: ContainerSetDataPacket) => void;

  /**
   * Event for CraftingDataPacket.
   */
  crafting_data: (packet: CraftingDataPacket) => void;

  /**
   * Event for CraftingEventPacket.
   */
  crafting_event: (packet: CraftingEventPacket) => void;

  /**
   * The server telling the client what item slot to hover over in the hotbar.
   *
   * Packet ID: 54
   */
  gui_data_pick_item: (packet: GuiDataPickItemPacket) => void;

  /**
   * Event for AdventureSettingsPacket.
   */
  adventure_settings: (packet: AdventureSettingsPacket) => void;

  /**
   * Event for BlockEntityDataPacket.
   */
  block_entity_data: (packet: BlockEntityDataPacket) => void;

  /**
   * Event for PlayerInputPacket.
   */
  player_input: (packet: PlayerInputPacket) => void;

  /**
   * Event for LevelChunkPacket.
   */
  level_chunk: (packet: LevelChunkPacket) => void;

  /**
   * This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands
   *
   * Packet ID: 59
   */
  set_commands_enabled: (packet: SetCommandsEnabledPacket) => void;

  /**
   * Set Difficulty
   *
   * Packet ID: 60
   */
  set_difficulty: (packet: SetDifficultyPacket) => void;

  /**
   * The server sends this packet from the level to kick off dimension changing process.
   *
   * Packet ID: 61
   */
  change_dimension: (packet: ChangeDimensionPacket) => void;

  /**
   * Set Player Game Type
   *
   * Packet ID: 62
   */
  set_player_game_type: (packet: SetPlayerGameTypePacket) => void;

  /**
   * Event for PlayerListPacket.
   */
  player_list: (packet: PlayerListPacket) => void;

  /**
   * This packet is used for enabling/disabling commands and for unlocking world template settings (both unlocking UI buttons on client and the actual setting on the server).
   *
   * Packet ID: 64
   */
  simple_event: (packet: SimpleEventPacket) => void;

  /**
   * Event for EventPacket.
   */
  event: (packet: EventPacket) => void;

  /**
   * Spawn Experience Orb
   *
   * Packet ID: 66
   */
  spawn_experience_orb: (packet: SpawnExperienceOrbPacket) => void;

  /**
   * Event for ClientboundMapItemDataPacket.
   */
  clientbound_map_item_data: (packet: ClientboundMapItemDataPacket) => void;

  /**
   * In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server.
   *
   * Packet ID: 68
   */
  map_info_request: (packet: MapInfoRequestPacket) => void;

  /**
   * The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area.
   *
   * Packet ID: 69
   */
  request_chunk_radius: (packet: RequestChunkRadiusPacket) => void;

  /**
   * Event for ChunkRadiusUpdatePacket.
   */
  chunk_radius_update: (packet: ChunkRadiusUpdatePacket) => void;

  /**
   * Updates game rules.
   *
   * Packet ID: 72
   */
  game_rules_changed: (packet: GameRulesChangedPacket) => void;

  /**
   * Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server.
   *
   * Packet ID: 73
   */
  camera: (packet: CameraPacket) => void;

  /**
   * Event for BossEventPacket.
   */
  boss_event: (packet: BossEventPacket) => void;

  /**
   * Starts on server when the credits screen should pop up.
   *
   * Packet ID: 75
   */
  show_credits: (packet: ShowCreditsPacket) => void;

  /**
   * Event for AvailableCommandsPacket.
   */
  available_commands: (packet: AvailableCommandsPacket) => void;

  /**
   * Event for CommandRequestPacket.
   */
  command_request: (packet: CommandRequestPacket) => void;

  /**
   * Event for CommandBlockUpdatePacket.
   */
  command_block_update: (packet: CommandBlockUpdatePacket) => void;

  /**
   * Event for CommandOutputPacket.
   */
  command_output: (packet: CommandOutputPacket) => void;

  /**
   * This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet.
   *
   * Packet ID: 80
   */
  update_trade: (packet: UpdateTradePacket) => void;

  /**
   * Event for UpdateEquipmentPacket.
   */
  update_equipment: (packet: UpdateEquipmentPacket) => void;

  /**
   * Resource Pack Data Info
   *
   * Packet ID: 82
   */
  resource_pack_data_info: (packet: ResourcePackDataInfoPacket) => void;

  /**
   * Resource Pack Chunk Data
   *
   * Packet ID: 83
   */
  resource_pack_chunk_data: (packet: ResourcePackChunkDataPacket) => void;

  /**
   * Resource Pack Chunk Request
   *
   * Packet ID: 84
   */
  resource_pack_chunk_request: (packet: ResourcePackChunkRequestPacket) => void;

  /**
   * Used to kick off transferring the client between online games, or it can be used to cause players to quit the world and rejoin.
   *
   * Packet ID: 85
   */
  transfer: (packet: TransferPacket) => void;

  /**
   * This packet is only used via command or script event. This is for 3rd party content.
   *
   * Packet ID: 86
   */
  play_sound: (packet: PlaySoundPacket) => void;

  /**
   * Allows you to stop a sound or all sounds on all clients, only used in a /command
   *
   * Packet ID: 87
   */
  stop_sound: (packet: StopSoundPacket) => void;

  /**
   * Used by 3rd party content for the purpose of showing ui banners
   *
   * Packet ID: 88
   */
  set_title: (packet: SetTitlePacket) => void;

  /**
   * Add Behavior Tree
   *
   * Packet ID: 89
   */
  add_behavior_tree: (packet: AddBehaviorTreePacket) => void;

  /**
   * Event for StructureBlockUpdatePacket.
   */
  structure_block_update: (packet: StructureBlockUpdatePacket) => void;

  /**
   * Used for redirecting a user to the right offer.
   *
   * Packet ID: 91
   */
  show_store_offer: (packet: ShowStoreOfferPacket) => void;

  /**
   * Sent from client to server
   *
   * Packet ID: 92
   */
  purchase_receipt: (packet: PurchaseReceiptPacket) => void;

  /**
   * Event for PlayerSkinPacket.
   */
  player_skin: (packet: PlayerSkinPacket) => void;

  /**
   * Event for SubClientLoginPacket.
   */
  sub_client_login: (packet: SubClientLoginPacket) => void;

  /**
   * Event for InitiateWebSocketConnectionPacket.
   */
  initiate_web_socket_connection: (
    packet: InitiateWebSocketConnectionPacket,
  ) => void;

  /**
   * Any time a player is hit, the id of the last mob that attacked them is sent to the client
   *
   * Packet ID: 96
   */
  set_last_hurt_by: (packet: SetLastHurtByPacket) => void;

  /**
   * Event for BookEditPacket.
   */
  book_edit: (packet: BookEditPacket) => void;

  /**
   * Used for a number of interactions with the NPC Component
   *
   * Packet ID: 98
   */
  npc_request: (packet: NpcRequestPacket) => void;

  /**
   * There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook.
   *
   * Packet ID: 99
   */
  photo_transfer: (packet: PhotoTransferPacket) => void;

  /**
   * Modal Form Request
   *
   * Packet ID: 100
   */
  modal_form_request: (packet: ModalFormRequestPacket) => void;

  /**
   * Fired in response to third party server request to show the custom UI screen.
   *
   * Packet ID: 101
   */
  modal_form_response: (packet: ModalFormResponsePacket) => void;

  /**
   * Sent during the initialization of world settings on the client.
   *
   * Packet ID: 102
   */
  server_settings_request: (packet: ServerSettingsRequestPacket) => void;

  /**
   * Server Settings Response
   *
   * Packet ID: 103
   */
  server_settings_response: (packet: ServerSettingsResponsePacket) => void;

  /**
   * Show Profile
   *
   * Packet ID: 104
   */
  show_profile: (packet: ShowProfilePacket) => void;

  /**
   * Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients.
   *
   * Packet ID: 105
   */
  set_default_game_type: (packet: SetDefaultGameTypePacket) => void;

  /**
   * Using the scoreboard command, users can remove objectives that are tracked on the scoreboard.
   *
   * Packet ID: 106
   */
  remove_objective: (packet: RemoveObjectivePacket) => void;

  /**
   * Sent from the server for 3rd party content to display current objectives and status
   *
   * Packet ID: 107
   */
  set_display_objective: (packet: SetDisplayObjectivePacket) => void;

  /**
   * Event for SetScorePacket.
   */
  set_score: (packet: SetScorePacket) => void;

  /**
   * For the EDU Chemistry Lab Table block actor.
   *
   * Packet ID: 109
   */
  lab_table: (packet: LabTablePacket) => void;

  /**
   * Used to sync moving blocks with clients so they render correctly
   *
   * Packet ID: 110
   */
  update_block_synced: (packet: UpdateBlockSyncedPacket) => void;

  /**
   * Event for MoveEntityDeltaPacket.
   */
  move_entity_delta: (packet: MoveEntityDeltaPacket) => void;

  /**
   * Event for SetScoreboardIdentityPacket.
   */
  set_scoreboard_identity: (packet: SetScoreboardIdentityPacket) => void;

  /**
   * Set Local Player As Initialized
   *
   * Packet ID: 113
   */
  set_local_player_as_initialized: (
    packet: SetLocalPlayerAsInitializedPacket,
  ) => void;

  /**
   * This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content)
   *
   * Packet ID: 114
   */
  update_soft_enum: (packet: UpdateSoftEnumPacket) => void;

  /**
   * Ping Packet
   *
   * Packet ID: 115
   */
  network_stack_latency: (packet: NetworkStackLatencyPacket) => void;

  /**
   * Event for ScriptCustomEventPacket.
   */
  script_custom_event: (packet: ScriptCustomEventPacket) => void;

  /**
   * Tell client to spawn a particle effect.
   *
   * Packet ID: 118
   */
  spawn_particle_effect: (packet: SpawnParticleEffectPacket) => void;

  /**
   * Event for AvailableEntityIdentifiersPacket.
   */
  available_entity_identifiers: (
    packet: AvailableEntityIdentifiersPacket,
  ) => void;

  /**
   * Event for LevelSoundEventV2Packet.
   */
  level_sound_event_v2: (packet: LevelSoundEventV2Packet) => void;

  /**
   * Tells clients to update the chunk view for the local player.
   *
   * Packet ID: 121
   */
  network_chunk_publisher_update: (
    packet: NetworkChunkPublisherUpdatePacket,
  ) => void;

  /**
   * Event for BiomeDefinitionListPacket.
   */
  biome_definition_list: (packet: BiomeDefinitionListPacket) => void;

  /**
   * Level Sound Event
   *
   * Packet ID: 123
   */
  level_sound_event: (packet: LevelSoundEventPacket) => void;

  /**
   * LevelEventGenericPacket
   *
   * Packet ID: 124
   */
  level_event_generic: (packet: LevelEventGenericPacket) => void;

  /**
   * This is used for the Lectern Block Actor.
   *
   * Packet ID: 125
   */
  lectern_update: (packet: LecternUpdatePacket) => void;

  /**
   * Event for VideoStreamConnectPacket.
   */
  video_stream_connect: (packet: VideoStreamConnectPacket) => void;

  /**
   * It is sent by the Client once, at login, to communicate if it supports the cache or not.
   *
   * Packet ID: 129
   */
  client_cache_status: (packet: ClientCacheStatusPacket) => void;

  /**
   * On-Screen Texture Animation
   *
   * Packet ID: 130
   */
  on_screen_texture_animation: (packet: OnScreenTextureAnimationPacket) => void;

  /**
   * This is fired when the user locks a map item utilizing the Cartography Table in game.
   *
   * Packet ID: 131
   */
  map_create_locked_copy: (packet: MapCreateLockedCopyPacket) => void;

  /**
   * Event for StructureTemplateDataExportRequestPacket.
   */
  structure_template_data_export_request: (
    packet: StructureTemplateDataExportRequestPacket,
  ) => void;

  /**
   * Event for StructureTemplateDataExportResponsePacket.
   */
  structure_template_data_export_response: (
    packet: StructureTemplateDataExportResponsePacket,
  ) => void;

  /**
   * Event for UpdateBlockPropertiesPacket.
   */
  update_block_properties: (packet: UpdateBlockPropertiesPacket) => void;

  /**
   * Event for ClientCacheBlobStatusPacket.
   */
  client_cache_blob_status: (packet: ClientCacheBlobStatusPacket) => void;

  /**
   * Event for ClientCacheMissResponsePacket.
   */
  client_cache_miss_response: (packet: ClientCacheMissResponsePacket) => void;

  /**
   * Transmits EducationLevelSettings to all clients.
   *
   * Packet ID: 137
   */
  education_settings: (packet: EducationSettingsPacket) => void;

  /**
   * A client sends this to the server to notify other clients about the emote.
   *
   * Packet ID: 138
   */
  emote: (packet: EmotePacket) => void;

  /**
   * Syncs multiplayer settings
   *
   * Packet ID: 139
   */
  multiplayer_settings: (packet: MultiplayerSettingsPacket) => void;

  /**
   * Requests a setting to be changed through commands.
   *
   * Packet ID: 140
   */
  settings_command: (packet: SettingsCommandPacket) => void;

  /**
   * Requests an anvil to be damaged.
   *
   * Packet ID: 141
   */
  anvil_damage: (packet: AnvilDamagePacket) => void;

  /**
   * Send server to client to complete the using item process. An example is when you finish drinking or eating.
   *
   * Packet ID: 142
   */
  completed_using_item: (packet: CompletedUsingItemPacket) => void;

  /**
   * Sends tunable options from host to client (compression threshold and algorithm)
   *
   * Packet ID: 143
   */
  network_settings: (packet: NetworkSettingsPacket) => void;

  /**
   * Event for PlayerAuthInputPacket.
   */
  player_auth_input: (packet: PlayerAuthInputPacket) => void;

  /**
   * Event for CreativeContentPacket.
   */
  creative_content: (packet: CreativeContentPacket) => void;

  /**
   * Event for PlayerEnchantOptionsPacket.
   */
  player_enchant_options: (packet: PlayerEnchantOptionsPacket) => void;

  /**
   * Event for ItemStackRequestPacket.
   */
  item_stack_request: (packet: ItemStackRequestPacket) => void;

  /**
   * Event for ItemStackResponsePacket.
   */
  item_stack_response: (packet: ItemStackResponsePacket) => void;

  /**
   * Sent from server whenever the player's armor takes damage.
   *
   * Packet ID: 149
   */
  player_armor_damage: (packet: PlayerArmorDamagePacket) => void;

  /**
   * Code Builder Packet
   *
   * Packet ID: 150
   */
  code_builder: (packet: CodeBuilderPacket) => void;

  /**
   * The server will send this back to all clients on receipt of the SetPlayerGameTypePacket so that cached game type and permissions flags in mLevel on all clients is kept up to date.
   *
   * Packet ID: 151
   */
  update_player_game_type: (packet: UpdatePlayerGameTypePacket) => void;

  /**
   * Allows clients to download emotes that other clients have equipped.
   *
   * Packet ID: 152
   */
  emote_list: (packet: EmoteListPacket) => void;

  /**
   * Event for PositionTrackingDbRequestPacket.
   */
  position_tracking_db_request: (
    packet: PositionTrackingDbRequestPacket,
  ) => void;

  /**
   * Event for PositionTrackingDbBroadcastPacket.
   */
  position_tracking_db_broadcast: (
    packet: PositionTrackingDbBroadcastPacket,
  ) => void;

  /**
   * The system sends debug information via a generic network packet. This enables rendering of any server information on the client in for instance ImGui.
   *
   * Packet ID: 155
   */
  debug_info: (packet: DebugInfoPacket) => void;

  /**
   * This is sent when the client detects a malformed packet
   *
   * Packet ID: 156
   */
  packet_violation_warning: (packet: PacketViolationWarningPacket) => void;

  /**
   * It is essentially a SetActionMotionPacket with a bool indicating if the actor was on the ground at the time the packet is sent or not.
   *
   * Packet ID: 157
   */
  motion_prediction_hints: (packet: MotionPredictionHintsPacket) => void;

  /**
   * The AnimateEntityPacket is used to trigger a one - off animation on the client it is sent to.
   *
   * Packet ID: 158
   */
  animate_entity: (packet: AnimateEntityPacket) => void;

  /**
   * Used to control trigger camera shake movements on the client's player camera
   *
   * Packet ID: 159
   */
  camera_shake: (packet: CameraShakePacket) => void;

  /**
   * Player Fog Packet
   *
   * Packet ID: 160
   */
  player_fog: (packet: PlayerFogPacket) => void;

  /**
   * Sent to a player when their simulation of movement mismatches enough from the server that it wants to correct the client.
   *
   * Packet ID: 161
   */
  correct_player_move_prediction: (
    packet: CorrectPlayerMovePredictionPacket,
  ) => void;

  /**
   * Item data from the server. Contains component information.
   *
   * Packet ID: 162
   */
  item_registry: (packet: ItemRegistryPacket) => void;

  /**
   * Event for FilterTextPacketPacket.
   */
  filter_text_packet: (packet: FilterTextPacketPacket) => void;

  /**
   * Event for DebugRendererPacket.
   */
  debug_renderer: (packet: DebugRendererPacket) => void;

  /**
   * Event for SyncEntityPropertyPacket.
   */
  sync_entity_property: (packet: SyncEntityPropertyPacket) => void;

  /**
   * Sends a volume entity's definition and components from server to client.
   *
   * Packet ID: 166
   */
  add_volume_entity: (packet: AddVolumeEntityPacket) => void;

  /**
   * Sends a volume entity to be removed from server to client.
   *
   * Packet ID: 167
   */
  remove_volume_entity: (packet: RemoveVolumeEntityPacket) => void;

  /**
   * Sent from the server to the client when setting the simulation type for toolbox mode. (Not yet suported)
   *
   * Packet ID: 168
   */
  simulation_type: (packet: SimulationTypePacket) => void;

  /**
   * Sent from the server to client when remote firing an NPC dialogue window for a client
   *
   * Packet ID: 169
   */
  npc_dialogue: (packet: NpcDialoguePacket) => void;

  /**
   * Event for EduUriResourcePacketPacket.
   */
  edu_uri_resource_packet: (packet: EduUriResourcePacketPacket) => void;

  /**
   * Players now have the possibility to export photos from their portfolios into photo items in their inventory. EDU.
   *
   * Packet ID: 171
   */
  create_photo: (packet: CreatePhotoPacket) => void;

  /**
   * Event for UpdateSubchunkBlocksPacket.
   */
  update_subchunk_blocks: (packet: UpdateSubchunkBlocksPacket) => void;

  /**
   * Event for PhotoInfoRequestPacket.
   */
  photo_info_request: (packet: PhotoInfoRequestPacket) => void;

  /**
   * Event for SubchunkPacket.
   */
  subchunk: (packet: SubchunkPacket) => void;

  /**
   * Event for SubchunkRequestPacket.
   */
  subchunk_request: (packet: SubchunkRequestPacket) => void;

  /**
   * Event for ClientStartItemCooldownPacket.
   */
  client_start_item_cooldown: (packet: ClientStartItemCooldownPacket) => void;

  /**
   * Used to send custom messages between client and server.
   *
   * Packet ID: 177
   */
  script_message: (packet: ScriptMessagePacket) => void;

  /**
   * This is EDU exclusive, used in getInterface() of WebviewSystem
   *
   * Packet ID: 178
   */
  code_builder_source: (packet: CodeBuilderSourcePacket) => void;

  /**
   * Used to inform the client that the server is waiting for ticking areas to finish preloading.
   *
   * Packet ID: 179
   */
  ticking_areas_load_status: (packet: TickingAreasLoadStatusPacket) => void;

  /**
   * Event for DimensionDataPacket.
   */
  dimension_data: (packet: DimensionDataPacket) => void;

  /**
   * Event for AgentActionPacket.
   */
  agent_action: (packet: AgentActionPacket) => void;

  /**
   * packet containing data for changing mob property
   *
   * Packet ID: 182
   */
  change_mob_property: (packet: ChangeMobPropertyPacket) => void;

  /**
   * Lesson Progress
   *
   * Packet ID: 183
   */
  lesson_progress: (packet: LessonProgressPacket) => void;

  /**
   * Sent from client to server. Used to request an ability change.
   *
   * Packet ID: 184
   */
  request_ability: (packet: RequestAbilityPacket) => void;

  /**
   * Sent from client to server. Used to request a new Permissions Levels.
   *
   * Packet ID: 185
   */
  request_permissions: (packet: RequestPermissionsPacket) => void;

  /**
   * Pushes a UI toast message to be displayed by the client
   *
   * Packet ID: 186
   */
  toast_request: (packet: ToastRequestPacket) => void;

  /**
   * Event for UpdateAbilitiesPacket.
   */
  update_abilities: (packet: UpdateAbilitiesPacket) => void;

  /**
   * UpdateAdventureSettingsPacket
   *
   * Packet ID: 188
   */
  update_adventure_settings: (packet: UpdateAdventureSettingsPacket) => void;

  /**
   * Sent from the server to client when player dies (Level::onPlayerDeath).
   *
   * Packet ID: 189
   */
  death_info: (packet: DeathInfoPacket) => void;

  /**
   * General use Editor specific packet - carries a payload of whatever serialized data that the individual IEditorNetworkPayload generates.
   *
   * Packet ID: 190
   */
  editor_network: (packet: EditorNetworkPacket) => void;

  /**
   * This is the packet that tracks the active feature registry data from the server so that client can place the features themselves.
   *
   * Packet ID: 191
   */
  feature_registry: (packet: FeatureRegistryPacket) => void;

  /**
   * Used to send performance and other valuable stats back to the client
   *
   * Packet ID: 192
   */
  server_stats: (packet: ServerStatsPacket) => void;

  /**
   * Requests tunable options from host to client (compression threshold and algorithm).
   *
   * Packet ID: 193
   */
  request_network_settings: (packet: RequestNetworkSettingsPacket) => void;

  /**
   * Internal Text Packet
   *
   * Packet ID: 194
   */
  game_test_request: (packet: GameTestRequestPacket) => void;

  /**
   * Game Test Results Packet
   *
   * Packet ID: 195
   */
  game_test_results: (packet: GameTestResultsPacket) => void;

  /**
   * UpdateClientInputLocksPacket
   *
   * Packet ID: 196
   */
  update_client_input_locks: (packet: UpdateClientInputLocksPacket) => void;

  /**
   * Event for ClientCheatAbilityPacket.
   */
  client_cheat_ability: (packet: ClientCheatAbilityPacket) => void;

  /**
   * Used to sync CameraPresets data from server to clients.
   *
   * Packet ID: 198
   */
  camera_presets: (packet: CameraPresetsPacket) => void;

  /**
   * Sent from server to client, for all previously unlocked recipes on load and for any newly unlocked recipes during gameplay.
   *
   * Packet ID: 199
   */
  unlocked_recipes: (packet: UnlockedRecipesPacket) => void;

  /**
   * Used to send a CameraInstruction from the server to the specified clients.
   *
   * Packet ID: 300
   */
  camera_instruction: (packet: CameraInstructionPacket) => void;

  /**
   * Event for CompressedBiomeDefinitionsPacket.
   */
  compressed_biome_definitions: (
    packet: CompressedBiomeDefinitionsPacket,
  ) => void;

  /**
   * Event for TrimDataPacket.
   */
  trim_data: (packet: TrimDataPacket) => void;

  /**
   * Sent from the server so that the client knows to open the sign screen.
   *
   * Packet ID: 303
   */
  open_sign: (packet: OpenSignPacket) => void;

  /**
   * Broadcasted to other players when an Agent performs an animation so it gets properly replicated.
   *
   * Packet ID: 304
   */
  agent_animation: (packet: AgentAnimationPacket) => void;

  /**
   * Refresh Entitlements
   *
   * Packet ID: 305
   */
  refresh_entitlements: (packet: RefreshEntitlementsPacket) => void;

  /**
   * Event for ToggleCrafterSlotRequestPacket.
   */
  toggle_crafter_slot_request: (packet: ToggleCrafterSlotRequestPacket) => void;

  /**
   * SetPlayerInventoryOptionsPacket
   *
   * Packet ID: 307
   */
  set_player_inventory_options: (
    packet: SetPlayerInventoryOptionsPacket,
  ) => void;

  /**
   * This packet is only used via the set hud command. This is for 3rd party content.
   *
   * Packet ID: 308
   */
  set_hud: (packet: SetHudPacket) => void;

  /**
   * Contains the ID of the achievement to award
   *
   * Packet ID: 309
   */
  award_achievement: (packet: AwardAchievementPacket) => void;

  /**
   * Event for ServerPostMovePacket.
   */
  server_post_move: (packet: ServerPostMovePacket) => void;

  /**
   * Sent from the server to client to force close all server forms on the stack and return to the HUD screen.
   *
   * Packet ID: 310
   */
  clientbound_close_form: (packet: ClientboundCloseFormPacket) => void;

  /**
   * Sent from the client to the server to message to the server about the state of the loading screen.
   *
   * Packet ID: 312
   */
  serverbound_loading_screen: (packet: ServerboundLoadingScreenPacket) => void;

  /**
   * Jigsaw Structure data used by client jigsaw structure worldgen. This packet contains a copy of the behavior pack jigsaw structure rules.
   *
   * Packet ID: 313
   */
  jigsaw_structure_data: (packet: JigsawStructureDataPacket) => void;

  /**
   * Informs the client of which Structure Feature they are currently occupying.
   *
   * Packet ID: 314
   */
  current_structure_feature: (packet: CurrentStructureFeaturePacket) => void;

  /**
   * Sent from the client to the server IF ProfilerLite is enabled AND the creator toggle for additional client telemetry is enabled AND new telemetry data is ready (every 500 ms).
   *
   * Packet ID: 315
   */
  serverbound_diagnostics: (packet: ServerboundDiagnosticsPacket) => void;

  /**
   * CameraAimAssist
   *
   * Packet ID: 316
   */
  camera_aim_assist: (packet: CameraAimAssistPacket) => void;

  /**
   * This is used to trigger a clientside cleanup of the dynamic container registry.
   *
   * Packet ID: 317
   */
  container_registry_cleanup: (packet: ContainerRegistryCleanupPacket) => void;

  /**
   * These packets are sent to the client to update specific MovementEffects
   *
   * Packet ID: 318
   */
  movement_effect: (packet: MovementEffectPacket) => void;

  /**
   * Event for SetMovementAuthorityPacket.
   */
  set_movement_authority: (packet: SetMovementAuthorityPacket) => void;

  /**
   * Camera aim-assist registry presets/categories data sent from the server to clients.
   *
   * Packet ID: 320
   */
  camera_aim_assist_presets: (packet: CameraAimAssistPresetsPacket) => void;

  /**
   * Client-side activation of aim-assist
   *
   * Packet ID: 321
   */
  client_camera_aim_assist: (packet: ClientCameraAimAssistPacket) => void;

  /**
   * Event for ClientMovementPredictionSyncPacket.
   */
  client_movement_prediction_sync: (
    packet: ClientMovementPredictionSyncPacket,
  ) => void;

  /**
   * Sync the player's options (mostly settings) to the server.
   *
   * Packet ID: 323
   */
  update_client_options: (packet: UpdateClientOptionsPacket) => void;

  /**
   * Event for PlayerVideoCapturePacket.
   */
  player_video_capture: (packet: PlayerVideoCapturePacket) => void;

  /**
   * Event for PlayerUpdateEntityOverridesPacket.
   */
  player_update_entity_overrides: (
    packet: PlayerUpdateEntityOverridesPacket,
  ) => void;

  /**
   * Event for PlayerLocationPacket.
   */
  player_location: (packet: PlayerLocationPacket) => void;

  /**
   * Event for ClientboundControlsSchemePacket.
   */
  clientbound_controls_scheme: (
    packet: ClientboundControlsSchemePacket,
  ) => void;

  /**
   * Event for ServerScriptDebugDrawerPacket.
   */
  server_script_debug_drawer: (packet: ServerScriptDebugDrawerPacket) => void;

  /**
   * Sent from the client to the server when players change Pack Settings (pack UI).
   *
   * Packet ID: 329
   */
  serverbound_pack_setting_change: (
    packet: ServerboundPackSettingChangePacket,
  ) => void;

  /**
   * Sent from the server to the client when a server script changes the rendering settings
   *
   * Packet ID: 331
   */
  graphics_override_parameter: (
    packet: GraphicsOverrideParameterPacket,
  ) => void;
  session: () => void;
  close: () => void;
  error: () => void;
  disconnect: () => void;
  connect_allowed: () => void;
}
