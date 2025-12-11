import { EducationSettingsPacket } from "../../../packets/education_settings";
import { BufferReader } from "../BufferReader";
import { BufferWriter } from "../BufferWriter";
import { PacketSerializer } from "../PacketSerializer";

export class EducationSettingsSerializer implements PacketSerializer<EducationSettingsPacket> {
  encode(buf: BufferWriter, p: EducationSettingsPacket) {
    buf.writeString(p.CodeBuilderDefaultURI);
    buf.writeString(p.CodeBuilderTitle);
    buf.writeBool(p.CanResizeCodeBuilder);
    buf.writeBool(p.disable_legacy_title_bar);
    buf.writeString(p.post_process_filter);
    buf.writeString(p.screenshot_border_path);
    buf.writeBool(p.has_agent_capabilities);
    if (p.has_agent_capabilities) {
      const caps = p.agent_capabilities ?? { has: false, can_modify_blocks: false };
      buf.writeBool(caps.has);
      buf.writeBool(caps.can_modify_blocks);
    }
    buf.writeBool(p.HasOverrideURI);
    if (p.HasOverrideURI) {
      buf.writeString(p.OverrideURI ?? "");
    }
    buf.writeBool(p.HasQuiz);
    buf.writeBool(p.has_external_link_settings);
    if (p.has_external_link_settings) {
      const link = p.external_link_settings ?? { has: false, url: "", display_name: "" };
      buf.writeBool(link.has);
      buf.writeString(link.url ?? "");
      buf.writeString(link.display_name ?? "");
    }
  }

  decode(buf: BufferReader): EducationSettingsPacket {
    const CodeBuilderDefaultURI = buf.readString();
    const CodeBuilderTitle = buf.readString();
    const CanResizeCodeBuilder = buf.readBool();
    const disable_legacy_title_bar = buf.readBool();
    const post_process_filter = buf.readString();
    const screenshot_border_path = buf.readString();
    const has_agent_capabilities = buf.readBool();
    let agent_capabilities;
    if (has_agent_capabilities) {
      agent_capabilities = { has: buf.readBool(), can_modify_blocks: buf.readBool() };
    }
    const HasOverrideURI = buf.readBool();
    const OverrideURI = HasOverrideURI ? buf.readString() : undefined;
    const HasQuiz = buf.readBool();
    const has_external_link_settings = buf.readBool();
    let external_link_settings;
    if (has_external_link_settings) {
      external_link_settings = {
        has: buf.readBool(),
        url: buf.readString(),
        display_name: buf.readString(),
      };
    }
    return {
      CodeBuilderDefaultURI,
      CodeBuilderTitle,
      CanResizeCodeBuilder,
      disable_legacy_title_bar,
      post_process_filter,
      screenshot_border_path,
      has_agent_capabilities,
      agent_capabilities,
      HasOverrideURI,
      OverrideURI,
      HasQuiz,
      has_external_link_settings,
      external_link_settings,
    };
  }
}
