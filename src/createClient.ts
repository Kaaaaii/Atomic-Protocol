import assert from "assert";
import { realmAuth } from "./client/auth";
import { Client } from "./client/client";
import { config } from "./config/config";
import { RaknetClient } from "./rak";
import { ClientOptions } from "./types";
import { convert } from "./utils/convert";
import { sleep } from "./utils/utilities";
import { Logger } from "./utils/logger";

export const createClient = (options: ClientOptions) => {
    assert(options);
    const client = new Client({ port: 19132, delayedInit: true, followPort: !options.realmId, protocolVersion: config.protocol, version: config.minecraftVersion, ...options });

    config.debug = options.debug ?? false;

    if (options.realmId) realmAuth(client.options).then(onServerInfo).catch((e) => client.emit('error', e));
    else onServerInfo();

    function onServerInfo() {
        client.on("connect_allowed", () => connect(client));
        if (options.skipPing) client.init();
        else {
            ping({ host: client.options.host, networkId: client.options.networkId, port: client.options.port }).then((ad) => {
                if (client.options.transport === "nethernet") return client.init();

                if (ad.portV4 && client.options.followPort) client.options.port = ad.portV4;
                Logger.debug(`Connecting to ${client.options.host}:${client.options.port} ${ad.motd} (${ad.levelName}), version ${ad.version} ${config.minecraftVersion}`, config.debug);
                client.init();
            }).catch((e) => {
                client.init();
            });
        }
    }

    return client;
};

async function connect(client: Client) {
    client.connect();

    client.once("resource_packs_info", () => {
        client.write('resource_pack_client_response', {
            response_status: 'completed',
            resourcepackids: []
        });

        client.once('resource_pack_stack', () => {
            client.write('resource_pack_client_response', {
                response_status: 'completed',
                resourcepackids: []
            });
        });

        client.queue('client_cache_status', { enabled: false });

        sleep(500).then(() => {
            client.queue('request_chunk_radius', { chunk_radius: 1, max_radius: 10 });
        });
    });
}

interface PingOptions {
    host?: string;
    port?: number;
    networkId?: any;
}

async function ping({ host, port, networkId }: PingOptions) {
    const con = new RaknetClient({ host, port });

    try {
        const value = await con.ping();
        const serverInfo = convert(value);
        return serverInfo;
    } finally {
        con.close();
    }
}
