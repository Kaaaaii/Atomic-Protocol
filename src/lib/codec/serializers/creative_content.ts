import { CreativeContentPacket } from "../../../packets/creative_content";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class CreativeContentSerializer implements PacketSerializer<CreativeContentPacket> {
  encode(buf: BufferWriter, p: CreativeContentPacket) {
    buf.writeBuffer(p.raw ?? Buffer.alloc(0));
  }

  decode(buf: BufferReader): CreativeContentPacket {
    return { raw: buf.readBytes(buf.remaining()) };
  }
}
