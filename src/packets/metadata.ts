export interface PacketMetadata {
  id?: number;
  name: string;
  description?: string;
  direction?: string;
}

export const PACKET_METADATA: Record<string, PacketMetadata> = {
  login: {
    id: 1,
    name: "login",
    description: "Sent once from client to server at login. About 100k.",
  },
  play_status: {
    id: 2,
    name: "play_status",
    description: "Describes the login status of the player",
  },
  server_to_client_handshake: {
    id: 3,
    name: "server_to_client_handshake",
    description: "Server->Client Handshake",
  },
  client_to_server_handshake: {
    id: 4,
    name: "client_to_server_handshake",
    description:
      "Sets up encryption and authenticates in educational version once at level startup from client.",
  },
  disconnect: {
    id: undefined,
    name: "disconnect",
    description: undefined,
  },
  resource_packs_info: {
    id: undefined,
    name: "resource_packs_info",
    description: undefined,
  },
  resource_pack_stack: {
    id: undefined,
    name: "resource_pack_stack",
    description: undefined,
  },
  resource_pack_client_response: {
    id: undefined,
    name: "resource_pack_client_response",
    description: undefined,
  },
  text: {
    id: undefined,
    name: "text",
    description: undefined,
  },
  set_time: {
    id: 10,
    name: "set_time",
    description: "Set Time",
  },
  start_game: {
    id: undefined,
    name: "start_game",
    description: undefined,
  },
  add_player: {
    id: undefined,
    name: "add_player",
    description: undefined,
  },
  add_entity: {
    id: undefined,
    name: "add_entity",
    description: undefined,
  },
  remove_entity: {
    id: undefined,
    name: "remove_entity",
    description: undefined,
  },
  add_item_entity: {
    id: undefined,
    name: "add_item_entity",
    description: undefined,
  },
  take_item_entity: {
    id: undefined,
    name: "take_item_entity",
    description: undefined,
  },
  move_entity: {
    id: undefined,
    name: "move_entity",
    description: undefined,
  },
  move_player: {
    id: undefined,
    name: "move_player",
    description: undefined,
  },
  rider_jump: {
    id: undefined,
    name: "rider_jump",
    description: undefined,
  },
  update_block: {
    id: 21,
    name: "update_block",
    description:
      "Occasional packets sent from server when blocks update or are ticked. (For example, when digging.)",
  },
  add_painting: {
    id: 22,
    name: "add_painting",
    description:
      "Sends the information for a new painting actor from server to client.",
  },
  tick_sync: {
    id: undefined,
    name: "tick_sync",
    description: undefined,
  },
  level_sound_event_old: {
    id: undefined,
    name: "level_sound_event_old",
    description: undefined,
  },
  level_event: {
    id: 25,
    name: "level_event",
    description:
      "Splash Potions, weather events, global pause, simlock commands, oh my!",
  },
  block_event: {
    id: 26,
    name: "block_event",
    description:
      "Whenever a block event happens it is sent from the server to sync client and server, with arbitrarily encoded information in b0 and b1.",
  },
  entity_event: {
    id: undefined,
    name: "entity_event",
    description: undefined,
  },
  mob_effect: {
    id: 28,
    name: "mob_effect",
    description: "Mob Effect",
  },
  update_attributes: {
    id: undefined,
    name: "update_attributes",
    description: undefined,
  },
  inventory_transaction: {
    id: undefined,
    name: "inventory_transaction",
    description: undefined,
  },
  mob_equipment: {
    id: undefined,
    name: "mob_equipment",
    description: undefined,
  },
  mob_armor_equipment: {
    id: undefined,
    name: "mob_armor_equipment",
    description: undefined,
  },
  interact: {
    id: undefined,
    name: "interact",
    description: undefined,
  },
  block_pick_request: {
    id: 34,
    name: "block_pick_request",
    description: "Player picks up a block in the world; client to server.",
  },
  entity_pick_request: {
    id: undefined,
    name: "entity_pick_request",
    description: undefined,
  },
  player_action: {
    id: 36,
    name: "player_action",
    description:
      "Sent from the client whenever the player performs an action (dashing, un-dashing, use an item, mine/hit, use a block, etc).",
  },
  hurt_armor: {
    id: 38,
    name: "hurt_armor",
    description: "Hurt Armor",
  },
  set_entity_data: {
    id: undefined,
    name: "set_entity_data",
    description: undefined,
  },
  set_entity_motion: {
    id: undefined,
    name: "set_entity_motion",
    description: undefined,
  },
  set_entity_link: {
    id: undefined,
    name: "set_entity_link",
    description: undefined,
  },
  set_health: {
    id: 42,
    name: "set_health",
    description:
      "This packet is sent to the client when the player is spawned in and when they respawn.",
  },
  set_spawn_position: {
    id: 43,
    name: "set_spawn_position",
    description:
      "When a player logs in or the SetWorldSpawnCommand is used this is sent from the server to the client. Does not change when using a bed, that is a separate packet (RespawnPacket)",
  },
  animate: {
    id: undefined,
    name: "animate",
    description: undefined,
  },
  respawn: {
    id: 45,
    name: "respawn",
    description:
      "Sent as a handshake between the client and server to respawn the player.",
  },
  container_open: {
    id: 46,
    name: "container_open",
    description:
      "Sent from the server so that the client knows to open the container screen and do the chest opening animation.",
  },
  container_close: {
    id: 47,
    name: "container_close",
    description:
      "After the game deletes the container manager on the client, the client sends this packet.\n\tThen the server deletes its container manager, and sends a packet back to the client that closes the container screen.",
  },
  player_hotbar: {
    id: 48,
    name: "player_hotbar",
    description:
      "Sent from the server when the player uses pick block on actors or blocks, in addition to the player uses the clear, give, or replace item command or if the serverplayer uses _sendAdditionalLevelData(). ",
  },
  inventory_content: {
    id: undefined,
    name: "inventory_content",
    description: undefined,
  },
  inventory_slot: {
    id: undefined,
    name: "inventory_slot",
    description: undefined,
  },
  container_set_data: {
    id: 51,
    name: "container_set_data",
    description:
      'This is sent from the server basically any time that the "cooking" state of the brewing stand or the furnace changes (i.e. the loading bar)',
  },
  crafting_data: {
    id: undefined,
    name: "crafting_data",
    description: undefined,
  },
  crafting_event: {
    id: undefined,
    name: "crafting_event",
    description: undefined,
  },
  gui_data_pick_item: {
    id: 54,
    name: "gui_data_pick_item",
    description:
      "The server telling the client what item slot to hover over in the hotbar.",
  },
  adventure_settings: {
    id: undefined,
    name: "adventure_settings",
    description: undefined,
  },
  block_entity_data: {
    id: undefined,
    name: "block_entity_data",
    description: undefined,
  },
  player_input: {
    id: undefined,
    name: "player_input",
    description: undefined,
  },
  level_chunk: {
    id: undefined,
    name: "level_chunk",
    description: undefined,
  },
  set_commands_enabled: {
    id: 59,
    name: "set_commands_enabled",
    description:
      "This is used by the world settings screen, cheats, EDU builds for teachers, and various other places to enable cheats/commands",
  },
  set_difficulty: {
    id: 60,
    name: "set_difficulty",
    description: "Set Difficulty",
  },
  change_dimension: {
    id: 61,
    name: "change_dimension",
    description:
      "The server sends this packet from the level to kick off dimension changing process.",
  },
  set_player_game_type: {
    id: 62,
    name: "set_player_game_type",
    description: "Set Player Game Type",
  },
  player_list: {
    id: undefined,
    name: "player_list",
    description: undefined,
  },
  simple_event: {
    id: 64,
    name: "simple_event",
    description:
      "This packet is used for enabling/disabling commands and for unlocking world template settings (both unlocking UI buttons on client and the actual setting on the server).",
  },
  event: {
    id: undefined,
    name: "event",
    description: undefined,
  },
  spawn_experience_orb: {
    id: 66,
    name: "spawn_experience_orb",
    description: "Spawn Experience Orb",
  },
  clientbound_map_item_data: {
    id: undefined,
    name: "clientbound_map_item_data",
    description: undefined,
  },
  map_info_request: {
    id: 68,
    name: "map_info_request",
    description:
      "In the case of the client being unable to find map data for a map item it sends a uuid for a map to the server.",
  },
  request_chunk_radius: {
    id: 69,
    name: "request_chunk_radius",
    description:
      "The client can't just change the view radius without the server's approval, otherwise there could be holes on unrendered area.",
  },
  chunk_radius_update: {
    id: undefined,
    name: "chunk_radius_update",
    description: undefined,
  },
  game_rules_changed: {
    id: 72,
    name: "game_rules_changed",
    description: "Updates game rules.",
  },
  camera: {
    id: 73,
    name: "camera",
    description:
      "Used only in EDU through the tripod camera item or the TakePictureCommand. Sends the camera actor id and the target player id from the server.",
  },
  boss_event: {
    id: undefined,
    name: "boss_event",
    description: undefined,
  },
  show_credits: {
    id: 75,
    name: "show_credits",
    description: "Starts on server when the credits screen should pop up.",
  },
  available_commands: {
    id: undefined,
    name: "available_commands",
    description: undefined,
  },
  command_request: {
    id: undefined,
    name: "command_request",
    description: undefined,
  },
  command_block_update: {
    id: undefined,
    name: "command_block_update",
    description: undefined,
  },
  command_output: {
    id: undefined,
    name: "command_output",
    description: undefined,
  },
  update_trade: {
    id: 80,
    name: "update_trade",
    description:
      "This is used when the player trades with an npc. This sends all of the updated trade info in one big ol' packet.",
  },
  update_equipment: {
    id: undefined,
    name: "update_equipment",
    description: undefined,
  },
  resource_pack_data_info: {
    id: 82,
    name: "resource_pack_data_info",
    description: "Resource Pack Data Info",
  },
  resource_pack_chunk_data: {
    id: 83,
    name: "resource_pack_chunk_data",
    description: "Resource Pack Chunk Data",
  },
  resource_pack_chunk_request: {
    id: 84,
    name: "resource_pack_chunk_request",
    description: "Resource Pack Chunk Request",
  },
  transfer: {
    id: 85,
    name: "transfer",
    description:
      "Used to kick off transferring the client between online games, or it can be used to cause players to quit the world and rejoin.",
  },
  play_sound: {
    id: 86,
    name: "play_sound",
    description:
      "This packet is only used via command or script event. This is for 3rd party content.",
  },
  stop_sound: {
    id: 87,
    name: "stop_sound",
    description:
      "Allows you to stop a sound or all sounds on all clients, only used in a /command",
  },
  set_title: {
    id: 88,
    name: "set_title",
    description:
      "Used by 3rd party content for the purpose of showing ui banners",
  },
  add_behavior_tree: {
    id: 89,
    name: "add_behavior_tree",
    description: "Add Behavior Tree",
  },
  structure_block_update: {
    id: undefined,
    name: "structure_block_update",
    description: undefined,
  },
  show_store_offer: {
    id: 91,
    name: "show_store_offer",
    description: "Used for redirecting a user to the right offer.",
  },
  purchase_receipt: {
    id: 92,
    name: "purchase_receipt",
    description: "Sent from client to server",
  },
  player_skin: {
    id: undefined,
    name: "player_skin",
    description: undefined,
  },
  sub_client_login: {
    id: undefined,
    name: "sub_client_login",
    description: undefined,
  },
  initiate_web_socket_connection: {
    id: undefined,
    name: "initiate_web_socket_connection",
    description: undefined,
  },
  set_last_hurt_by: {
    id: 96,
    name: "set_last_hurt_by",
    description:
      "Any time a player is hit, the id of the last mob that attacked them is sent to the client",
  },
  book_edit: {
    id: undefined,
    name: "book_edit",
    description: undefined,
  },
  npc_request: {
    id: 98,
    name: "npc_request",
    description: "Used for a number of interactions with the NPC Component",
  },
  photo_transfer: {
    id: 99,
    name: "photo_transfer",
    description:
      "There is a camera item in EDU and they can use it to take screenshots and add them to a scrapbook.",
  },
  modal_form_request: {
    id: 100,
    name: "modal_form_request",
    description: "Modal Form Request",
  },
  modal_form_response: {
    id: 101,
    name: "modal_form_response",
    description:
      "Fired in response to third party server request to show the custom UI screen.",
  },
  server_settings_request: {
    id: 102,
    name: "server_settings_request",
    description:
      "Sent during the initialization of world settings on the client.",
  },
  server_settings_response: {
    id: 103,
    name: "server_settings_response",
    description: "Server Settings Response",
  },
  show_profile: {
    id: 104,
    name: "show_profile",
    description: "Show Profile",
  },
  set_default_game_type: {
    id: 105,
    name: "set_default_game_type",
    description:
      "Same as SetPlayerGameTypePacket & UpdatePlayerGameTypePacket, the only difference is that this changes the default for all clients.",
  },
  remove_objective: {
    id: 106,
    name: "remove_objective",
    description:
      "Using the scoreboard command, users can remove objectives that are tracked on the scoreboard.",
  },
  set_display_objective: {
    id: 107,
    name: "set_display_objective",
    description:
      "Sent from the server for 3rd party content to display current objectives and status",
  },
  set_score: {
    id: undefined,
    name: "set_score",
    description: undefined,
  },
  lab_table: {
    id: 109,
    name: "lab_table",
    description: "For the EDU Chemistry Lab Table block actor.",
  },
  update_block_synced: {
    id: 110,
    name: "update_block_synced",
    description:
      "Used to sync moving blocks with clients so they render correctly",
  },
  move_entity_delta: {
    id: undefined,
    name: "move_entity_delta",
    description: undefined,
  },
  set_scoreboard_identity: {
    id: undefined,
    name: "set_scoreboard_identity",
    description: undefined,
  },
  set_local_player_as_initialized: {
    id: 113,
    name: "set_local_player_as_initialized",
    description: "Set Local Player As Initialized",
  },
  update_soft_enum: {
    id: 114,
    name: "update_soft_enum",
    description:
      "This is used for the scoreboard and tag systems (overwhelmingly used by 3rd party content)",
  },
  network_stack_latency: {
    id: 115,
    name: "network_stack_latency",
    description: "Ping Packet",
  },
  script_custom_event: {
    id: undefined,
    name: "script_custom_event",
    description: undefined,
  },
  spawn_particle_effect: {
    id: 118,
    name: "spawn_particle_effect",
    description: "Tell client to spawn a particle effect.",
  },
  available_entity_identifiers: {
    id: undefined,
    name: "available_entity_identifiers",
    description: undefined,
  },
  level_sound_event_v2: {
    id: undefined,
    name: "level_sound_event_v2",
    description: undefined,
  },
  network_chunk_publisher_update: {
    id: 121,
    name: "network_chunk_publisher_update",
    description: "Tells clients to update the chunk view for the local player.",
  },
  biome_definition_list: {
    id: undefined,
    name: "biome_definition_list",
    description: undefined,
  },
  level_sound_event: {
    id: 123,
    name: "level_sound_event",
    description: "Level Sound Event",
  },
  level_event_generic: {
    id: 124,
    name: "level_event_generic",
    description: "LevelEventGenericPacket",
  },
  lectern_update: {
    id: 125,
    name: "lectern_update",
    description: "This is used for the Lectern Block Actor.",
  },
  video_stream_connect: {
    id: undefined,
    name: "video_stream_connect",
    description: undefined,
  },
  client_cache_status: {
    id: 129,
    name: "client_cache_status",
    description:
      "It is sent by the Client once, at login, to communicate if it supports the cache or not.",
  },
  on_screen_texture_animation: {
    id: 130,
    name: "on_screen_texture_animation",
    description: "On-Screen Texture Animation",
  },
  map_create_locked_copy: {
    id: 131,
    name: "map_create_locked_copy",
    description:
      "This is fired when the user locks a map item utilizing the Cartography Table in game.",
  },
  structure_template_data_export_request: {
    id: undefined,
    name: "structure_template_data_export_request",
    description: undefined,
  },
  structure_template_data_export_response: {
    id: undefined,
    name: "structure_template_data_export_response",
    description: undefined,
  },
  update_block_properties: {
    id: undefined,
    name: "update_block_properties",
    description: undefined,
  },
  client_cache_blob_status: {
    id: undefined,
    name: "client_cache_blob_status",
    description: undefined,
  },
  client_cache_miss_response: {
    id: undefined,
    name: "client_cache_miss_response",
    description: undefined,
  },
  education_settings: {
    id: 137,
    name: "education_settings",
    description: "Transmits EducationLevelSettings to all clients.",
  },
  emote: {
    id: 138,
    name: "emote",
    description:
      "A client sends this to the server to notify other clients about the emote.",
  },
  multiplayer_settings: {
    id: 139,
    name: "multiplayer_settings",
    description: "Syncs multiplayer settings",
  },
  settings_command: {
    id: 140,
    name: "settings_command",
    description: "Requests a setting to be changed through commands.",
  },
  anvil_damage: {
    id: 141,
    name: "anvil_damage",
    description: "Requests an anvil to be damaged.",
  },
  completed_using_item: {
    id: 142,
    name: "completed_using_item",
    description:
      "Send server to client to complete the using item process. An example is when you finish drinking or eating.",
  },
  network_settings: {
    id: 143,
    name: "network_settings",
    description:
      "Sends tunable options from host to client (compression threshold and algorithm)",
  },
  player_auth_input: {
    id: undefined,
    name: "player_auth_input",
    description: undefined,
  },
  creative_content: {
    id: undefined,
    name: "creative_content",
    description: undefined,
  },
  player_enchant_options: {
    id: undefined,
    name: "player_enchant_options",
    description: undefined,
  },
  item_stack_request: {
    id: undefined,
    name: "item_stack_request",
    description: undefined,
  },
  item_stack_response: {
    id: undefined,
    name: "item_stack_response",
    description: undefined,
  },
  player_armor_damage: {
    id: 149,
    name: "player_armor_damage",
    description: "Sent from server whenever the player's armor takes damage.",
  },
  code_builder: {
    id: 150,
    name: "code_builder",
    description: "Code Builder Packet",
  },
  update_player_game_type: {
    id: 151,
    name: "update_player_game_type",
    description:
      "The server will send this back to all clients on receipt of the SetPlayerGameTypePacket so that cached game type and permissions flags in mLevel on all clients is kept up to date.",
  },
  emote_list: {
    id: 152,
    name: "emote_list",
    description:
      "Allows clients to download emotes that other clients have equipped.",
  },
  position_tracking_db_request: {
    id: undefined,
    name: "position_tracking_db_request",
    description: undefined,
  },
  position_tracking_db_broadcast: {
    id: undefined,
    name: "position_tracking_db_broadcast",
    description: undefined,
  },
  debug_info: {
    id: 155,
    name: "debug_info",
    description:
      "The system sends debug information via a generic network packet. This enables rendering of any server information on the client in for instance ImGui.",
  },
  packet_violation_warning: {
    id: 156,
    name: "packet_violation_warning",
    description: "This is sent when the client detects a malformed packet",
  },
  motion_prediction_hints: {
    id: 157,
    name: "motion_prediction_hints",
    description:
      "It is essentially a SetActionMotionPacket with a bool indicating if the actor was on the ground at the time the packet is sent or not.",
  },
  animate_entity: {
    id: 158,
    name: "animate_entity",
    description:
      "The AnimateEntityPacket is used to trigger a one - off animation on the client it is sent to.",
  },
  camera_shake: {
    id: 159,
    name: "camera_shake",
    description:
      "Used to control trigger camera shake movements on the client's player camera",
  },
  player_fog: {
    id: 160,
    name: "player_fog",
    description: "Player Fog Packet",
  },
  correct_player_move_prediction: {
    id: 161,
    name: "correct_player_move_prediction",
    description:
      "Sent to a player when their simulation of movement mismatches enough from the server that it wants to correct the client.",
  },
  item_registry: {
    id: 162,
    name: "item_registry",
    description: "Item data from the server. Contains component information.",
  },
  filter_text_packet: {
    id: undefined,
    name: "filter_text_packet",
    description: undefined,
  },
  debug_renderer: {
    id: undefined,
    name: "debug_renderer",
    description: undefined,
  },
  sync_entity_property: {
    id: undefined,
    name: "sync_entity_property",
    description: undefined,
  },
  add_volume_entity: {
    id: 166,
    name: "add_volume_entity",
    description:
      "Sends a volume entity's definition and components from server to client.",
  },
  remove_volume_entity: {
    id: 167,
    name: "remove_volume_entity",
    description: "Sends a volume entity to be removed from server to client.",
  },
  simulation_type: {
    id: 168,
    name: "simulation_type",
    description:
      "Sent from the server to the client when setting the simulation type for toolbox mode. (Not yet suported)",
  },
  npc_dialogue: {
    id: 169,
    name: "npc_dialogue",
    description:
      "Sent from the server to client when remote firing an NPC dialogue window for a client",
  },
  edu_uri_resource_packet: {
    id: undefined,
    name: "edu_uri_resource_packet",
    description: undefined,
  },
  create_photo: {
    id: 171,
    name: "create_photo",
    description:
      "Players now have the possibility to export photos from their portfolios into photo items in their inventory. EDU.",
  },
  update_subchunk_blocks: {
    id: undefined,
    name: "update_subchunk_blocks",
    description: undefined,
  },
  photo_info_request: {
    id: undefined,
    name: "photo_info_request",
    description: undefined,
  },
  subchunk: {
    id: undefined,
    name: "subchunk",
    description: undefined,
  },
  subchunk_request: {
    id: undefined,
    name: "subchunk_request",
    description: undefined,
  },
  client_start_item_cooldown: {
    id: undefined,
    name: "client_start_item_cooldown",
    description: undefined,
  },
  script_message: {
    id: 177,
    name: "script_message",
    description: "Used to send custom messages between client and server.",
  },
  code_builder_source: {
    id: 178,
    name: "code_builder_source",
    description:
      "This is EDU exclusive, used in getInterface() of WebviewSystem",
  },
  ticking_areas_load_status: {
    id: 179,
    name: "ticking_areas_load_status",
    description:
      "Used to inform the client that the server is waiting for ticking areas to finish preloading.",
  },
  dimension_data: {
    id: undefined,
    name: "dimension_data",
    description: undefined,
  },
  agent_action: {
    id: undefined,
    name: "agent_action",
    description: undefined,
  },
  change_mob_property: {
    id: 182,
    name: "change_mob_property",
    description: "packet containing data for changing mob property",
  },
  lesson_progress: {
    id: 183,
    name: "lesson_progress",
    description: "Lesson Progress",
  },
  request_ability: {
    id: 184,
    name: "request_ability",
    description:
      "Sent from client to server. Used to request an ability change.",
  },
  request_permissions: {
    id: 185,
    name: "request_permissions",
    description:
      "Sent from client to server. Used to request a new Permissions Levels.",
  },
  toast_request: {
    id: 186,
    name: "toast_request",
    description: "Pushes a UI toast message to be displayed by the client",
  },
  update_abilities: {
    id: undefined,
    name: "update_abilities",
    description: undefined,
  },
  update_adventure_settings: {
    id: 188,
    name: "update_adventure_settings",
    description: "UpdateAdventureSettingsPacket",
  },
  death_info: {
    id: 189,
    name: "death_info",
    description:
      "Sent from the server to client when player dies (Level::onPlayerDeath).",
  },
  editor_network: {
    id: 190,
    name: "editor_network",
    description:
      "General use Editor specific packet - carries a payload of whatever serialized data that the individual IEditorNetworkPayload generates.",
  },
  feature_registry: {
    id: 191,
    name: "feature_registry",
    description:
      "This is the packet that tracks the active feature registry data from the server so that client can place the features themselves.",
  },
  server_stats: {
    id: 192,
    name: "server_stats",
    description:
      "Used to send performance and other valuable stats back to the client",
  },
  request_network_settings: {
    id: 193,
    name: "request_network_settings",
    description:
      "Requests tunable options from host to client (compression threshold and algorithm).",
  },
  game_test_request: {
    id: 194,
    name: "game_test_request",
    description: "Internal Text Packet",
  },
  game_test_results: {
    id: 195,
    name: "game_test_results",
    description: "Game Test Results Packet",
  },
  update_client_input_locks: {
    id: 196,
    name: "update_client_input_locks",
    description: "UpdateClientInputLocksPacket",
  },
  client_cheat_ability: {
    id: undefined,
    name: "client_cheat_ability",
    description: undefined,
  },
  camera_presets: {
    id: 198,
    name: "camera_presets",
    description: "Used to sync CameraPresets data from server to clients.",
  },
  unlocked_recipes: {
    id: 199,
    name: "unlocked_recipes",
    description:
      "Sent from server to client, for all previously unlocked recipes on load and for any newly unlocked recipes during gameplay.",
  },
  camera_instruction: {
    id: 300,
    name: "camera_instruction",
    description:
      "Used to send a CameraInstruction from the server to the specified clients.",
  },
  compressed_biome_definitions: {
    id: undefined,
    name: "compressed_biome_definitions",
    description: undefined,
  },
  trim_data: {
    id: undefined,
    name: "trim_data",
    description: undefined,
  },
  open_sign: {
    id: 303,
    name: "open_sign",
    description:
      "Sent from the server so that the client knows to open the sign screen.",
  },
  agent_animation: {
    id: 304,
    name: "agent_animation",
    description:
      "Broadcasted to other players when an Agent performs an animation so it gets properly replicated.",
  },
  refresh_entitlements: {
    id: 305,
    name: "refresh_entitlements",
    description: "Refresh Entitlements",
  },
  toggle_crafter_slot_request: {
    id: undefined,
    name: "toggle_crafter_slot_request",
    description: undefined,
  },
  set_player_inventory_options: {
    id: 307,
    name: "set_player_inventory_options",
    description: "SetPlayerInventoryOptionsPacket",
  },
  set_hud: {
    id: 308,
    name: "set_hud",
    description:
      "This packet is only used via the set hud command. This is for 3rd party content.",
  },
  award_achievement: {
    id: 309,
    name: "award_achievement",
    description: "Contains the ID of the achievement to award",
  },
  server_post_move: {
    id: undefined,
    name: "server_post_move",
    description: undefined,
  },
  clientbound_close_form: {
    id: 310,
    name: "clientbound_close_form",
    description:
      "Sent from the server to client to force close all server forms on the stack and return to the HUD screen.",
  },
  serverbound_loading_screen: {
    id: 312,
    name: "serverbound_loading_screen",
    description:
      "Sent from the client to the server to message to the server about the state of the loading screen.",
  },
  jigsaw_structure_data: {
    id: 313,
    name: "jigsaw_structure_data",
    description:
      "Jigsaw Structure data used by client jigsaw structure worldgen. This packet contains a copy of the behavior pack jigsaw structure rules.",
  },
  current_structure_feature: {
    id: 314,
    name: "current_structure_feature",
    description:
      "Informs the client of which Structure Feature they are currently occupying.",
  },
  serverbound_diagnostics: {
    id: 315,
    name: "serverbound_diagnostics",
    description:
      "Sent from the client to the server IF ProfilerLite is enabled AND the creator toggle for additional client telemetry is enabled AND new telemetry data is ready (every 500 ms).",
  },
  camera_aim_assist: {
    id: 316,
    name: "camera_aim_assist",
    description: "CameraAimAssist",
  },
  container_registry_cleanup: {
    id: 317,
    name: "container_registry_cleanup",
    description:
      "This is used to trigger a clientside cleanup of the dynamic container registry.",
  },
  movement_effect: {
    id: 318,
    name: "movement_effect",
    description:
      "These packets are sent to the client to update specific MovementEffects",
  },
  set_movement_authority: {
    id: undefined,
    name: "set_movement_authority",
    description: undefined,
  },
  camera_aim_assist_presets: {
    id: 320,
    name: "camera_aim_assist_presets",
    description:
      "Camera aim-assist registry presets/categories data sent from the server to clients.",
  },
  client_camera_aim_assist: {
    id: 321,
    name: "client_camera_aim_assist",
    description: "Client-side activation of aim-assist",
  },
  client_movement_prediction_sync: {
    id: undefined,
    name: "client_movement_prediction_sync",
    description: undefined,
  },
  update_client_options: {
    id: 323,
    name: "update_client_options",
    description: "Sync the player's options (mostly settings) to the server.",
  },
  player_video_capture: {
    id: undefined,
    name: "player_video_capture",
    description: undefined,
  },
  player_update_entity_overrides: {
    id: undefined,
    name: "player_update_entity_overrides",
    description: undefined,
  },
  player_location: {
    id: undefined,
    name: "player_location",
    description: undefined,
  },
  clientbound_controls_scheme: {
    id: undefined,
    name: "clientbound_controls_scheme",
    description: undefined,
  },
  server_script_debug_drawer: {
    id: undefined,
    name: "server_script_debug_drawer",
    description: undefined,
  },
  serverbound_pack_setting_change: {
    id: 329,
    name: "serverbound_pack_setting_change",
    description:
      "Sent from the client to the server when players change Pack Settings (pack UI).",
  },
  graphics_override_parameter: {
    id: 331,
    name: "graphics_override_parameter",
    description:
      "Sent from the server to the client when a server script changes the rendering settings",
  },
};
