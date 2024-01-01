import { useState } from "react";
import MenuIcon from "./MenuIcon";
import MenuModal from "./MenuModal";

export default function Menu({ theme, handleSetTheme }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <MenuIcon toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            {toggleMenu && <MenuModal
                toggleMenu={setToggleMenu}
                setToggleMenu={setToggleMenu}
                theme={theme}
                handleSetTheme={handleSetTheme}
            />}
        </>
    )
}