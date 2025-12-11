import { ItemStack } from "./inventory_transaction";

export interface MobArmorEquipmentPacket {
  runtime_entity_id: bigint;
  helmet: ItemStack;
  chestplate: ItemStack;
  leggings: ItemStack;
  boots: ItemStack;
  body?: ItemStack;
}
