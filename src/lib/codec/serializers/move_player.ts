import { MovePlayerPacket, MovePlayerTeleport } from "../../../packets/move_player";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const MODE_TO_ID: Record<string, number> = {
  normal: 0,
  reset: 1,
  teleport: 2,
  rotation: 3,
};
const ID_TO_MODE = ["normal", "reset", "teleport", "rotation"] as const;
const TELEPORT_CAUSES = ["unknown", "projectile", "chorus_fruit", "command", "behavior"] as const;

function readVec3(buf: BufferReader) {
  return { x: buf.readFloatLE(), y: buf.readFloatLE(), z: buf.readFloatLE() };
}

function encodeTeleport(buf: BufferWriter, teleport?: MovePlayerTeleport) {
  if (!teleport) return;
  const cause =
    typeof teleport.cause === "number"
      ? teleport.cause
      : TELEPORT_CAUSES.indexOf(teleport.cause as any);
  buf.writeInt32LE(cause ?? 0);
  const src =
    typeof teleport.source_entity_type === "number"
      ? teleport.source_entity_type
      : 0;
  buf.writeInt32LE(src);
}

function decodeTeleport(buf: BufferReader): MovePlayerTeleport {
  const causeId = buf.readInt32LE();
  const cause = TELEPORT_CAUSES[causeId] ?? causeId;
  const source_entity_type = buf.readInt32LE();
  return { cause, source_entity_type };
}

export class MovePlayerSerializer implements PacketSerializer<MovePlayerPacket> {
  encode(buf: BufferWriter, p: MovePlayerPacket) {
    buf.writeVarInt(p.runtime_id);
    buf.writeFloatLE(p.position.x);
    buf.writeFloatLE(p.position.y);
    buf.writeFloatLE(p.position.z);
    buf.writeFloatLE(p.pitch);
    buf.writeFloatLE(p.yaw);
    buf.writeFloatLE(p.head_yaw);
    const modeId = typeof p.mode === "number" ? p.mode : MODE_TO_ID[p.mode] ?? 0;
    buf.writeUInt8(modeId);
    buf.writeBool(p.on_ground);
    buf.writeVarInt(p.ridden_runtime_id);
    if (modeId === 2) {
      encodeTeleport(buf, p.teleport);
    }
    buf.writeVarInt64(p.tick);
  }

  decode(buf: BufferReader): MovePlayerPacket {
    const runtime_id = buf.readVarInt();
    const position = readVec3(buf);
    const pitch = buf.readFloatLE();
    const yaw = buf.readFloatLE();
    const head_yaw = buf.readFloatLE();
    const modeId = buf.readUInt8();
    const mode = ID_TO_MODE[modeId] ?? modeId;
    const on_ground = buf.readBool();
    const ridden_runtime_id = buf.readVarInt();
    let teleport: MovePlayerTeleport | undefined;
    if (modeId === 2) {
      teleport = decodeTeleport(buf);
    }
    const tick = buf.readVarInt64();

    return { runtime_id, position, pitch, yaw, head_yaw, mode, on_ground, ridden_runtime_id, teleport, tick };
  }
}
