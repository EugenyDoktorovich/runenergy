import React from "react";

import avatar from "../../img/avatarPlaceholder.png";
import arrow from "../../img/arrow.svg";


import classes from './UserAuthDropDown.module.css';

function UserAuthDropDown() {
    return (
        <div className={classes.wrapper}>
            <div>it@runenergy</div>
            <img src={avatar} className={classes.avatar}></img>
            <img src={arrow}></img>
        </div>
    )
}

export default UserAuthDropDown;