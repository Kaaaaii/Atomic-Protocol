export class BufferReader {
  constructor(private buf: Buffer, private offset = 0) {}

  remaining() {
    return this.buf.length - this.offset;
  }

  position() {
    return this.offset;
  }

  readBool() { return this.buf[this.offset++] === 1; }

  readUInt8() {
    const v = this.buf.readUInt8(this.offset);
    this.offset += 1;
    return v;
  }

  readUInt16LE() {
    const v = this.buf.readUInt16LE(this.offset);
    this.offset += 2;
    return v;
  }

  readInt16LE() {
    const v = this.buf.readInt16LE(this.offset);
    this.offset += 2;
    return v;
  }

  readUInt16BE() {
    const v = this.buf.readUInt16BE(this.offset);
    this.offset += 2;
    return v;
  }

  readInt32LE() {
    const v = this.buf.readInt32LE(this.offset);
    this.offset += 4;
    return v;
  }

  readUInt32LE() {
    const v = this.buf.readUInt32LE(this.offset);
    this.offset += 4;
    return v;
  }

  readInt32BE() {
    const v = this.buf.readInt32BE(this.offset);
    this.offset += 4;
    return v;
  }

  readFloatLE() {
    const v = this.buf.readFloatLE(this.offset);
    this.offset += 4;
    return v;
  }

  readFloatBE() {
    const v = this.buf.readFloatBE(this.offset);
    this.offset += 4;
    return v;
  }

  readBytes(length: number) {
    const slice = this.buf.subarray(this.offset, this.offset + length);
    this.offset += length;
    return slice;
  }

  readVarInt() {
    let num = 0, shift = 0, byte;
    do {
      byte = this.buf[this.offset++];
      num |= (byte & 0x7f) << shift;
      shift += 7;
    } while (byte & 0x80);
    return num;
  }

  readZigZag32() {
    const v = this.readVarInt();
    return (v >>> 1) ^ -(v & 1);
  }

  readVarInt64() {
    let result = 0n;
    let shift = 0n;
    let byte: number;
    do {
      byte = this.buf[this.offset++];
      result |= BigInt(byte & 0x7f) << shift;
      shift += 7n;
    } while (byte & 0x80);
    return result;
  }

  readZigZag64() {
    const v = this.readVarInt64();
    return (v >> 1n) ^ -(v & 1n);
  }

  readString() {
    const len = this.readVarInt();
    const value = this.buf.slice(this.offset, this.offset + len).toString("utf8");
    this.offset += len;
    return value;
  }

  readLittleString() {
    const len = this.readInt32LE();
    const value = this.buf.slice(this.offset, this.offset + len).toString("utf8");
    this.offset += len;
    return value;
  }

  readUuid() {
    const slice = this.buf.subarray(this.offset, this.offset + 16);
    this.offset += 16;
    const hex = slice.toString("hex");
    return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
  }

  readInt64LE() {
    const v = this.buf.readBigInt64LE(this.offset);
    this.offset += 8;
    return v;
  }

  readUInt64LE() {
    const v = this.buf.readBigUInt64LE(this.offset);
    this.offset += 8;
    return v;
  }
}
