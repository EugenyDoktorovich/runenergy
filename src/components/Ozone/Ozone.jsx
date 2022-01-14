import React from "react";
import logo from "../../img/ozone.png";
import classes from './Ozone.module.css';

function Ozone() {
    return (
        <button className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.sbermmInteger}>3367</div>
        </button>
    )
}

export default Ozone;