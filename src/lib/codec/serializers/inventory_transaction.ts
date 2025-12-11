import {
  InventoryTransactionPacket,
  TransactionAction,
  TransactionActionType,
  TransactionData,
  TransactionLegacy,
  TransactionReleaseData,
  TransactionSourceType,
  TransactionTrigger,
  TransactionType,
  TransactionUseItemData,
  TransactionUseOnEntityData,
  ItemStack,
} from "../../../packets/inventory_transaction";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const TYPE_MAP: Record<number, TransactionType> = {
  0: "normal",
  1: "inventory_mismatch",
  2: "item_use",
  3: "item_use_on_entity",
  4: "item_release",
};
const TYPE_INV: Record<string, number> = {
  normal: 0,
  inventory_mismatch: 1,
  item_use: 2,
  item_use_on_entity: 3,
  item_release: 4,
};

const ACTION_TYPE_INV: Record<string, number> = {
  click_block: 0,
  click_air: 1,
  break_block: 2,
  attack: 3,
};
const TRIGGER_INV: Record<string, number> = {
  unknown: 0,
  player_input: 1,
  simulation_tick: 2,
};
const CLIENT_PRED_INV: Record<string, number> = {
  failure: 0,
  success: 1,
};
const SOURCE_INV: Record<string, number> = {
  container: 0,
  global: 1,
  world_interaction: 2,
  creative: 3,
  craft_slot: 100,
  craft: 99999,
};
const USE_ON_ENTITY_INV: Record<string, number> = {
  interact: 0,
  attack: 1,
};
const RELEASE_INV: Record<string, number> = {
  release: 0,
  consume: 1,
};

function writeBlockCoords(buf: BufferWriter, pos: { x: number; y: number; z: number }) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}
function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

function writeVec3(buf: BufferWriter, v: { x: number; y: number; z: number }) {
  buf.writeFloatLE(v.x);
  buf.writeFloatLE(v.y);
  buf.writeFloatLE(v.z);
}
function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

function writeItem(buf: BufferWriter, item: ItemStack) {
  buf.writeZigZag32(item.network_id);
  if (item.network_id === 0) return;
  buf.writeUInt16LE(item.count ?? 0);
  buf.writeVarInt(item.metadata ?? 0);
  buf.writeZigZag32(item.block_runtime_id ?? 0);
  const extra = item.extra ?? Buffer.alloc(0);
  buf.writeVarInt(extra.length);
  buf.writeBuffer(extra);
}

function readItem(buf: BufferReader): ItemStack {
  const network_id = buf.readZigZag32();
  if (network_id === 0) return { network_id };
  const count = buf.readUInt16LE();
  const metadata = buf.readVarInt();
  const block_runtime_id = buf.readZigZag32();
  const extraLen = buf.readVarInt();
  const extra = buf.readBytes(extraLen);
  return { network_id, count, metadata, block_runtime_id, extra };
}

function writeLegacy(buf: BufferWriter, legacy: TransactionLegacy) {
  buf.writeZigZag32(legacy.legacy_request_id);
  if (legacy.legacy_request_id !== 0) {
    const tx = legacy.legacy_transactions ?? [];
    buf.writeVarInt(tx.length);
    for (const t of tx) {
      buf.writeUInt8(t.container_id);
      buf.writeVarInt(t.changed_slots.length);
      for (const slot of t.changed_slots) {
        buf.writeUInt8(slot);
      }
    }
  }
}

function readLegacy(buf: BufferReader): TransactionLegacy {
  const legacy_request_id = buf.readZigZag32();
  let legacy_transactions;
  if (legacy_request_id !== 0) {
    const len = buf.readVarInt();
    legacy_transactions = [];
    for (let i = 0; i < len; i++) {
      const container_id = buf.readUInt8();
      const slotsLen = buf.readVarInt();
      const changed_slots: number[] = [];
      for (let j = 0; j < slotsLen; j++) changed_slots.push(buf.readUInt8());
      legacy_transactions.push({ container_id, changed_slots });
    }
  }
  return { legacy_request_id, legacy_transactions };
}

function writeActions(buf: BufferWriter, actions: TransactionAction[]) {
  buf.writeVarInt(actions.length);
  for (const act of actions) {
    const sourceId = typeof act.source_type === "number" ? act.source_type : SOURCE_INV[act.source_type] ?? 0;
    buf.writeVarInt(sourceId);
    switch (sourceId) {
      case 0:
        buf.writeVarInt(act.inventory_id ?? 0);
        break;
      case 99999:
      case 100:
        buf.writeVarInt(act.action ?? 0);
        break;
      case 2:
        buf.writeVarInt(act.flags ?? 0);
        break;
    }
    buf.writeVarInt(act.slot);
    writeItem(buf, act.old_item);
    writeItem(buf, act.new_item);
  }
}

function readActions(buf: BufferReader): TransactionAction[] {
  const len = buf.readVarInt();
  const out: TransactionAction[] = [];
  for (let i = 0; i < len; i++) {
    const source_type_id = buf.readVarInt();
    let inventory_id;
    let action;
    let flags;
    switch (source_type_id) {
      case 0:
        inventory_id = buf.readVarInt();
        break;
      case 99999:
      case 100:
        action = buf.readVarInt();
        break;
      case 2:
        flags = buf.readVarInt();
        break;
    }
    const slot = buf.readVarInt();
    const old_item = readItem(buf);
    const new_item = readItem(buf);
    out.push({
      source_type: source_type_id,
      slot,
      old_item,
      new_item,
      inventory_id,
      action,
      flags,
    });
  }
  return out;
}

function writeTransactionData(buf: BufferWriter, typeId: number, data?: TransactionData) {
  if (!data) return;
  switch (typeId) {
    case 2: {
      const d = data as TransactionUseItemData;
      buf.writeVarInt(typeof d.action_type === "number" ? d.action_type : ACTION_TYPE_INV[d.action_type] ?? 0);
      buf.writeVarInt(typeof d.trigger_type === "number" ? d.trigger_type : TRIGGER_INV[d.trigger_type] ?? 0);
      writeBlockCoords(buf, d.block_position);
      buf.writeZigZag32(d.face);
      buf.writeZigZag32(d.hotbar_slot);
      writeItem(buf, d.held_item);
      writeVec3(buf, d.player_pos);
      writeVec3(buf, d.click_pos);
      buf.writeVarInt(d.block_runtime_id);
      buf.writeVarInt(typeof d.client_prediction === "number" ? d.client_prediction : CLIENT_PRED_INV[d.client_prediction] ?? 0);
      break;
    }
    case 3: {
      const d = data as TransactionUseOnEntityData;
      buf.writeVarInt64(d.entity_runtime_id);
      buf.writeVarInt(typeof d.action_type === "number" ? d.action_type : USE_ON_ENTITY_INV[d.action_type] ?? 0);
      buf.writeZigZag32(d.hotbar_slot);
      writeItem(buf, d.held_item);
      writeVec3(buf, d.player_pos);
      writeVec3(buf, d.click_pos);
      break;
    }
    case 4: {
      const d = data as TransactionReleaseData;
      buf.writeVarInt(typeof d.action_type === "number" ? d.action_type : RELEASE_INV[d.action_type] ?? 0);
      buf.writeZigZag32(d.hotbar_slot);
      writeItem(buf, d.held_item);
      writeVec3(buf, d.head_pos);
      break;
    }
  }
}

function readTransactionData(buf: BufferReader, typeId: number): TransactionData {
  switch (typeId) {
    case 2: {
      const action_type = buf.readVarInt();
      const trigger_type = buf.readVarInt();
      const block_position = readBlockCoords(buf);
      const face = buf.readZigZag32();
      const hotbar_slot = buf.readZigZag32();
      const held_item = readItem(buf);
      const player_pos = readVec3(buf);
      const click_pos = readVec3(buf);
      const block_runtime_id = buf.readVarInt();
      const client_prediction = buf.readVarInt();
      return { action_type, trigger_type, block_position, face, hotbar_slot, held_item, player_pos, click_pos, block_runtime_id, client_prediction } as TransactionUseItemData;
    }
    case 3: {
      const entity_runtime_id = buf.readVarInt64();
      const action_type = buf.readVarInt();
      const hotbar_slot = buf.readZigZag32();
      const held_item = readItem(buf);
      const player_pos = readVec3(buf);
      const click_pos = readVec3(buf);
      return { entity_runtime_id, action_type, hotbar_slot, held_item, player_pos, click_pos } as TransactionUseOnEntityData;
    }
    case 4: {
      const action_type = buf.readVarInt();
      const hotbar_slot = buf.readZigZag32();
      const held_item = readItem(buf);
      const head_pos = readVec3(buf);
      return { action_type, hotbar_slot, held_item, head_pos } as TransactionReleaseData;
    }
    default:
      return undefined;
  }
}

export class InventoryTransactionSerializer implements PacketSerializer<InventoryTransactionPacket> {
  encode(buf: BufferWriter, p: InventoryTransactionPacket) {
    writeLegacy(buf, p.legacy);
    const typeId = typeof p.transaction_type === "number" ? p.transaction_type : TYPE_INV[p.transaction_type] ?? 0;
    buf.writeVarInt(typeId);
    writeActions(buf, p.actions);
    writeTransactionData(buf, typeId, p.transaction_data);
  }

  decode(buf: BufferReader): InventoryTransactionPacket {
    const legacy = readLegacy(buf);
    const typeId = buf.readVarInt();
    const transaction_type = TYPE_MAP[typeId] ?? typeId;
    const actions = readActions(buf);
    const transaction_data = readTransactionData(buf, typeId);
    return { legacy, transaction_type, actions, transaction_data };
  }
}
