import { SetLocalPlayerAsInitializedPacket } from "../../../packets/set_local_player_as_initialized";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetLocalPlayerAsInitializedSerializer implements PacketSerializer<SetLocalPlayerAsInitializedPacket> {
  encode(buf: BufferWriter, p: SetLocalPlayerAsInitializedPacket) {
    buf.writeVarInt64(p.runtime_entity_id);
  }
  decode(buf: BufferReader): SetLocalPlayerAsInitializedPacket {
    return { runtime_entity_id: buf.readVarInt64() };
  }
}
