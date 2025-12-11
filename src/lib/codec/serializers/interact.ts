import { InteractPacket, InteractAction } from "../../../packets/interact";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const ACTIONS: Record<number, InteractAction> = {
  3: "leave_vehicle",
  4: "mouse_over_entity",
  5: "npc_open",
  6: "open_inventory",
};
const ACTION_INV: Record<string, number> = {
  leave_vehicle: 3,
  mouse_over_entity: 4,
  npc_open: 5,
  open_inventory: 6,
};

export class InteractSerializer implements PacketSerializer<InteractPacket> {
  encode(buf: BufferWriter, p: InteractPacket) {
    const actionId = typeof p.action_id === "number" ? p.action_id : ACTION_INV[p.action_id] ?? 0;
    buf.writeUInt8(actionId);
    buf.writeVarInt64(p.target_entity_id);
    if (actionId === 3 || actionId === 4) {
      const pos = p.position ?? { x: 0, y: 0, z: 0 };
      buf.writeFloatLE(pos.x);
      buf.writeFloatLE(pos.y);
      buf.writeFloatLE(pos.z);
    }
  }

  decode(buf: BufferReader): InteractPacket {
    const actionId = buf.readUInt8();
    const action_id = ACTIONS[actionId] ?? actionId;
    const target_entity_id = buf.readVarInt64();
    let position;
    if (actionId === 3 || actionId === 4) {
      position = { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
    }
    return { action_id, target_entity_id, position };
  }
}
