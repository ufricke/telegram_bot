# Telegram Bot with TypeScript and node-telegram-bot-api

This repository contains a simple example of a Telegram bot written in TypeScript and powered by the `node-telegram-bot-api` library.

## Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.
- A Telegram account to create and interact with the bot.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/ufricke/telegram_bot.git
    cd telegram_bot
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Environment Variables:

    Create a `.env` file in the project root directory.
    Add your Telegram bot API token and chat ID to the `.env` file:
    ```
    API_TOKEN=YOUR_API_TOKEN
    CHAT_ID=YOUR_CHAT_ID
    ```
    Replace YOUR_API_TOKEN and YOUR_CHAT_ID with your actual bot API token and chat ID.

4. Run the Bot:

    ```bash
    npm start
    ```
    The bot should now be running and will send a test message to the specified chat.

## Changing the Message
If you want to send a different message, modify the `messageText` variable in the `src/index.ts` file with your desired content.

## How to Get Your Chat ID and API Token
To obtain your chat ID and API token, follow these steps:

1. Create a Telegram bot by talking to the BotFather on Telegram.
2. The BotFather will provide you with the bot API token.
3. To get your chat ID, start a chat with your bot on Telegram.
4. Use the third-party bot "IDBot" (@userinfobot) and send any message to it.
5. IDBot will reply with information about your Telegram account, including your numeric chat ID.