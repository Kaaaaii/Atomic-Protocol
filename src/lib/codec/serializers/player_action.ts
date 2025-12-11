import { PlayerActionPacket, PlayerActionType } from "../../../packets/player_action";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const ACTION_INV: Record<string, number> = {
  start_break: 0,
  abort_break: 1,
  stop_break: 2,
  get_updated_block: 3,
  drop_item: 4,
  start_sleeping: 5,
  stop_sleeping: 6,
  respawn: 7,
  jump: 8,
  start_sprint: 9,
  stop_sprint: 10,
  start_sneak: 11,
  stop_sneak: 12,
  creative_player_destroy_block: 13,
  dimension_change_ack: 14,
  start_glide: 15,
  stop_glide: 16,
  build_denied: 17,
  crack_break: 18,
  change_skin: 19,
  set_enchatnment_seed: 20,
  swimming: 21,
  stop_swimming: 22,
  start_spin_attack: 23,
  stop_spin_attack: 24,
  interact_block: 25,
  predict_break: 26,
  continue_break: 27,
  start_item_use_on: 28,
  stop_item_use_on: 29,
  handled_teleport: 30,
  missed_swing: 31,
  start_crawling: 32,
  stop_crawling: 33,
  start_flying: 34,
  stop_flying: 35,
  received_server_data: 36,
  start_using_item: 37,
};

const ACTION_MAP: PlayerActionType[] = [
  "start_break",
  "abort_break",
  "stop_break",
  "get_updated_block",
  "drop_item",
  "start_sleeping",
  "stop_sleeping",
  "respawn",
  "jump",
  "start_sprint",
  "stop_sprint",
  "start_sneak",
  "stop_sneak",
  "creative_player_destroy_block",
  "dimension_change_ack",
  "start_glide",
  "stop_glide",
  "build_denied",
  "crack_break",
  "change_skin",
  "set_enchatnment_seed",
  "swimming",
  "stop_swimming",
  "start_spin_attack",
  "stop_spin_attack",
  "interact_block",
  "predict_break",
  "continue_break",
  "start_item_use_on",
  "stop_item_use_on",
  "handled_teleport",
  "missed_swing",
  "start_crawling",
  "stop_crawling",
  "start_flying",
  "stop_flying",
  "received_server_data",
  "start_using_item",
];

function writeBlockCoords(buf: BufferWriter, pos: { x: number; y: number; z: number }) {
  buf.writeZigZag32(pos.x);
  buf.writeVarInt(pos.y);
  buf.writeZigZag32(pos.z);
}
function readBlockCoords(buf: BufferReader) {
  return { x: buf.readZigZag32(), y: buf.readVarInt(), z: buf.readZigZag32() };
}

export class PlayerActionSerializer implements PacketSerializer<PlayerActionPacket> {
  encode(buf: BufferWriter, p: PlayerActionPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
    const actionId = typeof p.action === "number" ? p.action : ACTION_INV[p.action] ?? 0;
    buf.writeZigZag32(actionId);
    writeBlockCoords(buf, p.position);
    writeBlockCoords(buf, p.result_position);
    buf.writeZigZag32(p.face);
  }

  decode(buf: BufferReader): PlayerActionPacket {
    const runtime_entity_id = buf.readVarInt64();
    const actionId = buf.readZigZag32();
    const action = ACTION_MAP[actionId] ?? actionId;
    const position = readBlockCoords(buf);
    const result_position = readBlockCoords(buf);
    const face = buf.readZigZag32();
    return { runtime_entity_id, action, position, result_position, face };
  }
}
