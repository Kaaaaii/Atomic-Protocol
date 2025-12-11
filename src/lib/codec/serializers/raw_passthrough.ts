import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class RawPassthroughSerializer<T extends { raw: Buffer }> implements PacketSerializer<T> {
  encode(buf: BufferWriter, p: T) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }
  decode(buf: BufferReader): T {
    return { raw: buf.readBytes(buf.remaining()) } as T;
  }
}
