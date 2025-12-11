import { RequestNetworkSettingsPacket } from "../../../packets/request_network_settings";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class RequestNetworkSettingsSerializer implements PacketSerializer<RequestNetworkSettingsPacket> {
  encode(buf: BufferWriter, p: RequestNetworkSettingsPacket) {
    buf.writeInt32BE(p.client_protocol);
  }
  decode(buf: BufferReader): RequestNetworkSettingsPacket {
    return { client_protocol: buf.readInt32BE() };
  }
}
