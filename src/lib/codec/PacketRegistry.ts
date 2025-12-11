import { PacketSerializer } from "./PacketSerializer";

export interface PacketDefinition<T> {
  id: number;
  name: string;
  serializer: PacketSerializer<T>;
  create: (params: any) => T;
}

export class PacketRegistry {
  private static byId = new Map<number, PacketDefinition<any>>();
  private static byName = new Map<string, PacketDefinition<any>>();

  static register<T>(name: string, id: number, serializer: PacketSerializer<T>, factory: (params: any) => T) {
    const def: PacketDefinition<T> = { id, name, serializer, create: factory };
    this.byId.set(id, def);
    this.byName.set(name, def);
  }

  static getById(id: number) {
    return this.byId.get(id);
  }

  static getByName(name: string) {
    return this.byName.get(name);
  }
}
