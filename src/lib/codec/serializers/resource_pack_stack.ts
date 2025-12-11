import { ResourcePackStackPacket } from "../../../packets/resource_pack_stack";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ResourcePackStackSerializer implements PacketSerializer<ResourcePackStackPacket> {
  encode(buf: BufferWriter, p: ResourcePackStackPacket) {
    buf.writeBool(true); // must_accept
    buf.writeVarInt(p.resource_packs.length);
    for (const pack of p.resource_packs) {
      buf.writeString(pack.pack_id);
      buf.writeString(pack.pack_version);
      buf.writeString(pack.sub_pack_name);
    }
    buf.writeString(p.game_version);
    buf.writeInt32LE(0); // experiments count
    buf.writeBool(p.experiments_previously_used);
    buf.writeBool(false); // has_editor_packs
  }

  decode(buf: BufferReader): ResourcePackStackPacket {
    const must_accept = buf.readBool(); // eslint-disable-line @typescript-eslint/no-unused-vars
    const resource_packs = [];
    const packCount = buf.readVarInt();
    for (let i = 0; i < packCount; i++) {
      resource_packs.push({
        pack_id: buf.readString(),
        pack_version: buf.readString(),
        sub_pack_name: buf.readString(),
      });
    }

    const game_version = buf.readString();
    const experimentsCount = buf.readInt32LE();
    for (let i = 0; i < experimentsCount; i++) {
      buf.readString();
      buf.readBool();
    }
    const experiments_previously_used = buf.readBool();
    buf.readBool(); // has_editor_packs

    return {
      resource_packs,
      behaviour_packs: [],
      game_version,
      experiments_previously_used,
    };
  }
}
