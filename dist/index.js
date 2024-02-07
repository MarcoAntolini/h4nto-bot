"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commandkit_1 = require("commandkit");
const discord_js_1 = require("discord.js");
require("dotenv/config");
const client = new discord_js_1.Client({
    intents: ["GuildInvites", "Guilds", "GuildMessages", "MessageContent"],
});
new commandkit_1.CommandKit({
    client,
    eventsPath: `${__dirname}/events`,
    commandsPath: `${__dirname}/commands`,
    bulkRegister: true,
});
client.on("messageCreate", async (message) => {
    if (message.content === "/invite") {
        if (!message.member?.permissions.has("ManageRoles")) {
            message.channel.send("You don't have permission to use this command.");
            return;
        }
        const channel = message.channel;
        const invite = channel.createInvite({
            maxAge: 86400,
            maxUses: 1,
        });
        channel.send(`${(await invite).url}`);
    }
});
client.login(process.env.BOT_TOKEN);
