import React from "react";

import classes from './UserDropDownMenu.module.css';
import { useSelector } from "react-redux";
const menuWithActive = classes.wrapper + ' ' + classes.active;

function UserDropDownMenu() {
    const active = useSelector(state=>state.active);
    return (
        <div className={active?menuWithActive:classes.wrapper}>
            <div className={classes.element}>Настройки пользователя</div>
            <div className={classes.element}>Спецпредложения</div>
            <div className={classes.element}>Настройки</div>
            <div className={classes.element}>Выход</div>
        </div>
    )
}

export default UserDropDownMenu;