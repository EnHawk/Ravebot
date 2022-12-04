const config = require(`../config.json`)
// Environment variables setup

const { MongoClient } = require(`mongodb`);
const mongodb = new MongoClient(config.DB_URI);

mongodb.connect()
    .then(() => console.log(`Successfully connected to MongoDB.`))
    .catch((error) => { return console.error(error) });
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
    .catch((error) => { return console.error(error) });
// Discord.js part

module.exports = { config, mongodb, Discord, client };
// Exports

function handle(handler) {
    require(handler);
};

handle(`./utils/cmdHandler.js`) // Handles Command
// Handlers and stuff