import { Buffer } from "buffer";

const DEFAULT_SIZE = 4096;

export class BufferWriter {
  private buf = Buffer.allocUnsafe(DEFAULT_SIZE);
  private offset = 0;

  private ensure(size: number) {
    if (this.offset + size <= this.buf.length) return;
    let next = this.buf.length;
    while (next < this.offset + size) next *= 2;
    const grown = Buffer.allocUnsafe(next);
    this.buf.copy(grown, 0, 0, this.offset);
    this.buf = grown;
  }

  writeBool(v: boolean) {
    this.ensure(1);
    this.buf[this.offset++] = v ? 1 : 0;
  }

  writeUInt8(v: number) {
    this.ensure(1);
    this.buf.writeUInt8(v, this.offset);
    this.offset += 1;
  }

  writeInt32LE(v: number) {
    this.ensure(4);
    this.buf.writeInt32LE(v, this.offset);
    this.offset += 4;
  }

  writeUInt32LE(v: number) {
    this.ensure(4);
    this.buf.writeUInt32LE(v, this.offset);
    this.offset += 4;
  }

  writeInt32BE(v: number) {
    this.ensure(4);
    this.buf.writeInt32BE(v, this.offset);
    this.offset += 4;
  }

  writeUInt16LE(v: number) {
    this.ensure(2);
    this.buf.writeUInt16LE(v, this.offset);
    this.offset += 2;
  }

  writeInt16LE(v: number) {
    this.ensure(2);
    this.buf.writeInt16LE(v, this.offset);
    this.offset += 2;
  }

  writeUInt16BE(v: number) {
    this.ensure(2);
    this.buf.writeUInt16BE(v, this.offset);
    this.offset += 2;
  }

  writeFloatLE(v: number) {
    this.ensure(4);
    this.buf.writeFloatLE(v, this.offset);
    this.offset += 4;
  }

  writeFloatBE(v: number) {
    this.ensure(4);
    this.buf.writeFloatBE(v, this.offset);
    this.offset += 4;
  }

  writeBuffer(data: Buffer) {
    this.ensure(data.length);
    data.copy(this.buf, this.offset);
    this.offset += data.length;
  }

  writeVarInt(value: number) {
    let v = value >>> 0;
    while (v >= 0x80) {
      this.ensure(1);
      this.buf[this.offset++] = (v & 0x7f) | 0x80;
      v >>>= 7;
    }
    this.ensure(1);
    this.buf[this.offset++] = v;
  }

  writeZigZag32(value: number) {
    const zz = (value << 1) ^ (value >> 31);
    this.writeVarInt(zz >>> 0);
  }

  writeVarInt64(value: bigint) {
    let v = BigInt.asUintN(64, value);
    while (v >= 0x80n) {
      this.ensure(1);
      this.buf[this.offset++] = Number((v & 0x7fn) | 0x80n);
      v >>= 7n;
    }
    this.ensure(1);
    this.buf[this.offset++] = Number(v);
  }

  writeZigZag64(value: bigint) {
    const zz = (value << 1n) ^ (value >> 63n);
    this.writeVarInt64(zz);
  }

  writeString(str: string) {
    const bytes = Buffer.from(str, "utf8");
    this.writeVarInt(bytes.length);
    this.writeBuffer(bytes);
  }

  writeLittleString(str: string) {
    const bytes = Buffer.from(str, "utf8");
    this.ensure(4 + bytes.length);
    this.buf.writeInt32LE(bytes.length, this.offset);
    this.offset += 4;
    this.writeBuffer(bytes);
  }

  writeUuid(uuid: string) {
    const hex = uuid.replace(/-/g, "");
    const buf = Buffer.from(hex, "hex");
    if (buf.length !== 16) throw new Error("Invalid UUID");
    this.writeBuffer(buf);
  }

  writeInt64LE(v: bigint) {
    this.ensure(8);
    this.buf.writeBigInt64LE(v, this.offset);
    this.offset += 8;
  }

  writeUInt64LE(v: bigint) {
    this.ensure(8);
    this.buf.writeBigUInt64LE(v, this.offset);
    this.offset += 8;
  }

  final() {
    return this.buf.subarray(0, this.offset);
  }
}
