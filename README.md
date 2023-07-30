# Telegram OpenAI Bot

This repository contains a simple example of a Telegram bot written in TypeScript. The bot uses the davinci openai model to formulate responses.

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
    Add your API tokens to the `.env` file:
    ```
    API_TOKEN=YOUR_API_TOKEN
    OPEN_AI_API_KEY=YOUR_OPENAI_API_KEY
    ```
    Replace YOUR_API_TOKEN and YOUR_OPENAI_API_KEY with your actual tokens.

4. Run the Bot:
    ```bash
    tsc
    node dist/src/app.js
    ```
    The bot should now be running and will use chatgpt to answer questions.

## How to Get Your API Tokens
To obtain your API tokens, follow these steps:

1. Create a Telegram bot by talking to the BotFather on Telegram.
2. The BotFather will provide you with the bot API token.
3. To get your OpenAI API token, login to your openai account to create it.