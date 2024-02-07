"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require("dotenv/config");
const client = new discord_js_1.Client({
    intents: ["GuildInvites"],
});
client.on("ready", (c) => {
    console.log(`${c.user.username} is online.`);
});
client.on("messageCreate", async (message) => {
    if (message.content === "/invite") {
        const channel = message.channel;
        const invite = channel.createInvite({
            maxAge: 86400,
            maxUses: 1,
        });
        channel.send(`${(await invite).url}`);
    }
});
client.login(process.env.BOT_TOKEN);
