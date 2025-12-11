export interface AddPlayerPacket {
  uuid: string;
  username: string;
  unique_entity_id: bigint;
  runtime_entity_id: bigint;
  platform_chat_id: string;
  position: { x: number; y: number; z: number; };
  motion: { x: number; y: number; z: number; };
  rotation: { x: number; y: number; z: number; };
  raw?: Buffer;
}
