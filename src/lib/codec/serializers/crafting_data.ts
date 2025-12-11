import { CraftingDataPacket } from "../../../packets/crafting_data";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

// Crafting recipes are complex; we treat recipe blobs as raw for now to keep wire alignment.
function writeRecipeArray(buf: BufferWriter, arr: Buffer[]) {
  buf.writeVarInt(arr.length);
  for (const b of arr) {
    buf.writeVarInt(b.length);
    buf.writeBuffer(b);
  }
}

function readRecipeArray(buf: BufferReader) {
  const len = buf.readVarInt();
  const out: Buffer[] = [];
  for (let i = 0; i < len; i++) {
    const size = buf.readVarInt();
    out.push(buf.readBytes(size));
  }
  return out;
}

export class CraftingDataSerializer implements PacketSerializer<CraftingDataPacket> {
  encode(buf: BufferWriter, p: CraftingDataPacket) {
    writeRecipeArray(buf, p.recipes);
    writeRecipeArray(buf, p.potion_type_recipes);
    writeRecipeArray(buf, p.potion_container_recipes);
    writeRecipeArray(buf, p.material_reducers);
    buf.writeBool(p.clear_recipes);
  }

  decode(buf: BufferReader): CraftingDataPacket {
    const recipes = readRecipeArray(buf);
    const potion_type_recipes = readRecipeArray(buf);
    const potion_container_recipes = readRecipeArray(buf);
    const material_reducers = readRecipeArray(buf);
    const clear_recipes = buf.readBool();
    return { recipes, potion_type_recipes, potion_container_recipes, material_reducers, clear_recipes };
  }
}
