const { config, Discord, client } = require(`../index`);
const fs = require(`fs`);
// Imports

const { REST, Routes, Collection } = Discord;
const rest = new REST({ version: `10` }).setToken(config.TOKEN);
// REST API setup

client.commands = new Collection();
const commandFiles = fs.readdirSync(`./src/commands`)
    .filter((file) => file.endsWith(`.js`));

const commands = [];
let command;

commandFiles.forEach((file) => {
    command = require(`../commands/${file}`);
    
    if ((`data` && `execute`) in command) {
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
    } else {
        return console.error(`Missing property(s) in /src/commands/${file}`);
    };
});

client.on(`ready`, async () => {
    console.log(`Refreshing application (/) commands.`);

    await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: commands }
    ).catch((error) => { return console.error(error) });

    console.log(`Successfully loaded ${commands.length} application (/) commands.`)
});

client.on(`interactionCreate`, async (interaction) => {
    command = client.commands.get(interaction.commandName);

    try {
        if (interaction.isCommand) {
            command.execute(interaction);
        }
    } catch (error) {
        console.error(error);
        await interaction.reply(`An error occured upon executing the command.`, { ephemeral: true })
    }
});