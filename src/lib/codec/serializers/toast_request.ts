import { ToastRequestPacket } from "../../../packets/toast_request";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class ToastRequestSerializer implements PacketSerializer<ToastRequestPacket> {
  encode(buf: BufferWriter, p: ToastRequestPacket) {
    buf.writeString(p.title);
    buf.writeString(p.message);
  }

  decode(buf: BufferReader): ToastRequestPacket {
    const title = buf.readString();
    const message = buf.readString();
    return { title, message };
  }
}
