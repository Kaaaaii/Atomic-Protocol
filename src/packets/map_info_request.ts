export interface MapPixel {
  rgba: number;
  index: number;
}

export interface MapInfoRequestPacket {
  map_id: bigint;
  client_pixels: MapPixel[];
}
