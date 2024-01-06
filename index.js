const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('Botunuzun Tokeni');

client.user.setActivity('Botunuzun durumunda burada yazan şey yazar buraya istediğiniz bir şeyi ekleyin', { type: 'PLAYING' });

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

//bot Siz !ping diyince bot pong der

client.on('message', message => {
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({ reason: 'Banned via bot command' }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('Bu kişi sunucuda değil');
      }
    } else {
      message.reply('bu komutu kullanacak iznin yok');
    }
  }
});