import { BlockCoordinates } from "./update_block";

export interface BlockEntityDataPacket {
  position: BlockCoordinates;
  nbt: any;
}
