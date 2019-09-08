// Made by https://github.com/Parchoquer
// \x1b[37m\x1b[44m[+]\x1b[0m

const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, IDchannel, IDguild } = require('./config.json');


// On éteins le bot si il n'est sur aucun serveur
client.on('ready', () => {
    if (client.guilds.size < 1) {
        console.info(`\n\x1b[37m\x1b[44m[+]\x1b[0m StatistiqueBot n'est sur aucun serveur :( \n[+] Arrêt du script`);
        process.exit(0);
        return;
    }
})


client.on('ready', () => {
    console.info(`\x1b[37m\x1b[44m[+]\x1b[0m ${client.user.tag} Tout est opérationnel!`);
    client.user.setActivity(`Préfix: ${prefix}  |   Je compte les membres! :O`)
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'info') {
        // if (!args.length) {
        //     return message.channel.send(`Vous n'avez fourni aucun argument, ${message.author}!`); // Message d'erreur SI vous n'avez pas fourni un argument dans la commande
        // }
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


client.login(token);