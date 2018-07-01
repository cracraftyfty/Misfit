const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/ping') {
    	message.reply('YO CADET! Dont ever try to type Ping again or U will be Shot in Head!!');
  
});
    
 client.on('message',message => {
     if (messsge.content === '/help') {
         message.reply ('Type /ping to get a reply');
     
     });
           // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
    
    
