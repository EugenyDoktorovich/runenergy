import React from "react";
import logo from "../../img/sbermm.png";
import classes from './Sbermm.module.css';

function Sbermm() {
    return (
        <button className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.sbermmInteger}>3367</div>
        </button>
    )
}

export default Sbermm;