import type { CommandData, CommandOptions, SlashCommandProps } from "commandkit";
import { TextChannel } from "discord.js";

export const data: CommandData = {
	name: "invite",
	description: "Create a one time invite with 1 day expiration.",
};

export function run({ interaction, client, handler }: SlashCommandProps) {
	(interaction.channel as TextChannel)
		.createInvite({
			maxAge: 86400,
			maxUses: 1,
		})
		.then((invite) => {
			interaction.reply(invite.url);
		});
}

export const options: CommandOptions = {
	userPermissions: ["ManageRoles"],
	botPermissions: ["CreateInstantInvite"],
};
