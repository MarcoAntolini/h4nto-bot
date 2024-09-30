import type { CommandKit } from "commandkit";
import { TextChannel, type Client, type Message } from "discord.js";
import { lastDeletedMessages } from "../..";

export default function (message: Message<true>, client: Client<true>, handler: CommandKit) {
	if(message.author.bot) return;
	if (message.channel instanceof TextChannel) {
		lastDeletedMessages.set(message.channel.id, message);
	}
}
