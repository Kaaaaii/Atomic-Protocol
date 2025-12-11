import { CompletedUsingItemPacket, UseMethod } from "../../../packets/completed_using_item";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const USE_METHODS: UseMethod[] = [
  "equip_armor",
  "eat",
  "attack",
  "consume",
  "throw",
  "shoot",
  "place",
  "fill_bottle",
  "fill_bucket",
  "pour_bucket",
  "use_tool",
  "interact",
  "retrieved",
  "dyed",
  "traded",
  "brushing_completed",
  "opened_vault",
];

const USE_INV: Record<string, number> = USE_METHODS.reduce(
  (acc, method, idx) => Object.assign(acc, { [String(method)]: idx }),
  {} as Record<string, number>,
);

export class CompletedUsingItemSerializer implements PacketSerializer<CompletedUsingItemPacket> {
  encode(buf: BufferWriter, p: CompletedUsingItemPacket) {
    buf.writeInt16LE(p.used_item_id);
    const methodId = typeof p.use_method === "number" ? p.use_method : USE_INV[p.use_method] ?? 0;
    buf.writeInt32LE(methodId);
  }

  decode(buf: BufferReader): CompletedUsingItemPacket {
    const used_item_id = buf.readInt16LE();
    const methodId = buf.readInt32LE();
    const use_method = USE_METHODS[methodId] ?? methodId;
    return { used_item_id, use_method };
  }
}
