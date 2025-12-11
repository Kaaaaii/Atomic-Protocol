import { RespawnPacket } from "../../../packets/respawn";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class RespawnSerializer implements PacketSerializer<RespawnPacket> {
  encode(buf: BufferWriter, p: RespawnPacket) {
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeUInt8(p.state);
    buf.writeVarInt64(p.runtime_entity_id);
  }

  decode(buf: BufferReader): RespawnPacket {
    const position = { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
    const state = buf.readUInt8();
    const runtime_entity_id = buf.readVarInt64();
    return { position, state, runtime_entity_id };
  }
}
