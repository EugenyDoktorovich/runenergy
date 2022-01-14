import React from "react";
import logo from "../../img/yandexmarket.png";
import classes from './Yandexmarket.module.css';

function Yandexmarket() {
    return (
        <button className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.yandexmarketInteger}>3367</div>
        </button>
    )
}

export default Yandexmarket;