import { ItemStack } from "./inventory_transaction";

export interface InventorySlotPacket {
  window_id: string | number;
  slot: number;
  container: number | string;
  storage_item: ItemStack;
  item: ItemStack;
}
