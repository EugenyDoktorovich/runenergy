import React from "react";
import logo from "../../img/ozone.png";
import classes from './Ozone.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";


function Ozone() {

    const ozoneId = useSelector(state=>state.ozoneId);

    return (
        <Link to="/ozonesettings" className={classes.marketPlaceRefButton}>
            <img src={logo} alt="logo"></img>
            <div className={classes.sbermmInteger}>{ozoneId}</div>
        </Link>
    )
}

export default Ozone;