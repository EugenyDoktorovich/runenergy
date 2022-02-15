import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";

import Button from '@mui/material/Button';



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
                    return <Link to={`${id}`} className={classes.adedMagazineWrapper}><Button variant="contained" className={classes.addMagazine}>{id}</Button></Link> 
                })}
                <Link  to="addmagazine" className={classes.addMagazineLink}><Button variant="contained" className={classes.addMagazine}>Добавить магазин</Button></Link>
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