import { Packet } from "../lib/codec/Packet";

export class CommandRequestPacket extends Packet {
  id = 77;
  command!: string;
  uuid!: string;
  requestId!: string;
  playerEntityId!: bigint;
  internal!: boolean;
}