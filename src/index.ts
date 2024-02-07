import { CommandKit } from "commandkit";
import { Client, TextChannel } from "discord.js";
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

client.on("messageCreate", async (message) => {
	if (message.content === "/invite") {
		if (!message.member?.permissions.has("ManageRoles")) {
			message.channel.send("You don't have permission to use this command.");
			return;
		}
		const channel: TextChannel = message.channel as TextChannel;
		const invite = channel.createInvite({
			maxAge: 86400,
			maxUses: 1,
		});
		channel.send(`${(await invite).url}`);
	}
});

client.login(process.env.BOT_TOKEN);
