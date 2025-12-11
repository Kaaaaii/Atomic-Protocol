import { CraftingEventPacket, RecipeType } from "../../../packets/crafting_event";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";
import { readItem, writeItem } from "./shared_items";

const RECIPE_TYPE_INV: Record<string, number> = { inventory: 0, crafting: 1, workbench: 2 };
const RECIPE_TYPE_MAP: RecipeType[] = ["inventory", "crafting", "workbench"];

export class CraftingEventSerializer implements PacketSerializer<CraftingEventPacket> {
  encode(buf: BufferWriter, p: CraftingEventPacket) {
    buf.writeUInt8(typeof p.window_id === "number" ? p.window_id : 0);
    buf.writeZigZag32(typeof p.recipe_type === "number" ? p.recipe_type : RECIPE_TYPE_INV[p.recipe_type] ?? 0);
    buf.writeUuid(p.recipe_id);
    buf.writeVarInt(p.input.length);
    for (const it of p.input) writeItem(buf, it);
    buf.writeVarInt(p.result.length);
    for (const it of p.result) writeItem(buf, it);
  }

  decode(buf: BufferReader): CraftingEventPacket {
    const window_id = buf.readUInt8();
    const rt = buf.readZigZag32();
    const recipe_type = RECIPE_TYPE_MAP[rt] ?? rt;
    const recipe_id = buf.readUuid();
    const inLen = buf.readVarInt();
    const input = [];
    for (let i = 0; i < inLen; i++) input.push(readItem(buf));
    const outLen = buf.readVarInt();
    const result = [];
    for (let i = 0; i < outLen; i++) result.push(readItem(buf));
    return { window_id, recipe_type, recipe_id, input, result };
  }
}
