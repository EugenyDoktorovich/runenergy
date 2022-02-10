import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import logo from "../../img/wildberries.png";

import classes from './Wildberries.module.css';

import classNames from 'classnames';

function Wildberries() {
    return (
        <Link to="/forauthuser/wildberriessettings" className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.wildberriesInteger}>5489</div>
        </Link>
    )
}

export default Wildberries;