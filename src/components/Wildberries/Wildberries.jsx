import React from "react";
import logo from "../../img/wildberries.png";
import classes from './Wildberries.module.css';
import classNames from 'classnames';

function Wildberries() {
    return (
        <button className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.wildberriesInteger}>5489</div>
        </button>
    )
}

export default Wildberries;