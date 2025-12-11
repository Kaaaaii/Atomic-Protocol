import { ResourcePackClientResponsePacket } from "../../../packets/resource_pack_client_response";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ResourcePackClientResponseSerializer implements PacketSerializer<ResourcePackClientResponsePacket> {
  encode(buf: BufferWriter, p: ResourcePackClientResponsePacket) {
    const map: Record<string, number> = { none: 0, refused: 1, send_packs: 2, have_all_packs: 3, completed: 4 };
    const status = typeof p.response_status === "number" ? p.response_status : map[p.response_status] ?? 0;
    buf.writeUInt8(status);
    buf.writeUInt16LE(p.resourcepackids.length);
    for (const id of p.resourcepackids) {
      buf.writeString(id);
    }
  }
  decode(buf: BufferReader): ResourcePackClientResponsePacket {
    const map = ["none", "refused", "send_packs", "have_all_packs", "completed"];
    const response_status = map[buf.readUInt8()] ?? "none";
    const ids: string[] = [];
    const len = buf.readUInt16LE();
    for (let i = 0; i < len; i++) ids.push(buf.readString());
    return { response_status, resourcepackids: ids };
  }
}
