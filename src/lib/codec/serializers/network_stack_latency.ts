import { NetworkStackLatencyPacket } from "../../../packets/network_stack_latency";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class NetworkStackLatencySerializer implements PacketSerializer<NetworkStackLatencyPacket> {
  encode(buf: BufferWriter, p: NetworkStackLatencyPacket) {
    buf.writeUInt64LE(BigInt(p.timestamp));
    buf.writeUInt8(p.needs_response ? 1 : 0);
  }

  decode(buf: BufferReader): NetworkStackLatencyPacket {
    const timestamp = buf.readUInt64LE();
    const needs_response = buf.readUInt8() === 1;
    return { timestamp, needs_response };
  }
}
