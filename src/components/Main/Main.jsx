import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import classes from './Main.module.css';

import OzoneSettings from "../OzoneSettings/OzoneSettings";
import WildberriesSettings from "../WildberriesSettings/WildberriesSettings"
import Zaglushka from "../Zaglushka/Zaglushka";
import MainHelloMenu from "../MainHelloMenu/MainHelloMenu";

import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";
import SettingsSuccessWindow from "../SettingsSuccessWindow/SettingsSuccessWindow";
import SettingsComplete from "../SettingsComplete/SettingsComplete";

function Main() {  
    return (
        <div className={classes.main}>
            <Routes>
                <Route path="/" element={<MainHelloMenu/>}/>
                <Route path="/ozonesettings/*" element={<OzoneSettings/>}/>
                <Route path="/wildberriessettings" element={<WildberriesSettings/>}/>
            </Routes>
            <UserDropDownMenu/>
            <SettingsSuccessWindow/>
            <SettingsComplete/>
            

                 
        
        </div>
    )
}

export default Main;