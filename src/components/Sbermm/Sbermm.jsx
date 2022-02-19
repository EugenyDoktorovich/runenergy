import React from "react";

import './Sbermm.css';
import { Link,NavLink } from "react-router-dom";

function Sbermm() {
    return (
        <NavLink to="/forauthuser/sbermmsettings" className={({ isActive }) =>
        isActive ? 'marketPlaceRefButtonSberm active' : 'marketPlaceRefButtonSberm'
      }>
            Сбермаркет
        </NavLink>
    )
}

export default Sbermm;