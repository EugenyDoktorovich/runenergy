import React from "react";
import { useSelector } from "react-redux";


import classes from './SettingsComplete.module.css';

import success from "../../img/succesFinal.png";


const menuSuccesActive = classes.wrapper + ' ' + classes.active;

function SettingsComplete() {
    const active = useSelector(state=>state.settingsCompleteWindow);
    return (
        <div className={active?menuSuccesActive:classes.wrapper}>
            <div>Настройки изменены!</div>
            <img src={success} className={classes.imgSuccess} alt="" />
        </div>
    )
}

export default SettingsComplete;