import { Client, TextChannel } from "discord.js";
import "dotenv/config";

const client = new Client({
	intents: ["GuildInvites", "Guilds", "GuildMessages", "MessageContent"],
});

client.on("ready", (c) => {
	console.log(`${c.user.username} is online.`);
});

client.on("messageCreate", async (message) => {
	if (message.content === "/invite") {
		const channel: TextChannel = message.channel as TextChannel;
		const invite = channel.createInvite({
			maxAge: 86400,
			maxUses: 1,
		});
		channel.send(`${(await invite).url}`);
	}
});

client.login(process.env.BOT_TOKEN);
