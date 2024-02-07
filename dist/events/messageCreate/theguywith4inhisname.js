"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(message, client, handler) {
    if (message.content.toLowerCase().includes("the guy with 4 in his name")) {
        message.reply("Seems like you're talking about me!");
    }
}
exports.default = default_1;
