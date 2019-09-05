const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`\n[+] ${client.user.tag} Tout opérationnel!`);
});

//On éteins le bot si il n'est sur aucun serveur
client.on('ready', () => {
    if (client.guilds.size < 1) {
        console.log('\n[+] StatistiqueBot n`est sur aucun serveur :( \n[+] Arrêt du script');
        process.exit(0);
        return;
    }

})

//Si le client dit 'ping' le bot répond 'pong'
client.on('message', msg =>{
    if (msg.content === 'ping') {
        msg.reply('pong');n
    }
});


client.login('NjE4OTY2ODE4MTE1MTU4MDM3.XXBb9w._Y6cSs8-6jCy7-ggbWpffHccBxo');