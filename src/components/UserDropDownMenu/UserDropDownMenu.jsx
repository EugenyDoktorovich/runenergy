import React from "react";

import classes from './UserDropDownMenu.module.css';

function UserDropDownMenu() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.element}>Настройки пользователя</div>
            <div className={classes.element}>Спецпредложения</div>
            <div className={classes.element}>Настройки</div>
            <div className={classes.element}>Выход</div>
        </div>
    )
}

export default UserDropDownMenu;