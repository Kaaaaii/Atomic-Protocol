import { BufferReader } from "./BufferReader";
import { BufferWriter } from "./BufferWriter";

export interface PacketSerializer<T = any> {
  encode(buf: BufferWriter, packet: T): void;
  decode(buf: BufferReader): T;
}
