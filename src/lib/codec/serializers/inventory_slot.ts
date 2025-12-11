import { InventorySlotPacket } from "../../../packets/inventory_slot";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";
import { readItem, writeItem } from "./shared_items";

export class InventorySlotSerializer implements PacketSerializer<InventorySlotPacket> {
  encode(buf: BufferWriter, p: InventorySlotPacket) {
    buf.writeVarInt(typeof p.window_id === "number" ? p.window_id : 0);
    buf.writeVarInt(p.slot);
    buf.writeVarInt(typeof p.container === "number" ? p.container : 0);
    writeItem(buf, p.storage_item);
    writeItem(buf, p.item);
  }

  decode(buf: BufferReader): InventorySlotPacket {
    const window_id = buf.readVarInt();
    const slot = buf.readVarInt();
    const container = buf.readVarInt();
    const storage_item = readItem(buf);
    const item = readItem(buf);
    return { window_id, slot, container, storage_item, item };
  }
}
