import React from "react";
import { Link,NavLink } from "react-router-dom";


import  './Yandexmarket.css';

function Yandexmarket() {
    return (
        <NavLink to="yandexmarketsettings"className={({ isActive }) =>
        isActive ? 'marketPlaceRefButtonYandex active' : 'marketPlaceRefButtonYandex'
      }>
            Yandexmarket
        </NavLink>
    )
}

export default Yandexmarket;