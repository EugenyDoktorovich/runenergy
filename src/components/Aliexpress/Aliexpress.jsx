import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/ali.png";
import classes from './Aliexpress.module.css';

function Aliexpress() {
    return (
        <Link to="/aliexpresssettings" className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.aliexpressInteger}>1278</div>
        </Link>
    )
}

export default Aliexpress;