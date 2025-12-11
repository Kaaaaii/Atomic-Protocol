import { InventoryContentPacket } from "../../../packets/inventory_content";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";
import { readItem, writeItem } from "./shared_items";

export class InventoryContentSerializer implements PacketSerializer<InventoryContentPacket> {
  encode(buf: BufferWriter, p: InventoryContentPacket) {
    buf.writeVarInt(typeof p.window_id === "number" ? p.window_id : 0);
    buf.writeVarInt(p.input.length);
    for (const item of p.input) writeItem(buf, item);
    buf.writeVarInt(typeof p.container === "number" ? p.container : 0);
    writeItem(buf, p.storage_item);
  }

  decode(buf: BufferReader): InventoryContentPacket {
    const window_id = buf.readVarInt();
    const len = buf.readVarInt();
    const input = [];
    for (let i = 0; i < len; i++) input.push(readItem(buf));
    const container = buf.readVarInt();
    const storage_item = readItem(buf);
    return { window_id, input, container, storage_item };
  }
}
