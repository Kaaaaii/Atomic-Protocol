import { GuiDataPickItemPacket } from "../../../packets/gui_data_pick_item";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class GuiDataPickItemSerializer implements PacketSerializer<GuiDataPickItemPacket> {
  encode(buf: BufferWriter, p: GuiDataPickItemPacket) {
    buf.writeString(p.item_name);
    buf.writeString(p.item_effects);
    buf.writeInt32LE(p.hotbar_slot);
  }

  decode(buf: BufferReader): GuiDataPickItemPacket {
    const item_name = buf.readString();
    const item_effects = buf.readString();
    const hotbar_slot = buf.readInt32LE();
    return { item_name, item_effects, hotbar_slot };
  }
}
