const { Discord, config } = require(`../index`);
const { warningUser } = require(`../models/strike`);
// Imports

module.exports = {
    scope: `local`,
    category: `moderation`,
    data: new Discord.SlashCommandBuilder()
        .setName(`warn`)
        .setDescription(`Warns a user.`)
        .setDMPermission(false)
        .setDefaultMemberPermissions(Discord.PermissionFlagsBits.ModerateMembers)
        .addUserOption(
            option => option
            .setName(`user`)
            .setDescription(`The user you want to warn.`)
            .setRequired(true)
        )
        .addStringOption(
            option => option
            .setName(`reason`)
            .setDescription(`The reason of the warning`)
            .setRequired(true)
        ),
    async execute (i) {
        const user = i.options.getUser(`user`);
        const reason = i.options.getString(`reason`);
        const warning = await warningUser.findOne({ userId: user.id }) || new warningUser({ userId: user.id });
        const reasonField = {
            name: `Reason`,
            value: reason,
            inline: true
        };
        const logChannel = i.guild.channels.cache.get(config.LOG_CHANNEL_ID);
        const warnEmbed = new Discord.EmbedBuilder()
            .setAuthor({ name: `${user.tag} has been warned.`, iconURL: user.displayAvatarURL() })
            .addFields([ reasonField ])
            .setColor(`#2f3136`);
        const warningEmbed = new Discord.EmbedBuilder()
            .setTitle(`You have been warned in ${i.guild.name}`)
            .setThumbnail(i.guild.iconURL())
            .addFields([ reasonField ])
            .setTimestamp()
            .setColor(`Yellow`);
        const caseEmbed = new Discord.EmbedBuilder()
            .setAuthor({ name: `Warn | ${user.tag}`, iconURL: user.displayAvatarURL() })
            .addFields([
                {
                    name: `User`,
                    value: `${user}`,
                    inline: true
                },
                {
                    name: `Moderator`,
                    value: `${i.member.user}`,
                    inline: true
                },
                reasonField
            ])
            .setFooter({ text: `ID: ${warning._id}` })
            .setTimestamp()
            .setColor(`Yellow`);

        warning.warnings += 1;
        warning.save();

        await i.reply({ embeds: [ warnEmbed ] });
        user.send({ embeds: [ warningEmbed ] });
        logChannel.send({ embeds: [ caseEmbed ] });
    }
};