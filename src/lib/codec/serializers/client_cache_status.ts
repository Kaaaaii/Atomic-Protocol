import { ClientCacheStatusPacket } from "../../../packets/client_cache_status";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ClientCacheStatusSerializer implements PacketSerializer<ClientCacheStatusPacket> {
  encode(buf: BufferWriter, p: ClientCacheStatusPacket) {
    buf.writeBool(p.enabled);
  }
  decode(buf: BufferReader): ClientCacheStatusPacket {
    return { enabled: buf.readBool() };
  }
}
