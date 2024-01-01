import UserChat from "./UserChat";
import AIChat from "./AIChat";

const getTime = (date) => date.toTimeString().slice(0, 5);

export default function ConversationChat({ sender, text, timestamp }) {
    return (
        <div className={`flex gap-2 mt-3 ${sender === "user" ? "justify-end mr-5" : "justify-start ml-5"}`} >
            {sender === "user" ?
                <UserChat text={text} timestamp={getTime(timestamp)} /> :
                <AIChat text={text} timestamp={getTime(timestamp)} />}
        </div>
    )
}