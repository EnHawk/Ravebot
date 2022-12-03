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

const exampleCommand = {
    data: new Discord.SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Shows the Websocket's ping.`),
    execute: async (i) => {
        const ping = client.ws.ping;
        const embed = new Discord.EmbedBuilder()
            .setDescription(`🏓 **Current ping is __${ping}__**`);
        
        if (ping <= 50) {
            embed.setColor(`Green`);
        } else if (ping <= 100) {
            embed.setColor(`Yellow`);
        } else {
            embed.setColor(`Red`);
        };

        await i.reply({ embeds: [ embed ] });
    }
};

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
        { body: [ exampleCommand.data.toJSON() ] }
    ).catch((error) => { return console.error(error) });

    await rest.put(
        Routes.applicationGuildCommands(client.user.id, config.GUILD_ID),
        { body: commands }
    ).catch((error) => { return console.error(error); });

    console.log(`Successfully loaded ${commands.length} application (/) commands.`)
});

client.on(`interactionCreate`, async (interaction) => {
    interaction.reply({ content })
    command = client.commands.get(interaction.commandName);

    try {
        if (interaction.commandName === `ping`) {
            exampleCommand.execute(interaction);
        };
        if (interaction.isCommand) {
            command.execute(interaction);
        }
    } catch (error) {
        console.error(error);
        await interaction.reply(`An error occured upon executing the command.`, { ephemeral: true })
    }
});