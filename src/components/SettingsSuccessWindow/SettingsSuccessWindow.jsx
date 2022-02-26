import React from "react";
import { useSelector } from "react-redux";


import classes from './SettingsSuccessWindow.module.css';

import success from "../../img/succesFinal.png";


const menuSuccesActive = classes.wrapper + ' ' + classes.active;

function SettingsSuccessWindow() {
    const active = useSelector(state=>state.succesLoginWindow);
    return (
        <div className={active?menuSuccesActive:classes.wrapper}>
            <div>Вход успешно выполнен!</div>
            <img src={success} className={classes.imgSuccess} alt="" />
        </div>
    )
}

export default SettingsSuccessWindow;