import { CommandKit } from "commandkit";
import { Client, Message } from "discord.js";
import "dotenv/config";

const client = new Client({
	intents: ["GuildInvites", "Guilds", "GuildMessages", "MessageContent"],
});

new CommandKit({
	client,
	eventsPath: `${__dirname}/events`,
	commandsPath: `${__dirname}/commands`,
	bulkRegister: true,
});

export const lastDeletedMessages: Map<string, Message | null> = new Map();

client.login(process.env.BOT_TOKEN);
