const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
      .setName('ban')
      .setDescription('Ban a user from the server.')
      .addUserOption((option) => option.setName('user').setDescription('The user to ban').setRequired(true)),
    async execute(interaction) {
      if (!interaction.member.permissions.has('BAN_MEMBERS')) {
        return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
      }
  
      const userToBan = interaction.options.getUser('user');
  
      try {
        await interaction.guild.members.ban(userToBan);
        const embed = new EmbedBuilder()
          .setColor('#FF0000')
          .setTitle('Member Banned')
          .setDescription(`${userToBan.username} has been banned.`)
          .setTimestamp();
  
        interaction.reply({ embeds: [embed], ephemeral: true });
      } catch (error) {
        console.error('Error banning user:', error);
        interaction.reply({ content: 'An error occurred while trying to ban the user.', ephemeral: true });
      }
    },
  };