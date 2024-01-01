
import ConversationChat from "./ConversationChat";

export default function ConversationList({ messages }) {
    return (
        <div className="relative left-1/2 -translate-x-1/2 md:w-[768px]">
            {messages.map((msg, idx) => (
                <ConversationChat
                    key={idx}
                    sender={msg.sender}
                    text={msg.text}
                    timestamp={msg.timestamp}
                />
            ))}
        </div>
    )
}