import { ServerStatsPacket } from "../../../packets/server_stats";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ServerStatsSerializer implements PacketSerializer<ServerStatsPacket> {
  encode(buf: BufferWriter, p: ServerStatsPacket) {
    buf.writeFloatLE(p.server_time);
    buf.writeFloatLE(p.network_time);
  }

  decode(buf: BufferReader): ServerStatsPacket {
    const server_time = buf.readFloatLE();
    const network_time = buf.readFloatLE();
    return { server_time, network_time };
  }
}
