/**
 * ServerboundDataStorePacket
 * Unknown packet ID
 * No description
 */

export interface ServerboundDataStorePacket {
  data_store_name: string;
  property: string;
  path: string;
  date: any;
  update_count: number;
}

export const ServerboundDataStorePacketInfo: import("./metadata").PacketMetadata =
  {
    id: undefined,
    name: "serverbound_data_store",
    description: undefined,
  };
