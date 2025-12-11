import { RequestPermissionsPacket, PermissionLevel } from "../../../packets/request_permissions";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const PERMISSION_LEVELS: PermissionLevel[] = ["visitor", "member", "operator", "custom"];
const PERM_INV: Record<string, number> = PERMISSION_LEVELS.reduce(
  (acc, lvl, idx) => Object.assign(acc, { [String(lvl)]: idx }),
  {} as Record<string, number>,
);

export class RequestPermissionsSerializer implements PacketSerializer<RequestPermissionsPacket> {
  encode(buf: BufferWriter, p: RequestPermissionsPacket) {
    buf.writeInt64LE(p.entity_unique_id);
    const permLevel =
      typeof p.permission_level === "number" ? p.permission_level : PERM_INV[p.permission_level] ?? 0;
    buf.writeUInt8(permLevel);
    buf.writeUInt16LE(p.requested_permissions);
  }

  decode(buf: BufferReader): RequestPermissionsPacket {
    const entity_unique_id = buf.readInt64LE();
    const permId = buf.readUInt8();
    const permission_level = PERMISSION_LEVELS[permId] ?? permId;
    const requested_permissions = buf.readUInt16LE();
    return { entity_unique_id, permission_level, requested_permissions };
  }
}
