const { Discord, mongoose } = require(`../index`);
const { balanceUser } = require(`../models/economy`);
// Imports

module.exports = {
    scope: `global`,
    category: `economy`,
    data: new Discord.SlashCommandBuilder()
        .setName(`balance`)
        .setDescription(`Shows your balance or someone's balance`)
        .addUserOption(
            option => option
            .setName(`user`)
            .setDescription(`Show the balance of the mentioned user.`)
        ),
    async execute (i) {
        const user = i.options.getUser(`user`) || i.user;
        const balance = await balanceUser.findOne({ userId: user.id }) || new balanceUser({ userId: user.id });
        const embed = new Discord.EmbedBuilder()
            .setTitle(`${user.username}'s balance`)
            .setURL(`https://youtu.be/CK_BCMA9yoY`)
            .addFields([
                {
                    name: `Wallet`,
                    value: `\`$ ${balance.wallet}\``,
                    inline: true
                },
                {
                    name: `Bank`,
                    value: `\`$ ${balance.bank}\``,
                    inline: true
                }
            ])
            .setColor(`#2f3136`);
        
        await i.reply({ embeds: [ embed ] });
    }
};
// Exports