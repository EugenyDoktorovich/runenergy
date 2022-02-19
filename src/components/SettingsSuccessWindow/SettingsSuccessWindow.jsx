import React from "react";
import { useSelector } from "react-redux";


import classes from './SettingsSuccessWindow.module.css';


const menuSuccesActive = classes.wrapper + ' ' + classes.active;

function SettingsSuccessWindow() {
    const active = useSelector(state=>state.succesLoginWindow);
    return (
        <div className={active?menuSuccesActive:classes.wrapper}>
            Настройки примененены успешно!
        </div>
    )
}

export default SettingsSuccessWindow;