import { CodeBuilderSourcePacket } from "../../../packets/code_builder_source";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

const OP_INV: Record<string, number> = { none: 0, get: 1, set: 2, reset: 3 };
const OP_MAP = ["none", "get", "set", "reset"] as const;
const CAT_INV: Record<string, number> = { none: 0, code_status: 1, instantiation: 2 };
const CAT_MAP = ["none", "code_status", "instantiation"] as const;
const STATUS_INV: Record<string, number> = { none: 0, not_started: 1, in_progress: 2, paused: 3, error: 4, succeeded: 5 };
const STATUS_MAP = ["none", "not_started", "in_progress", "paused", "error", "succeeded"] as const;

export class CodeBuilderSourceSerializer implements PacketSerializer<CodeBuilderSourcePacket> {
  encode(buf: BufferWriter, p: CodeBuilderSourcePacket) {
    buf.writeUInt8(typeof p.operation === "number" ? p.operation : OP_INV[p.operation] ?? 0);
    buf.writeUInt8(typeof p.category === "number" ? p.category : CAT_INV[p.category] ?? 0);
    buf.writeUInt8(typeof p.code_status === "number" ? p.code_status : STATUS_INV[p.code_status] ?? 0);
  }

  decode(buf: BufferReader): CodeBuilderSourcePacket {
    const operationId = buf.readUInt8();
    const categoryId = buf.readUInt8();
    const codeStatusId = buf.readUInt8();
    return {
      operation: OP_MAP[operationId] ?? operationId,
      category: CAT_MAP[categoryId] ?? categoryId,
      code_status: STATUS_MAP[codeStatusId] ?? codeStatusId,
    };
  }
}
