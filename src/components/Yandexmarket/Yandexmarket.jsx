import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/yandexmarket.png";
import classes from './Yandexmarket.module.css';

function Yandexmarket() {
    return (
        <Link to="/forauthuser/yandexmarketsettings" className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.yandexmarketInteger}>3367</div>
        </Link>
    )
}

export default Yandexmarket;