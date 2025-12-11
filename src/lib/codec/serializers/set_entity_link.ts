import { SetEntityLinkPacket } from "../../../packets/set_entity_link";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class SetEntityLinkSerializer implements PacketSerializer<SetEntityLinkPacket> {
  encode(buf: BufferWriter, p: SetEntityLinkPacket) {
    const link = p.link;
    buf.writeZigZag64(link.ridden_entity_id);
    buf.writeZigZag64(link.rider_entity_id);
    buf.writeUInt8(link.type);
    buf.writeBool(link.immediate);
    buf.writeBool(link.rider_initiated);
    buf.writeFloatLE(link.angular_velocity);
  }

  decode(buf: BufferReader): SetEntityLinkPacket {
    const ridden_entity_id = buf.readZigZag64();
    const rider_entity_id = buf.readZigZag64();
    const type = buf.readUInt8();
    const immediate = buf.readBool();
    const rider_initiated = buf.readBool();
    const angular_velocity = buf.readFloatLE();
    return { link: { ridden_entity_id, rider_entity_id, type, immediate, rider_initiated, angular_velocity } };
  }
}
