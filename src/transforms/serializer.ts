import { BufferReader } from "../lib/codec/BufferReader";
import { BufferWriter } from "../lib/codec/BufferWriter";
import { PacketRegistry } from "../lib/codec/PacketRegistry";
import "../lib/codec/serializers/register";

export class Codec {
  createPacketBuffer({ name, params }: { name: string; params: any; }) {
    const def = PacketRegistry.getByName(name);
    if (!def) throw new Error(`Unknown packet name: ${name}`);

    const writer = new BufferWriter();
    writer.writeVarInt(def.id);
    const packet = def.create(params ?? {});
    def.serializer.encode(writer, packet);
    return writer.final();
  }

  parsePacketBuffer(buf: Buffer) {
    const reader = new BufferReader(buf);
    const id = reader.readVarInt();
    const def = PacketRegistry.getById(id);

    if (!def) {
      return { data: { name: `unknown_${id}`, params: { raw: buf.subarray(reader.position()) } } };
    }

    const params = def.serializer.decode(reader);
    return { data: { name: def.name, params } };
  }
}

export const createSerializer = () => new Codec();
export const createDeserializer = () => new Codec();
