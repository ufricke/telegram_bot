import { TelegramBot } from '../src/TelegramBot';
import { AxiosResponse } from 'axios';
import { CreateCompletionResponse } from 'openai';

jest.mock('node-telegram-bot-api');

const mockCreateCompletion = jest.fn(
  () => Promise.resolve({ data: { choices: [{ text: 'Generated response' }] } }) as Promise<AxiosResponse<CreateCompletionResponse, any>>
);

describe('TelegramBot', () => {
  let bot: TelegramBot;
  beforeEach(() => {
    bot = new TelegramBot('YOUR_BOT_TOKEN', 'YOUR_OPENAI_API_KEY');
    (bot as any).openai.createCompletion = mockCreateCompletion;
  });

  it('should call createCompletion with the correct prompt', async () => {
    await (bot as any).handleMessage(123456, 'Test message');
    expect(mockCreateCompletion).toHaveBeenCalledWith(
      expect.objectContaining({
        model: 'text-davinci-003',
        prompt: 'Test message',
      }),
      expect.anything()
    );
  });
});
