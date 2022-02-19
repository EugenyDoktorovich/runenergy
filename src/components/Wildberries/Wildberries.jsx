import React from "react";
import { Routes, Route, Link,NavLink } from 'react-router-dom';


import './Wildberries.css';


function Wildberries() {
    return (
        <NavLink to="wildberriessettings" className={({ isActive }) =>
        isActive ? 'marketPlaceRefButton active' : 'marketPlaceRefButton'
      }>
            
            Wildberries
        </NavLink>
    )
}




export default Wildberries;