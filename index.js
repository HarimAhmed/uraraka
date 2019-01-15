const config = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online! :)`);
});

bot.on('message', message => {
    if (message.content === 'ping'){
        message.channel.send('Pong! :)')
    }
});
bot.login(config.token);