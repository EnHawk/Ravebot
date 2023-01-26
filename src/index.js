const config = require(`../config.json`)
// Secret variables setup

const mongoose = require(`mongoose`);
mongoose.connect(config.DB_URI)
    .then(() => console.log(`Successfully connected to MongoDB.`));
// MongoDB setup

const Discord = require(`discord.js`);
const client = new Discord.Client({
    intents: [ `Guilds`, `GuildMessages` ],
    allowedMentions: { parse: [ `roles`, `users` ] }
});

client.on(`ready`, () => {
    return console.log(`${client.user.tag} is online.`);
});

client.login(config.TOKEN)
    .catch(error => { return console.error(error) });
// Discord.js part

module.exports = { config, mongoose, Discord, client };
// Exports

client.handleCommands = () => { require(`./utils/cmdHandler`) };
client.handleCommands();

client.serve = require(`../server/app`);
client.serve(config.PORT);
// Handlers and stuff