const { Client } = require(`discord.js`);
const client = new Client({
    intents: [ `Guilds`, `GuildMessages` ],
    allowedMentions: { parse: [ `roles`, `users` ] }
});
const config = require(`../config.json`);
const test = require(`./index.mjs`);

client.login(config.TOKEN)
    .then(() => console.log(`Test: ${test.login}\nStatus: ${test.status[0]}`))
    .then(() => process.exit(0))
    .catch(error => {
        console.log(`Test: ${test.login}\nStatus: ${test.status[1]}`);
        console.error(error);

        process.exit(1);
    });