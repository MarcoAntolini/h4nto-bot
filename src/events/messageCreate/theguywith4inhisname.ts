import type { CommandKit } from "commandkit";
import type { Client, Message } from "discord.js";

export default function (message: Message<true>, client: Client<true>, handler: CommandKit) {
	if (message.content.toLowerCase().includes("the guy with 4 in his name")) {
		message.reply("Seems like you're talking about me!");
	}
}
