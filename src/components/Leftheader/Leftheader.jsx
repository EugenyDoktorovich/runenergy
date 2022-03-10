import React from "react";
import{ Routes, Route, Link} from 'react-router-dom';

import classes from './Leftheader.module.css';

import logotype from '../../img/logotype.png';

import Ozone from "../Ozone/Ozone";
import Wildberries from "../Wildberries/Wildberries";
import Aliexpress from "../Aliexpress/Aliexpress";
import Sbermm from "../Sbermm/Sbermm";
import Yandexmarket from "../Yandexmarket/Yandexmarket";
import Skladsettings from "../Skladsettings/Skladsettings";



function Leftheader(){
    return (
        <div className={classes.leftheader}>
            {/* <img src={logotype} alt="логотип"/> */}
            {/* <Skladsettings/> */}
            <Ozone/>
            <Wildberries/>
            <Aliexpress/>
            <Sbermm/>
            <Yandexmarket/>


        </div>
    )
}

export default Leftheader;