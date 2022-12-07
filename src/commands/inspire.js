const { Discord } = require(`../index`);
const axios = require(`axios`).default;
// Module imports

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName(`inspire`)
        .setDescription(`Tells a motivational quotes`),
    async execute (i) {
        const quote = await axios.get(`https://zenquotes.io/api/random`)
            .then(res => { return res.data })
            .then(data => { return `*${data[0].q}*\n-${data[0].a}` });
        const embed = new Discord.EmbedBuilder()
            .setDescription(quote)
            .setColor(`DarkButNotBlack`);
        
        await i.reply({ embeds: [ embed ] });
    }
}