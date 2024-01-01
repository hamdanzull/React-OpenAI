import { useState } from "react";
import NotificationIcon from "./NotificationIcon";
import NotificationModal from "./NotificationModal";

export default function Notification() {
    const [toggleNotif, setToggleNotif] = useState(false);
    return (
        <>
            <NotificationIcon toggleNotif={toggleNotif} setToggleNotif={setToggleNotif} />
            {toggleNotif && <NotificationModal toggleNotif={toggleNotif} setToggleNotif={setToggleNotif} />}
        </>
    )
}