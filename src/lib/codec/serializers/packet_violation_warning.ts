import { PacketViolationWarningPacket } from "../../../packets/packet_violation_warning";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const VIOLATION_MAP: Record<number, string> = { 0: "malformed" };
const VIOLATION_INV: Record<string, number> = { malformed: 0 };

export class PacketViolationWarningSerializer implements PacketSerializer<PacketViolationWarningPacket> {
  encode(buf: BufferWriter, p: PacketViolationWarningPacket) {
    const typeId = typeof p.violation_type === "number" ? p.violation_type : VIOLATION_INV[p.violation_type ?? ""] ?? 0;
    buf.writeZigZag32(typeId);
    buf.writeUInt8(p.severity ?? 0);
    buf.writeBuffer(p.context ?? Buffer.alloc(0));
  }

  decode(buf: BufferReader): PacketViolationWarningPacket {
    const typeId = buf.readZigZag32();
    const violation_type = VIOLATION_MAP[typeId] ?? typeId;
    const severity = buf.readUInt8();
    const context = buf.readBytes(buf.remaining());
    return { violation_type, severity, context };
  }
}
