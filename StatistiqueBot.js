// Made by https://github.com/Parchoquer

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, IDchannel, IDguild } = require('./config.json');
require('dotenv').config()


client.on('ready', () => {
    if (client.guilds.size < 1) {
        console.info(`\n\x1b[37m\x1b[44m[+]\x1b[0m StatistiqueBot n'est sur aucun serveur :( \n\x1b[37m\x1b[44m[+]\x1b[0m Arrêt du bot !`);
        process.exit(0);
        return;
    }
})

const activityList = ["-info", "https://github.com/Parchoquer", "JavaScript", "Statistique"]
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activityList.length - 1) + 1);
        client.user.setActivity(activityList[index]);
    }, 5000); // 5 sec

    console.info(`\x1b[37m\x1b[44m[+]\x1b[0m ${client.user.tag} Tout est opérationnel!`);
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'info') {
        message.channel.send (`:small_blue_diamond: Nom de la guilde: ${message.guild.name}\n:small_blue_diamond: Membre total: ${message.guild.memberCount}`);
    }
});


client.on('guildMemberAdd', member => {
    if (member.guild.id !== IDguild) return;
    client.channels.get(IDchannel).setName(`[+] Membre Total:  ${member.guild.memberCount}`);
});


client.on('guildMemberRemove', member => {
    if (member.guild.id !== IDguild) return;
    client.channels.get(IDchannel).setName(`[+] Membre Total:  ${member.guild.memberCount}`);
});

if (process.env.TOKEN) client.login(process.env.TOKEN);
else client.login(token);