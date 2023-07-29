import * as TelegramBot from 'node-telegram-bot-api';
import * as openai from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.API_TOKEN;
const chatId = process.env.CHAT_ID;
const openaiApiKey = process.env.OPENAI_API_KEY;


if (!token || !chatId) {
  console.error('Please set API_TOKEN and CHAT_ID environment variables.');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text;
  
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: openaiApiKey,
    });
    const openai = new OpenAIApi(configuration);

    try {

      const completion = await openai.createCompletion(
        {
          model: "text-davinci-002",
          prompt: userMessage,
          maxTokens: 150
        },
        {
          timeout: 1000
        }
      );

      const response = completion.create;

      const generatedResponse = response.data.choices[0].text;
  
      bot.sendMessage(chatId, generatedResponse);
    } catch (error) {
      console.error('Error generating response:', error);
      bot.sendMessage(chatId, 'Oops, something went wrong. Please try again later.');
    }
  });