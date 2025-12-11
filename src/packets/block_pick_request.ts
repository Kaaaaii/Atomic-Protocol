import { BlockCoordinates } from "./update_block";

export interface BlockPickRequestPacket {
  x: number;
  y: number;
  z: number;
  add_user_data: boolean;
}
