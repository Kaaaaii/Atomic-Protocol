import { ItemStack } from "./inventory_transaction";

export interface InventoryContentPacket {
  window_id: string | number;
  input: ItemStack[];
  container: number | string;
  storage_item: ItemStack;
}
