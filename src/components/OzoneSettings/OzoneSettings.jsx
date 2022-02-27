import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link, NavLink } from "react-router-dom";

import Button from '@mui/material/Button';



import './OzoneSettings.css';

import SellerIdSettings from "../SellerIdSettings/SellerIdSettings";
import MagazineMenu from "../MagazineMenu/MagazineMenu";

/* <button  className={classes.button} onClick={addOzoneID}>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button> */



function OzoneSettings() {
    const ozoneMagazines = useSelector(state=>state.ozoneMagazinesData);
    

    
    
    return (
        <div className='wrapper'>
            <div>
                {(ozoneMagazines.length!=0) && ozoneMagazines.map(id =>{
                    return <NavLink to={`${id[0]}`}  className={({ isActive }) =>
                    isActive ? 'addMagazine active' : 'addMagazine'
                  }>{`Магазин ${id[0]}`}</NavLink> 
                })}
                <Link  to="addmagazine" className='addMagazineLink'><Button variant="contained" className='addMagazine'>Добавить магазин</Button></Link>
                 </div> 


            <Routes>
            {(ozoneMagazines.length!=0) && ozoneMagazines.map(id =>{
                    return <Route path={`${id[0]}/*`} element={<MagazineMenu/>}/>
                })}
                <Route path="addmagazine" element={<SellerIdSettings/>}/>
            </Routes>
            
        </div>
    )
}

export default OzoneSettings;