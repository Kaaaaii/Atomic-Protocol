import { AvailableCommandsPacket } from "../../../packets/available_commands";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class AvailableCommandsSerializer implements PacketSerializer<AvailableCommandsPacket> {
  encode(buf: BufferWriter, p: AvailableCommandsPacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }
  decode(buf: BufferReader): AvailableCommandsPacket {
    const start = buf.position();
    try {
      const values_len = buf.readVarInt();
      const _enum_type = buf.readUInt8(); // ignored; size already determined by values_len
      const enum_values: string[] = [];
      for (let i = 0; i < values_len; i++) enum_values.push(buf.readString());

      const postfixCount = buf.readVarInt();
      const postfixes: string[] = [];
      for (let i = 0; i < postfixCount; i++) postfixes.push(buf.readString());

      const enumCount = buf.readVarInt();
      const enums: Array<{ name: string; values: number[] }> = [];
      for (let i = 0; i < enumCount; i++) {
        const name = buf.readString();
        const count = buf.readVarInt();
        const values: number[] = [];
        for (let j = 0; j < count; j++) values.push(buf.readVarInt());
        enums.push({ name, values });
      }

      // Command data is complex; skip parsing but keep counts to maintain offsets.
      const commandCount = buf.readVarInt();
      const commands: string[] = [];
      for (let i = 0; i < commandCount; i++) {
        // Consume but do not fully interpret
        const name = buf.readString();
        commands.push(name);
        if (buf.remaining() < 2 + 2 + 1) throw new Error("truncated available_commands command header");
        buf.readUInt16LE(); // flags
        buf.readUInt16LE(); // permission
        buf.readVarInt(); // aliases index (enum)
        const overloads = buf.readVarInt();
        for (let o = 0; o < overloads; o++) {
          const paramCount = buf.readVarInt();
          for (let p = 0; p < paramCount; p++) {
            const n = buf.readString();
            void n;
            buf.readInt32LE(); // type
            buf.readBool(); // optional
            const options = buf.readUInt8();
            if (options & 1) {
              buf.readVarInt(); // enum index
            }
          }
        }
      }

      const dynamicCount = buf.readVarInt();
      const dynamic_enums: Record<string, string[]> = {};
      for (let i = 0; i < dynamicCount; i++) {
        const name = buf.readString();
        const count = buf.readVarInt();
        const values: string[] = [];
        for (let j = 0; j < count; j++) values.push(buf.readString());
        dynamic_enums[name] = values;
      }

      const constraintCount = buf.readVarInt();
      const constraints: string[] = [];
      for (let i = 0; i < constraintCount; i++) {
        const name = buf.readString();
        constraints.push(name);
        const paramCount = buf.readVarInt();
        for (let j = 0; j < paramCount; j++) buf.readVarInt();
      }

      const raw = buf.remaining() > 0 ? buf.readBytes(buf.remaining()) : undefined;

      return { values_len, enum_values, postfixes, enums, commands, dynamic_enums, constraints, raw };
    } catch (err) {
      // Fall back to raw passthrough to avoid crashing if fields are malformed
      const rewindBytes = buf.remaining();
      const raw = buf.readBytes(rewindBytes);
      return {
        values_len: 0,
        enum_values: [],
        postfixes: [],
        enums: [],
        commands: [],
        dynamic_enums: {},
        constraints: [],
        raw,
      };
    }
  }
}
