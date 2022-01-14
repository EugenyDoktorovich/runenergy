import React from "react";
import logo from "../../img/bell.svg";
import classes from './NewsBellButton.module.css';

function NewsBellButton() {
    return (
        <button className={classes.bell}>
            <img src={logo} alt="logo"></img>
        </button>
    )
}

export default NewsBellButton;