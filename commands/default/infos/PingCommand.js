const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const messages = require("./../../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "ping")) {
        return message.channel.send(language("PING", client.ping));
    }
});