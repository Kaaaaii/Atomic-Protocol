import { ItemStack } from "./inventory_transaction";

export interface MobEquipmentPacket {
  runtime_entity_id: bigint;
  item: ItemStack;
  slot: number;
  selected_slot: number;
  window_id: number;
}
