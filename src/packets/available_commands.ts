export interface AvailableCommandsPacket {
  values_len: number;
  enum_values: string[];
  postfixes: string[];
  enums: Array<{ name: string; values: number[] }>;
  commands: string[]; // placeholder for full command data (not parsed)
  dynamic_enums: Record<string, string[]>;
  constraints: string[]; // placeholder
  raw?: Buffer;
}
