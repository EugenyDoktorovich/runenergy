import React from "react";
import { Link,NavLink } from "react-router-dom";

import logo from "../../img/ali.png";
import './Aliexpress.css';

function Aliexpress() {
    return (
        <NavLink to="aliexpresssettings" className={({ isActive }) =>
        isActive ? 'marketPlaceRefButtonAliexpress active' : 'marketPlaceRefButtonAliexpress'
      }>
           Aliexpress 
            
        </NavLink>
    )
}

export default Aliexpress;