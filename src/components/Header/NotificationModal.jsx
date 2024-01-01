import reactLogo from "../../assets/react.svg";

export default function NotificationModal({ toggleNotif, setToggleNotif }) {
    return (
        <>
            <div onClick={() => setToggleNotif(!toggleNotif)} className="fixed w-screen h-screen top-0 left-0 z-10" ></div>

            <div className="notif absolute top-[70px] h-auto rounded-md z-10 bg-slate-600 dark:bg-slate-700 dark:after:border-t-slate-700 right-3 w-[350px] cursor-pointer">
                <p className="font-bold tracking-wider px-5 py-2 ">Notifications</p>
                <a href="https://github.com/hamdanzull/react-openai" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center gap-3 px-5 py-3 hover:bg-slate-500 dark:hover:bg-slate-600 ">
                        <img src={reactLogo} alt="React" className="bg-slate-600 p-2 rounded-full h-9 w-9" />
                        <p>This is my first project in understanding React</p>
                    </div>
                </a>
                <a href="#">
                    <p className="text-center py-2 text-sky-500">See All</p>
                </a>
            </div>
        </>
    )
}