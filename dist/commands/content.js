"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.run = exports.data = void 0;
const discord_js_1 = require("discord.js");
exports.data = {
    name: "content",
    type: discord_js_1.ApplicationCommandType.Message,
};
function run({ interaction, client, handler }) {
    interaction.reply(`The message is: ${interaction.targetId}`);
}
exports.run = run;
exports.options = {};
