import { SetDifficultyPacket } from "../../../packets/set_difficulty";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetDifficultySerializer implements PacketSerializer<SetDifficultyPacket> {
  encode(buf: BufferWriter, p: SetDifficultyPacket) {
    buf.writeVarInt(p.difficulty);
  }

  decode(buf: BufferReader): SetDifficultyPacket {
    return { difficulty: buf.readVarInt() };
  }
}
