import { ServerToClientHandshakePacket } from "../../../packets/server_to_client_handshake";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ServerToClientHandshakeSerializer implements PacketSerializer<ServerToClientHandshakePacket> {
  encode(buf: BufferWriter, p: ServerToClientHandshakePacket) {
    buf.writeString(p.token);
  }
  decode(buf: BufferReader): ServerToClientHandshakePacket {
    return { token: buf.readString() };
  }
}
