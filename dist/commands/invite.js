"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
exports.data = {
    name: "invite",
    description: "Create a one time invite with 1 day expiration.",
};
function run({ interaction, client, handler }) {
    interaction.channel
        .createInvite({
        maxAge: 86400,
        maxUses: 1,
    })
        .then((invite) => {
        interaction.reply(invite.url);
    });
}
exports.run = run;
exports.options = {
    userPermissions: ["ManageRoles"],
    botPermissions: ["CreateInstantInvite"],
};
