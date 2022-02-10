import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import classes from './Main.module.css';

import OzoneSettings from "../OzoneSettings/OzoneSettings";
import WildberriesSettings from "../WildberriesSettings/WildberriesSettings"
import Zaglushka from "../Zaglushka/Zaglushka";

import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";

function Main() {
    return (
        <div className={classes.main}>
            <Routes>
                <Route path="/" element={<Zaglushka/>}/>
                <Route path="/ozonesettings/*" element={<OzoneSettings/>}/>
                <Route path="/wildberriessettings" element={<WildberriesSettings/>}/>
            </Routes>
            <UserDropDownMenu/>
            
        
        </div>
    )
}

export default Main;