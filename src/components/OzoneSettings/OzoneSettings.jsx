import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";



import classes from './OzoneSettings.module.css';

import SellerIdSettings from "../SellerIdSettings/SellerIdSettings";
import MagazineMenu from "../MagazineMenu/MagazineMenu";

/* <button  className={classes.button} onClick={addOzoneID}>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button> */



function OzoneSettings() {
    const ozoneMagazines = useSelector(state=>state.ozoneMagazinesData);
    

    
    
    return (
        <div className={classes.wrapper}>
            <div>
                {(ozoneMagazines.length!=0) && ozoneMagazines.map(id =>{
                    return <Link to={`${id}`}><button className={classes.addMagazine}>{id}</button></Link> 
                })}
                <Link to="addmagazine"><button className={classes.addMagazine}>Добавить магазин</button></Link>
                 </div> 


            <Routes>
            {(ozoneMagazines.length!=0) && ozoneMagazines.map(id =>{
                    return <Route path={`${id}/*`} element={<MagazineMenu/>}/>
                })}
                <Route path="addmagazine" element={<SellerIdSettings/>}/>
            </Routes>
            
        </div>
    )
}

export default OzoneSettings;