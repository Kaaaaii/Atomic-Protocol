import { ResourcePacksInfoPacket } from "../../../packets/resource_packs_info";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ResourcePacksInfoSerializer implements PacketSerializer<ResourcePacksInfoPacket> {
  encode(buf: BufferWriter, p: ResourcePacksInfoPacket) {
    buf.writeBool(p.must_accept);
    buf.writeBool(false); // has_addons
    buf.writeBool(p.has_scripts);
    buf.writeBool(false); // disable_vibrant_visuals

    buf.writeUuid("00000000-0000-0000-0000-000000000000");
    buf.writeString("");

    const packs = [...(p.resource_packs ?? []), ...(p.behaviour_packs ?? [])];
    buf.writeUInt16LE(packs.length);
    for (const pack of packs) {
      buf.writeUuid(pack.pack_id);
      buf.writeString(pack.pack_version);
      buf.writeUInt64LE(pack.size);
      buf.writeString(pack.content_key);
      buf.writeString(pack.sub_pack_name);
      buf.writeString(pack.content_identity);
      buf.writeBool(pack.has_scripts);
      buf.writeBool(false); // addon_pack
      buf.writeBool(pack.rtx_enabled);
      buf.writeString(""); // cdn_url
    }
  }

  decode(buf: BufferReader): ResourcePacksInfoPacket {
    const must_accept = buf.readBool();
    const has_addons = buf.readBool();
    const has_scripts = buf.readBool();
    buf.readBool(); // disable_vibrant_visuals

    // world_template
    buf.readUuid();
    buf.readString();

    const packs = readTexturePackInfos(buf);

    return {
      must_accept,
      has_scripts,
      behaviour_packs: [],
      resource_packs: packs,
    };
  }
}

function readTexturePackInfos(buf: BufferReader) {
  const count = buf.readUInt16LE();
  const packs: ResourcePacksInfoPacket["resource_packs"] = [];
  for (let i = 0; i < count; i++) {
    const pack_id = buf.readUuid();
    const pack_version = buf.readString();
    const size = buf.readUInt64LE();
    const content_key = buf.readString();
    const sub_pack_name = buf.readString();
    const content_identity = buf.readString();
    const has_scripts = buf.readBool();
    buf.readBool(); // addon_pack
    const rtx_enabled = buf.readBool();
    buf.readString(); // cdn_url

    packs.push({
      pack_id,
      pack_version,
      size,
      content_key,
      sub_pack_name,
      content_identity,
      has_scripts,
      rtx_enabled,
    } as any);
  }
  return packs;
}
