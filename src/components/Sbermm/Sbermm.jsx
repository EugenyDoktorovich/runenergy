import React from "react";
import logo from "../../img/sbermm.png";
import classes from './Sbermm.module.css';
import { Link } from "react-router-dom";

function Sbermm() {
    return (
        <Link to="/sbermmsettings" className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.sbermmInteger}>3367</div>
        </Link>
    )
}

export default Sbermm;