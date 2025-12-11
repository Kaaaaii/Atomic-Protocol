import { RequestAbilityPacket, AbilityType, AbilityValueType } from "../../../packets/request_ability";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const ABILITY_MAP: AbilityType[] = [
  "build",
  "mine",
  "doors_and_switches",
  "open_containers",
  "attack_players",
  "attack_mobs",
  "operator_commands",
  "teleport",
  "invulnerable",
  "flying",
  "may_fly",
  "instant_build",
  "lightning",
  "fly_speed",
  "walk_speed",
  "muted",
  "world_builder",
  "no_clip",
  "ability_count",
];

const VALUE_TYPE_MAP: AbilityValueType[] = [0, "bool", "float"];

const ABILITY_INV: Record<string, number> = ABILITY_MAP.reduce(
  (acc, key, idx) => Object.assign(acc, { [String(key)]: idx }),
  {} as Record<string, number>,
);

export class RequestAbilitySerializer implements PacketSerializer<RequestAbilityPacket> {
  encode(buf: BufferWriter, p: RequestAbilityPacket) {
    const abilityId =
      typeof p.ability === "number" ? p.ability : ABILITY_INV[p.ability] ?? 0;
    const valueType =
      typeof p.value_type === "number"
        ? p.value_type
        : VALUE_TYPE_MAP.indexOf(p.value_type) >= 0
        ? VALUE_TYPE_MAP.indexOf(p.value_type)
        : 0;
    buf.writeZigZag32(abilityId);
    buf.writeUInt8(valueType);
    buf.writeBool(p.bool_value);
    buf.writeFloatLE(p.float_val);
  }

  decode(buf: BufferReader): RequestAbilityPacket {
    const abilityId = buf.readZigZag32();
    const ability = ABILITY_MAP[abilityId] ?? abilityId;
    const valueTypeId = buf.readUInt8();
    const value_type = VALUE_TYPE_MAP[valueTypeId] ?? valueTypeId;
    const bool_value = buf.readBool();
    const float_val = buf.readFloatLE();
    return { ability, value_type, bool_value, float_val };
  }
}
