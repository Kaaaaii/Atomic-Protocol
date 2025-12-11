import { UpdateSoftEnumPacket } from "../../../packets/update_soft_enum";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const TYPES: Record<number, string> = { 0: "add", 1: "remove" };
const TYPES_INV: Record<string, number> = { add: 0, remove: 1 };

export class UpdateSoftEnumSerializer implements PacketSerializer<UpdateSoftEnumPacket> {
  encode(buf: BufferWriter, p: UpdateSoftEnumPacket) {
    buf.writeString(p.enum_type);
    buf.writeVarInt(p.options.length);
    for (const o of p.options) buf.writeString(o);
    const typeId = typeof p.type === "number" ? p.type : TYPES_INV[p.type] ?? 0;
    buf.writeUInt8(typeId);
  }

  decode(buf: BufferReader): UpdateSoftEnumPacket {
    const enum_type = buf.readString();
    const len = buf.readVarInt();
    const options: string[] = [];
    for (let i = 0; i < len; i++) options.push(buf.readString());
    const typeId = buf.readUInt8();
    const type = TYPES[typeId] ?? typeId;
    return { enum_type, options, type };
  }
}
