export interface ArmorDamageEntry {
  armor_slot: string | number;
  damage: number;
}

export interface PlayerArmorDamagePacket {
  entries: ArmorDamageEntry[];
}
