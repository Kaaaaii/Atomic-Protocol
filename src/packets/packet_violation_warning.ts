export interface PacketViolationWarningPacket {
  violation_type?: string | number;
  severity?: number;
  context?: Buffer;
}
