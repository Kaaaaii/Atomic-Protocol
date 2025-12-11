export interface AgentCapabilities {
  has: boolean;
  can_modify_blocks: boolean;
}

export interface ExternalLinkSettings {
  has: boolean;
  url: string;
  display_name: string;
}

export interface EducationSettingsPacket {
  CodeBuilderDefaultURI: string;
  CodeBuilderTitle: string;
  CanResizeCodeBuilder: boolean;
  disable_legacy_title_bar: boolean;
  post_process_filter: string;
  screenshot_border_path: string;
  has_agent_capabilities: boolean;
  agent_capabilities?: AgentCapabilities;
  HasOverrideURI: boolean;
  OverrideURI?: string;
  HasQuiz: boolean;
  has_external_link_settings: boolean;
  external_link_settings?: ExternalLinkSettings;
}
