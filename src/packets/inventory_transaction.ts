import { BlockCoordinates } from "./update_block";

export type TransactionType = "normal" | "inventory_mismatch" | "item_use" | "item_use_on_entity" | "item_release" | number;
export type TransactionActionType = "click_block" | "click_air" | "break_block" | "attack" | number;
export type TransactionTrigger = "unknown" | "player_input" | "simulation_tick" | number;
export type TransactionSourceType = "container" | "global" | "world_interaction" | "creative" | "craft_slot" | "craft" | number;
export type TransactionUseOnEntityAction = "interact" | "attack" | number;
export type TransactionReleaseAction = "release" | "consume" | number;

export interface ItemStack {
  network_id: number;
  count?: number;
  metadata?: number;
  block_runtime_id?: number;
  extra?: Buffer;
}

export interface TransactionAction {
  source_type: TransactionSourceType;
  slot: number;
  old_item: ItemStack;
  new_item: ItemStack;
  inventory_id?: number;
  action?: number;
  flags?: number;
}

export interface TransactionLegacyChange {
  container_id: number;
  changed_slots: number[];
}

export interface TransactionLegacy {
  legacy_request_id: number;
  legacy_transactions?: TransactionLegacyChange[];
}

export interface TransactionUseItemData {
  action_type: TransactionActionType;
  trigger_type: TransactionTrigger;
  block_position: BlockCoordinates;
  face: number;
  hotbar_slot: number;
  held_item: ItemStack;
  player_pos: { x: number; y: number; z: number };
  click_pos: { x: number; y: number; z: number };
  block_runtime_id: number;
  client_prediction: "failure" | "success" | number;
}

export interface TransactionUseOnEntityData {
  entity_runtime_id: bigint;
  action_type: TransactionUseOnEntityAction;
  hotbar_slot: number;
  held_item: ItemStack;
  player_pos: { x: number; y: number; z: number };
  click_pos: { x: number; y: number; z: number };
}

export interface TransactionReleaseData {
  action_type: TransactionReleaseAction;
  hotbar_slot: number;
  held_item: ItemStack;
  head_pos: { x: number; y: number; z: number };
}

export type TransactionData =
  | TransactionUseItemData
  | TransactionUseOnEntityData
  | TransactionReleaseData
  | undefined;

export interface InventoryTransactionPacket {
  legacy: TransactionLegacy;
  transaction_type: TransactionType;
  actions: TransactionAction[];
  transaction_data?: TransactionData;
}
