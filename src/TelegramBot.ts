
import * as TelegramBotAPI from 'node-telegram-bot-api';
import Bottleneck from 'bottleneck';
import { OpenAIResponse } from './types';
import { OpenAIApi } from 'openai';


class TelegramBot {
  private bot: TelegramBotAPI;
  private openai: OpenAIApi;
  private limiter: Bottleneck;

  constructor(token: string, openaiApiKey: string) {
    this.openai = this.openAI(openaiApiKey)
    this.bot = new TelegramBotAPI(token, { polling: true });
    this.limiter = new Bottleneck({ maxConcurrent: 1, minTime: 1000 });
  }

  private openAI(openaiApiKey: string): OpenAIApi {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: openaiApiKey,
    });

    const openai = new OpenAIApi(configuration);
    return openai;
  }

  public start(): void {
    this.bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      const userMessage = msg.text;

      try {
        const completion = await this.limiter.schedule(() =>
          this.openai.createCompletion(
            {
              model: 'text-davinci-002',
              prompt: userMessage
            },
            {
              timeout: 1000,
            }
          )
        );

        const generatedResponse = completion.data.choices[0].text;
        if(generatedResponse != undefined) {
          this.bot.sendMessage(chatId, generatedResponse);
        }
      } catch (error) {
        console.error('Error generating response:', error);
        this.bot.sendMessage(chatId, 'Oops, something went wrong. Please try again later.');
      }
    });
  }
}

export { TelegramBot };