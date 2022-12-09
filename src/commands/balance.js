const { Discord, mongoose } = require(`../index`);
const User = require(`../schemas/balance`);
// Imports

module.exports = {
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
        const balance = await User.findOne({ userId: user.id }) || new User({ userId: user.id, wallet: 0, bank: 0 });
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
            .setColor(`DarkButNotBlack`);
        
        await i.reply({ embeds: [ embed ] });
    }
}