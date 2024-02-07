import type { CommandKit } from "commandkit";
import type { Client } from "discord.js";

export default function (c: Client<true>, client: Client<true>, handler: CommandKit) {
	console.log(`${c.user.username} is ready!`);
}
