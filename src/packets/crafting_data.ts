export interface CraftingDataPacket {
  recipes: Buffer[];
  potion_type_recipes: Buffer[];
  potion_container_recipes: Buffer[];
  material_reducers: Buffer[];
  clear_recipes: boolean;
}
