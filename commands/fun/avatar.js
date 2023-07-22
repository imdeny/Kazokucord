const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("Displays user's avatar.")
    .addUserOption(option =>
        option
                .setName('user')
                .setDescription('The user.')
                .setRequired(true)
    ),
    
    async execute(interaction){

        const target = interaction.options.getUser('user');

        const embed = new EmbedBuilder()
        .setTitle(target.username)
        .setColor("DarkRed")
        .setImage(`${target.displayAvatarURL({size: 1024, format: 'png', dynamic: true})}`)
        
        interaction.reply({
            embeds: [embed]
        })
    }
}