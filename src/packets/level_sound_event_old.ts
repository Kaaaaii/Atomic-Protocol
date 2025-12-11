export interface LevelSoundEventOldPacket {
  sound_id: number;
  position: { x: number; y: number; z: number };
  block_id: number;
  entity_type: number;
  is_baby_mob: boolean;
  is_global: boolean;
}
