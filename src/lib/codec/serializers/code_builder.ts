import { CodeBuilderPacket } from "../../../packets/code_builder";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class CodeBuilderSerializer implements PacketSerializer<CodeBuilderPacket> {
  encode(buf: BufferWriter, p: CodeBuilderPacket) {
    buf.writeString(p.url);
    buf.writeBool(p.should_open_code_builder);
  }

  decode(buf: BufferReader): CodeBuilderPacket {
    const url = buf.readString();
    const should_open_code_builder = buf.readBool();
    return { url, should_open_code_builder };
  }
}
