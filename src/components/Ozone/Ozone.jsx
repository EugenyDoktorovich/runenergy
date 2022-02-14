import React from "react";
import logo from "../../img/ozone.png";
import './Ozone.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";


function Ozone() {

    

    return (
        <NavLink to="ozonesettings" className={({ isActive }) =>
        isActive ? 'marketPlaceRefButton active' : 'marketPlaceRefButton'
      }>
            Ozone
        </NavLink>
    )
}

export default Ozone;