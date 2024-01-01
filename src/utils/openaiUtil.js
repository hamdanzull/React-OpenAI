import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
});

export default async function generateResponse(messages, input) {
    const historyMessages = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
    }));

    try {
        const response = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content:
                        "You are a helpful assistant that can understand and generate responses in Markdown.",
                },
                ...historyMessages,
                { role: "user", content: input },
            ],
            model: "gpt-3.5-turbo",
            // max_tokens: 300,
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error calling OpenAI API:", error);

        return "An error occurred while processing your request. Please try again later.";
    }

}