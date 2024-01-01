import notifIcon from "../../assets/bell.svg";

export default function NotificationIcon({ toggleNotif, setToggleNotif }) {
    return (
        <div
            className="relative flex items-center justify-center w-10 h-10 cursor-pointer"
            onClick={() => setToggleNotif(!toggleNotif)}
        >
            <img src={notifIcon} alt="Notif" className="h-[60%]" />
            <span className="absolute flex h-2 w-2 right-1 top-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="absolute inline-flex rounded-full h-full w-full bg-sky-400"></span>
            </span>
        </div>
    )
}