import Logo from "./Logo";

export default function Header({ children }) {
    return (
        <header className="bg-slate-600 dark:bg-slate-700 h-[55px] flex justify-center z-10 drop-shadow-[-1px_3px_3px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between w-[768px]">
                <Logo />
                {children}
            </div>
        </header>
    )
}