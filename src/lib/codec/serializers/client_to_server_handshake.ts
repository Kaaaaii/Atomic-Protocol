import { ClientToServerHandshakePacket } from "../../../packets/client_to_server_handshake";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ClientToServerHandshakeSerializer implements PacketSerializer<ClientToServerHandshakePacket> {
  encode(_buf: BufferWriter, _p: ClientToServerHandshakePacket) {}
  decode(_buf: BufferReader): ClientToServerHandshakePacket { return {}; }
}
