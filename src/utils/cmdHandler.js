const { config, Discord, client } = require(`../index`);
const fs = require(`fs`);
// Imports

const { REST, Routes, Collection } = Discord;
const rest = new REST({ version: `10` }).setToken(config.TOKEN);
// REST API setup

client.commands = new Collection();
const commandFiles = fs.readdirSync(`./src/commands`)
    .filter(file => file.endsWith(`.js`));

const commands = {
    global: [],
    local: []
};
let command;

commandFiles.forEach(file => {
    command = require(`../commands/${file}`);

    if ((`scope` && `data` && `execute`) in command) {
        const globalCommands = [command].filter(c => c.scope === `global`);
        const localCommands = [command].filter(c => c.scope === `local`);

        globalCommands.forEach(command => {
            commands.global.push(command.data.toJSON());
        });

        localCommands.forEach(command => {
            commands.local.push(command.data.toJSON());
        });

        client.commands.set(command.data.name, command);
    } else {
        console.error(`Missing property(s) at /src/commands/${file}`);
    };
});

client.on(`ready`, async () => {
    console.log(`Refreshing application (/) commands.`);

    await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: commands.global }
    )
    .then(() => { return console.log(`Successfully loaded ${commands.global.length} globally-scoped application (/) commands.`) })
    .catch(error => { return console.error(error) });

    await rest.put(
        Routes.applicationGuildCommands(client.user.id, config.GUILD_ID),
        { body: commands.local }
    )
    .then(() => { return console.log(`Successfully loaded ${commands.local.length} locally-scoped application (/) commands`) })
    .catch(error => { return console.error(error) });
});

client.on(`interactionCreate`, interaction => {
    command = client.commands.get(interaction.commandName);

    if (interaction.isChatInputCommand()) {
        command.execute(interaction);
    }
});