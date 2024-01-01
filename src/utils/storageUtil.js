export function initialMessages() {
    return [
        {
            sender: "ai",
            text: "Hello! How can I assist you today?",
            timestamp: new Date(),
        },
    ];
}

export function restoredMessages() {
    const storedMsg = JSON.parse(localStorage.getItem('messages'));
    return !storedMsg ? null : storedMsg.map((msg) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
    }));
}