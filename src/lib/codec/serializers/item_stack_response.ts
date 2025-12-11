import { ItemStackResponsePacket } from "../../../packets/item_stack_response";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ItemStackResponseSerializer implements PacketSerializer<ItemStackResponsePacket> {
  encode(buf: BufferWriter, p: ItemStackResponsePacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }
  decode(buf: BufferReader): ItemStackResponsePacket {
    return { raw: buf.readBytes(buf.remaining()) };
  }
}
