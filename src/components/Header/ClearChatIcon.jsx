import clearIcon from "../../assets/clear.svg";

export default function ClearChatIcon({ toggleClear, setToggleClear }) {
    return (
        <div onClick={() => setToggleClear(!toggleClear)} className="flex items-center justify-center w-10 h-10 cursor-pointer" >
            <img src={clearIcon} alt="Clear Chat" className="h-[50%]" />
        </div>
    )
}