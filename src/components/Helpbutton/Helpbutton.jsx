import React from "react";
import logo from "../../img/help.svg";
import classes from './Helpbutton.module.css';

function Helpbutton() {
    return (
        <button className={classes.help}>
            <img src={logo} alt="logo"></img>
        </button>
    )
}

export default Helpbutton;