import { useState } from "react"
import ClearChatIcon from "./ClearChatIcon";
import ClearChatModal from "./ClearChatModal";
import { initialMessages } from "../../utils/storageUtil";

export default function ClearChat({ setMessages }) {
    const [toggleClear, setToggleClear] = useState(false);

    function handleClear() {
        localStorage.removeItem('messages');
        setMessages(initialMessages);
        setToggleClear(!toggleClear);
    }
    return (
        <>
            <ClearChatIcon toggleClear={toggleClear} setToggleClear={setToggleClear} />
            {toggleClear && <ClearChatModal
                toggleClear={toggleClear}
                setToggleClear={setToggleClear}
                handleClear={handleClear}
            />}
        </>
    )
}