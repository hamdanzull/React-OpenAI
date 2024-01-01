import menuIcon from "../../assets/menu.svg";

export default function MenuIcon({ toggleMenu, setToggleMenu }) {
    return (
        <div onClick={() => setToggleMenu(!toggleMenu)} className="flex items-center justify-center w-10 h-10 cursor-pointer" >
            <img src={menuIcon} alt="Menu" className="h-[50%]" />
        </div>
    )
}