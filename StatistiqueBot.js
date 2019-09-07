// Made by https://github.com/Parchoquer

const Discord = require('discord.js');
const client = new Discord.Client();
const Statserver = {        //On induque l'ID du channel 
    guildID: '577481336898453524',
    totalmembreID: '619695982128529434'
};

//On éteins le bot si il n'est sur aucun serveur
client.on('ready', () => {
    if (client.guilds.size < 1) {
        console.log('\n[+] StatistiqueBot n`est sur aucun serveur :( \n[+] Arrêt du script');
        process.exit(0);
        return;
    }
})

client.on('ready', () => {
    console.log(`\n[+] ${client.user.tag} Tout est opérationnel!`);
});

//Si le client dit 'ping' le bot répond 'pong'
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong!');
    }
});

client.on('guildMemberAdd', member => {
    if (member.guild.id !== Statserver.guildID) return;
    client.channels.get(Statserver.totalmembreID).setName(`Total Membre : ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    if (member.guild.id !== Statserver.guildID) return;
    client.channels.get(Statserver.totalmembreID).setName(`Total Membre : ${member.guild.memberCount}`);
});


client.login('NjE4OTY2ODE4MTE1MTU4MDM3.XXMXyA.Hy6DypRg8k4flOr4neqWvNj39Yg');