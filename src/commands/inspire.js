const { Discord, config } = require(`../index`);
const axios = require(`axios`).default;
// Imports

module.exports = {
    scope: `global`,
    category: `other`,
    data: new Discord.SlashCommandBuilder()
        .setName(`inspire`)
        .setDescription(`Tells a motivational quotes`),
    async execute (i) {
        const embed = new Discord.EmbedBuilder()
            .setColor(config.EMBED_COLOR);

        await axios.get(`https://zenquotes.io/api/random`)
            .then(res => { return res.data[0] })
            .then(async data => {
                embed.setDescription(`***${data.q}***\n**-${data.a}**`);
                await i.reply({ embeds: [ embed ] });
            });
    }
};
// Exports