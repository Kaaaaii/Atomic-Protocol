import { ItemStackRequestPacket } from "../../../packets/item_stack_request";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ItemStackRequestSerializer implements PacketSerializer<ItemStackRequestPacket> {
  encode(buf: BufferWriter, p: ItemStackRequestPacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }
  decode(buf: BufferReader): ItemStackRequestPacket {
    return { raw: buf.readBytes(buf.remaining()) };
  }
}
