import { MapInfoRequestPacket } from "../../../packets/map_info_request";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class MapInfoRequestSerializer implements PacketSerializer<MapInfoRequestPacket> {
  encode(buf: BufferWriter, p: MapInfoRequestPacket) {
    buf.writeZigZag64(p.map_id);
    buf.writeUInt32LE(p.client_pixels.length);
    for (const pixel of p.client_pixels) {
      buf.writeInt32LE(pixel.rgba);
      buf.writeUInt16LE(pixel.index);
    }
  }

  decode(buf: BufferReader): MapInfoRequestPacket {
    const map_id = buf.readZigZag64();
    const count = buf.readUInt32LE();
    const client_pixels = [];
    for (let i = 0; i < count; i++) {
      const rgba = buf.readInt32LE();
      const index = buf.readUInt16LE();
      client_pixels.push({ rgba, index });
    }
    return { map_id, client_pixels };
  }
}
