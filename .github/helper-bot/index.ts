import { readFileSync } from "fs";

const TOKEN = process.env.GITHUB_TOKEN!;
const CONFIG_PATH = "src/config/config.ts";
const LATEST = `https://itunes.apple.com/lookup?bundleId=com.mojang.minecraftpe&t=${Date.now()}`;
const CHANGELOG = "https://feedback.minecraft.net/hc/en-us/sections/360001186971-Release-Changelogs";
const REPO = "AtomicTS/Atomic-Protocol";

type Issue = {
    number: number;
    state: "open" | "closed";
    title: string;
};

async function gh<T = any>(url: string, init: RequestInit = {}) {
    const res = await fetch(`https://api.github.com${url}`, {
        ...init,
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
            ...(init.headers ?? {})
        }
    });
    return res.json();
}

function getLocalVersion() {
    const file = readFileSync(CONFIG_PATH, "utf8");

    const version = file.match(/minecraftVersion:\s*"([^"]+)"/)?.[1];
    const protocol = file.match(/protocol:\s*(\d+)/)?.[1];

    if (!version || !protocol)
        throw new Error("Could not extract minecraftVersion or protocol from config.ts");

    return { version, protocol };
}

async function getLatestVersion() {
    const res = await fetch(LATEST);
    const json = await res.json();
    const app = json.results[0];

    return {
        version: app.version.replace(/\.0$/, ""),
        notes: app.releaseNotes,
        date: app.currentVersionReleaseDate
    };
}

async function getProtocolVersion(): Promise<string> {
    const sources = [
        "https://raw.githubusercontent.com/pmmp/BedrockProtocol/master/src/ProtocolInfo.php",
        "https://raw.githubusercontent.com/pmmp/PocketMine-MP/stable/src/pocketmine/network/mcpe/protocol/ProtocolInfo.php"
    ];

    for (const url of sources) {
        try {
            const res = await fetch(url);
            if (!res.ok) continue;

            const text = await res.text();
            const match = text.match(/public const CURRENT_PROTOCOL = (\d+);/);
            if (match) return match[1];
        } catch {

        }
    }

    throw new Error("Failed to determine protocol ID from BedrockProtocol or PocketMine");
}

async function getCommits(repo: string, containing: string, since?: string) {
    const base = `/repos/${repo}/commits`;
    const commits = await gh(base);
    const hits: string[][] = [];

    for (const c of commits) {
        if (c.commit.message.includes(containing)) {
            hits.push([c.commit.message, c.html_url]);
        }
    }

    if (since) {
        const newer = await gh(`${base}?since=${since}`);
        if (newer.length) {
            const head = newer[0].sha;
            const tail = newer[newer.length - 1].sha;
            return [hits, `https://github.com/${repo}/compare/${tail}..${head}`];
        }
    }

    return [hits];
}

async function getExistingIssue(title: string): Promise<Issue | null> {
    const issues = await gh(`/repos/${REPO}/issues?state=all`);
    return issues.find((i: Issue) => i.title === title) ?? null;
}

async function commentIssue(id: number, body: string) {
    await gh(`/repos/${REPO}/issues/${id}/comments`, {
        method: "POST",
        body: JSON.stringify({ body })
    });
}

async function closeIssue(id: number) {
    await gh(`/repos/${REPO}/issues/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ state: "closed" })
    });
}

async function openIssue(title: string, body: string) {
    await gh(`/repos/${REPO}/issues`, {
        method: "POST",
        body: JSON.stringify({ title, body })
    });
}

/* ------------------ ISSUE FORMAT ------------------ */

function buildPatchSection(data: Record<string, [string[][], string?]>) {
    let out = "";

    for (const name in data) {
        const [patches, diff] = data[name];

        out += `### ${name}\n`;

        if (patches.length) {
            for (const [msg, url] of patches) {
                out += `- [${msg}](${url})\n`;
            }
        } else {
            out += "_No changes yet_\n";
        }

        if (diff) out += `\n[Diff since release](${diff})\n`;

        out += "\n";
    }

    return out;
}

function issueBody(current: any, latest: any, upstreamProtocol: string, patches: any) {
    return `
A new Minecraft Bedrock version has been released.

## Version Information

| Field | Value |
|------|------|
| Your Version | ${current.version} |
| Latest Version | **${latest.version}** |
| Your Protocol | ${current.protocol} |
| Upstream Protocol | ${upstreamProtocol} |
| Release Date | ${new Date(latest.date).toUTCString()} |

## Official Changelog
${latest.notes}

${CHANGELOG}

## Third-party protocol activity
${buildPatchSection(patches)}

---

This issue will auto-close once \`${latest.version}\` is added to:

\`src/config/config.ts\`

🤖 I am a bot, I check for updates every 2 hours without a trigger. You can close this issue to prevent any further updates.
`;
}

(async () => {
    const current = getLocalVersion();
    const latest = await getLatestVersion();
    const upstreamProtocol = await getProtocolVersion();

    const title = `Support Minecraft ${latest.version}`;
    const existing = await getExistingIssue(title);

    if (current.version === latest.version) {
        if (existing && existing.state === "open") {
            await closeIssue(existing.number);
            console.log("Up to date. Issue closed.");
        }
        return;
    }

    const externalPatches = {
        PocketMine: await getCommits("pmmp/PocketMine-MP", latest.version, latest.date),
        CloudburstMC: await getCommits("CloudburstMC/Protocol", latest.version, latest.date),
        GopherTunnel: await getCommits("Sandertv/gophertunnel", latest.version, latest.date),
    };

    const body = issueBody(current, latest, upstreamProtocol, externalPatches);

    if (!existing) {
        await openIssue(title, body);
        console.log("Opened new issue:", title);
    } else {
        console.log("Issue already closed manually. Aborting.");
    }
})();
