# Atomic Protocol
[![NPM version](https://img.shields.io/npm/v/atomic-protocol.svg?logo=npm)](http://npmjs.com/package/atomic-protocol)

[![Official Discord](https://img.shields.io/static/v1.svg?label=OFFICIAL&message=DISCORD&color=blue&logo=discord&style=for-the-badge)](https://discord.gg/AaEqYaegE3)

Atomic Protocol is a modern, efficient, and fully TypeScript-rewritten version of
[PrismarineJS/bedrock-protocol](https://github.com/PrismarineJS/bedrock-protocol). It's built with performance and maintainability in mind.

Key points:
- Minecraft Version: `1.21.130`
- Written in TypeScript
- Strongly-typed packet definitions
- Clean API for client creation
- No proxy or server implementation (for those, use the original [PrismarineJS/bedrock-protocol](https://github.com/PrismarineJS/bedrock-protocol))

[Our Docs](./docs/API.md)

---

## Installation

```bash
yarn add atomic-protocol
# or
npm install atomic-protocol
```

---

## Usage

```ts
import { Client } from "atomic-protocol";

const client = new Client({
  host: "example.com",
  port: 19132,
});

client.on("start_game", () => {
  console.log("Game started!");
});

client.on("add_player", packet => {
  console.log("New player joined:", packet.username);
});
```

---

## Packet Type Definitions

All packet structures are auto-generated from [`src/config/protocol.json`](./src/config/protocol.json) into TypeScript definitions under [`src/packets/`](./src/packets).

This means you get **full IntelliSense and type-safety** when working with packets:

```ts
client.on("text", (packet) => {
  // `packet` is strongly typed as `TextPacket`
  console.log(`[${packet.source}] ${packet.message}`);
});
```

---

## Development (Yarn + Turbo)

- Install dependencies: `yarn install`
- Type-check and build: `yarn turbo run build`
- Bundle (depends on build): `yarn turbo run bundle`
- Type-check only: `yarn turbo run lint`

---

## Roadmap

- [x] Nethernet Support
  - Fully Supported
- [x] API Documentation
  - FAQ Soon
- [x] Move the entire Codec in it's own REPO
  - https://github.com/AtomicTS/Atomic-Codec
- [ ] Atomic-Auth & Atomic-Realms
- [ ] **Future Enhancements**
  - Consider adding proxy support (client + server pass-through).
  - Explore server implementation (stretch goal).

---

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve Atomic Protocol.

---

## Authors

- **[Serial-V](https://github.com/Serial-V)**

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
