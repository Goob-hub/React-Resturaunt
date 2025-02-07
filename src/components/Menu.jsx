import React from "react";
import MenuItem from "./MenuItem"

function Menu() {
    /* 
    --------------------------
    How the menu should work:
    --------------------------

    1. Connect to backend postgres database to get access to menu items
    2. Map out menu item data from array to menu item component using props
    
    */
    return <section>
        <MenuItem />
    </section>
}

export default Menu;