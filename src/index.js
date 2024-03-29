const config = require(`../config.json`)
// Secret variables setup

const mongoose = require(`mongoose`);

async function connect(uri) {
    await mongoose.connect(uri)
        .then(() => { return console.log(`Successfully connected to MongoDB.`) })
        .catch(error => { return console.error(error) });
};

connect(config.DB_URI);
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

client.handleCommands = () => require(`./utils/cmdHandler`);
client.handleCommands();

client.serve = (port) => require(`../server/app`)(port); 
client.serve(config.PORT);
// Handlers and stuff