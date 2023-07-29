import * as TelegramBot from 'node-telegram-bot-api';

const token = process.env.API_TOKEN;
const chatId = process.env.CHAT_ID;

if (!token || !chatId) {
  console.error('Please set API_TOKEN and CHAT_ID environment variables.');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

const messageText = 'hello from your nice bot!';

bot.sendMessage(chatId, messageText)
  .then(() => {
    console.log('Message sent successfully!');
  })
  .catch((error: any) => {
    console.error('Error sending message:', error.message);
  });