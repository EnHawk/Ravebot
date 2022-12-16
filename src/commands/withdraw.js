const { Discord, config } = require(`../index`);
const User = require(`../models/economy`);
// Imports

module.exports = {
    scope: `global`,
    category: `economy`,
    data: new Discord.SlashCommandBuilder()
        .setName(`withdraw`)
        .setDescription(`Withdraw your bank balance`)
        .addIntegerOption(
            option => option
            .setName(`amount`)
            .setDescription(`The amount of money you want to withdraw.`)
            .setRequired(true)
        ),
    async execute (i) {
        const userId = i.user.id;
        const balance = await User.findOne({ userId });
        const amount = i.options.getInteger(`amount`);
        const wallet = balance.wallet;
        const bank = balance.bank;
        const successEmbed = new Discord.EmbedBuilder()
            .setTitle(`Successfully withdrawn \`\`$ ${amount}\`\`.`)
            .setTimestamp()
            .setColor(config.EMBED_COLOR);

        const failEmbed = new Discord.EmbedBuilder()
            .setTitle(`Not enough balance`)
            .setColor(`Red`);

        if (bank < amount) return await i.reply({ embeds: [ failEmbed ], ephemeral: true });

        await User.updateOne(
            { userId },
            {
                bank: bank - amount,
                wallet: wallet + amount,
                __v: balance.__v + 1
            }
        );

        successEmbed.addFields([
            {
                name: `Wallet`,
                value: `\`\`$ ${wallet}\`\` *+${amount}*`,
                inline: true
            },
            {
                name: `Bank`,
                value: `\`\`$ ${bank}\`\` *-${amount}*`,
                inline: true
            }
        ]);

        await i.reply({ embeds: [ successEmbed ] });
    }
};
// Exports