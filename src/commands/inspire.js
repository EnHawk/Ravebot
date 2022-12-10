const { Discord } = require(`../index`);
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
            .setColor(`#2f3136`);

        return await axios.get(`https://zenquotes.io/api/random`)
            .then(res => { return res.data[0] })
            .then(async data => {
                embed.setDescription(`***${data.q}***\n**-${data.a}**`);
                return await i.reply({ embeds: [ embed ] });
            });
    }
};
// Exports