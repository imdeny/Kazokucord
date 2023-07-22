const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns latency and API ping.'),
    
    async execute(interaction){
        const posibleAnswers = [
            '192.0.0.1',
            'Russia',
            'your router',
            'ISS',
            'your brain',
            'the server',
            'the mainframe',
            'nsa servers',
            'chinese servers',
            'HentaiHaven',
            'the botnet',
            'SpaceX rocket',
            'PornHub',
            'SnapChat servers',
            'a random goat farm',
            'NASA',
            'my AI overlord',
            'the google dns',
            'the NBC satellite',
            'localhost',
            '1.3.3.7',
            'Discord API',
            'an alien supercomputer',
            'Twitch.tv',
            'Wakanda',
            '<insert funny ping location here>',
            'nigerian astronaut'
        ];
        const randomIndex = Math.floor(Math.random() * posibleAnswers.length);
        const sent = await interaction.reply(`Pinging....`);
        sent.edit(`It took \`${Math.round(interaction.client.ws.ping)}ms\` to ping **${posibleAnswers[randomIndex]}**`);
    }
}