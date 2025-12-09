/**
 * AnimatePacket
 * Unknown packet ID
 * No description
 */

export interface AnimatePacket {
  action_id:
    | "none"
    | "swing_arm"
    | "unknown"
    | "wake_up"
    | "critical_hit"
    | "magic_critical_hit"
    | "row_right"
    | "row_left";
  runtime_entity_id: Varint64;
  data: number;
  swing_source: number;
}

export type Varint64 = any;

export const AnimatePacketInfo: import("./metadata").PacketMetadata = {
  id: undefined,
  name: "animate",
  description: undefined,
};
