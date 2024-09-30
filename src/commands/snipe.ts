import type { CommandData, CommandOptions, SlashCommandProps } from "commandkit";
import { lastDeletedMessages } from "..";

export const data: CommandData = {
	name: "snipe",
	description: "Show the last deleted message in this chat.",
};

export function run({ interaction, client, handler }: SlashCommandProps) {
	const channelID = interaction.channel?.id;
	if (!channelID) {
		return interaction.reply("This command can only be used in a server channel.");
	}
	const lastDeletedMessage = lastDeletedMessages.get(interaction.channel.id)
	if (!lastDeletedMessage) {
		return interaction.reply("There are no deleted messages in this channel.");
	}
	const { author, content } = lastDeletedMessage;
	interaction.reply({
		embeds: [
			{
				title: "Last Deleted Message",
				description: content,
				footer: {
					text: `Author: ${author.tag}`,
					icon_url: author.displayAvatarURL(),
				},
				color: 0xff0000,
			},
		],
	});

}

export const options: CommandOptions = {
	userPermissions: ["ManageRoles"],
	botPermissions: [],
};
