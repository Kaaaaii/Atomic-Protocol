import { AddPlayerPacket } from "../../../packets/add_player";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

export class AddPlayerSerializer implements PacketSerializer<AddPlayerPacket> {
  encode(buf: BufferWriter, p: AddPlayerPacket) {
    buf.writeUuid(p.uuid);
    buf.writeString(p.username);
    buf.writeZigZag64(p.unique_entity_id);
    buf.writeVarInt64(p.runtime_entity_id);
    buf.writeString(p.platform_chat_id ?? "");
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeFloatLE(p.motion.x);
    buf.writeFloatLE(p.motion.y);
    buf.writeFloatLE(p.motion.z);
    buf.writeFloatLE(p.rotation.x);
    buf.writeFloatLE(p.rotation.y);
    buf.writeFloatLE(p.rotation.z);
    // Metadata, hand, links etc. are omitted in this client-only encoder.
  }

  decode(buf: BufferReader): AddPlayerPacket {
    const uuid = buf.readUuid();
    const username = buf.readString();
    const unique_entity_id = buf.readZigZag64();
    const runtime_entity_id = buf.readVarInt64();
    const platform_chat_id = buf.readString();
    const position = readVec3(buf);
    const motion = readVec3(buf);
    const rotation = readVec3(buf);
    const raw = buf.remaining() > 0 ? buf.readBytes(buf.remaining()) : Buffer.alloc(0);

    return {
      uuid,
      username,
      unique_entity_id,
      runtime_entity_id,
      platform_chat_id,
      position,
      motion,
      rotation,
      raw,
    };
  }
}
