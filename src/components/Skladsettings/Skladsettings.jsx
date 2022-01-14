import React from "react";
import logo from "../../img/indicators.svg";
import classes from './Skladsettings.module.css';

function Skladsettings() {
    return (
        <button className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.sklad}>Настройка склада</div>
        </button>
    )
}

export default Skladsettings;