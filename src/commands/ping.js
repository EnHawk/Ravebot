const { Discord, client } = require(`../index`);
// Module imports

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Shows the Websocket's latency.`),
    async execute (i) {
        const ping = client.ws.ping;
        const embed = new Discord.EmbedBuilder()
            .setDescription(`🏓 **Current Ping: __${ping}__**`);
        
        if (ping <= 50) {
            embed.setColor(`Green`);
        } else if (ping <= 100) {
            embed.setColor(`Yellow`);
        } else {
            embed.setColor(`Red`);
        };

        await i.reply({ embeds: [ embed ] });
    }
}
// Module exports