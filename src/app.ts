import { TelegramBot } from './TelegramBot';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.API_TOKEN;
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!token || !openaiApiKey) {
  throw new Error('Tokens not set in environment variables.');
}

const bot = new TelegramBot(token, openaiApiKey);
bot.start();