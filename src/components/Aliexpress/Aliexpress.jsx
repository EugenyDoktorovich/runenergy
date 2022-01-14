import React from "react";
import logo from "../../img/ali.png";
import classes from './Aliexpress.module.css';

function Aliexpress() {
    return (
        <button className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.aliexpressInteger}>1278</div>
        </button>
    )
}

export default Aliexpress;