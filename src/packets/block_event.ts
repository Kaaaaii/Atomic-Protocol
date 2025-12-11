import { BlockCoordinates } from "./update_block";

export type BlockEventType = "sound" | "change_state" | number;

export interface BlockEventPacket {
  position: BlockCoordinates;
  type: BlockEventType;
  data: number;
}
