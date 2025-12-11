import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";

const ROOT = path.resolve(__dirname, "..");
const PACKETS_DIR = path.join(ROOT, "packets");
const EVENTS_FILE = path.join(ROOT, "Events.d.ts");

const toPascal = (name: string) =>
  name
    .replace(/^packet_/, "")
    .split(/[_\s-]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("") + "Packet";

const toEventKey = (filename: string) => filename.replace(/^packet_/, "").replace(/\.ts$/, "");

async function main() {
  const entries = fs
    .readdirSync(PACKETS_DIR)
    .filter((f) => f.endsWith(".ts"))
    .sort();

  const imports = entries
    .map((file) => {
      const iface = toPascal(file.replace(/\.ts$/, ""));
      return `import type { ${iface} } from "./packets/${file.replace(/\.ts$/, "")}";`;
    })
    .join("\n");

  const interfaceBody = entries
    .map((file) => {
      const event = toEventKey(file);
      const iface = toPascal(file.replace(/\.ts$/, ""));
      return `  "${event}": (packet: ${iface}) => void;`;
    })
    .join("\n");

  const events = `
${imports}

export interface Events {
${interfaceBody}
  "session": () => void;
  "close": () => void;
  "error": () => void;
  "disconnect": () => void;
  "connect_allowed": () => void;
}
`;

  fs.writeFileSync(
    EVENTS_FILE,
    await prettier.format(events, {
      parser: "typescript",
    }),
  );

  console.log(`Generated Events.d.ts with ${entries.length} packet events.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
