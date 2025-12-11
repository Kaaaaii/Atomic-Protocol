import { BlockCoordinates } from "./update_block";

export interface AnvilDamagePacket {
  damage: number;
  position: BlockCoordinates;
}
