import ThemeToggle from "./ThemeToggle";

export default function MenuModal({ toggleMenu, setToggleMenu, theme, handleSetTheme }) {
    return (
        <>
            <div onClick={() => setToggleMenu(!toggleMenu)} className="fixed w-screen h-screen top-0 left-0 z-10"></div>

            <ul className="menu list-group absolute top-[70px] rounded-md z-10 bg-slate-600 dark:bg-slate-700 dark:after:border-t-slate-700 right-3">
                <a href="https://github.com/hamdanzull/" target="_blank" rel="noopener noreferrer">
                    <li className="list-group-item w-[175px] px-5 py-3 hover:bg-slate-500 dark:hover:bg-slate-600 rounded-t-md">
                        Profile
                    </li>
                </a>
                <a href="https://github.com/hamdanzull/react-openai" target="_blank" rel="noopener noreferrer" >
                    <li className="list-group-item w-[175px] px-5 py-3 hover:bg-slate-500 dark:hover:bg-slate-600 ">
                        About
                    </li>
                </a>
                <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" >
                    <li className="list-group-item w-[175px] px-5 py-3 hover:bg-slate-500 dark:hover:bg-slate-600 ">
                        API Key
                    </li>
                </a>
                <a href="https://platform.openai.com/docs/overview" target="_blank" rel="noopener noreferrer">
                    <li className="list-group-item w-[175px] px-5 py-3 hover:bg-slate-500 dark:hover:bg-slate-600 ">
                        Get Started
                    </li>
                </a>
                <li className="list-group-item w-[175px] px-5 pr-3 py-3 hover:bg-slate-500 dark:hover:bg-slate-600  rounded-b-md flex items-center justify-between cursor-pointer" onClick={handleSetTheme}>
                    <span className="text-base">Theme</span>
                    <ThemeToggle theme={theme} />
                </li>
            </ul>
        </>
    )
}