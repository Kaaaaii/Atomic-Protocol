import { ItemStack } from "../../../packets/inventory_transaction";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";

export function writeItem(buf: BufferWriter, item: ItemStack) {
  buf.writeZigZag32(item.network_id);
  if (item.network_id === 0) return;
  buf.writeUInt16LE(item.count ?? 0);
  buf.writeVarInt(item.metadata ?? 0);
  buf.writeZigZag32(item.block_runtime_id ?? 0);
  const extra = item.extra ?? Buffer.alloc(0);
  buf.writeVarInt(extra.length);
  buf.writeBuffer(extra);
}

export function readItem(buf: BufferReader): ItemStack {
  const network_id = buf.readZigZag32();
  if (network_id === 0) return { network_id };
  const count = buf.readUInt16LE();
  const metadata = buf.readVarInt();
  const block_runtime_id = buf.readZigZag32();
  const extraLen = buf.readVarInt();
  const extra = buf.readBytes(extraLen);
  return { network_id, count, metadata, block_runtime_id, extra };
}
