require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', () => {
  console.log('Bot is running');
});

client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(process.env.TOKEN);