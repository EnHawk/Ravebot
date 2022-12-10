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
        const quote = await axios.get(`https://zenquotes.io/api/random`)
            .then(res => { return res.data })
            .then(data => { return `***${data[0].q}***\n**-${data[0].a}**` });
        const embed = new Discord.EmbedBuilder()
            .setDescription(quote)
            .setColor(`#2f3136`);
        
        await i.reply({ embeds: [ embed ] });
    }
};
// Exports