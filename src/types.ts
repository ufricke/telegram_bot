interface OpenAIResponse {
    data: {
        choices: {
            text: string;
        }[];
    };
}

export { OpenAIResponse };
