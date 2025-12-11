export type MobEffectEvent = "add" | "update" | "remove" | number;

export interface MobEffectPacket {
  runtime_entity_id: bigint;
  event_id: MobEffectEvent;
  effect_id: number;
  amplifier: number;
  particles: boolean;
  duration: number;
  tick: bigint;
  ambient: boolean;
}
