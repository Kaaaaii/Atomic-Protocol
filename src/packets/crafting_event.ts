import { ItemStack } from "./inventory_transaction";

export type RecipeType = "inventory" | "crafting" | "workbench" | number;

export interface CraftingEventPacket {
  window_id: string | number;
  recipe_type: RecipeType;
  recipe_id: string;
  input: ItemStack[];
  result: ItemStack[];
}
