import React from "react";
import { Routes, Route, Link, NavLink } from 'react-router-dom';

import  './MagazineMenu.css';

import Zaglushka from "../Zaglushka/Zaglushka";
import SellerIdSettings from "../SellerIdSettings/SellerIdSettings";

function MagazineMenu() {
    return (
        <div className='wrapperMagazineMenuPersonal'>
            <div className='navWrapperMagazineMenu'>
                <h2 className='settingsH2'>Настройки магазина</h2>
                <NavLink to="sellerIdpersonal" className={({ isActive }) =>
                    isActive ? 'magazineMenuNavlink active' : 'magazineMenuNavlink'
                  }>&#9658; Seller ID, TOKEN</NavLink>
                <NavLink to="productsettings" className={({ isActive }) =>
                    isActive ? 'magazineMenuNavlink active' : 'magazineMenuNavlink'
                  }>&#9658; Настройка товара</NavLink>
                <NavLink to="ordersettings" className={({ isActive }) =>
                    isActive ? 'magazineMenuNavlink active' : 'magazineMenuNavlink'
                  }>&#9658; Настройка заказов</NavLink>
                <NavLink to="eventlog" className={({ isActive }) =>
                    isActive ? 'magazineMenuNavlink active' : 'magazineMenuNavlink'
                  }>&#9658; Журнал событий</NavLink>
                <NavLink to="seal" className={({ isActive }) =>
                    isActive ? 'magazineMenuNavlink active' : 'magazineMenuNavlink'
                  }>&#9658; Печать</NavLink>
                <NavLink to="deletemagazine" className={({ isActive }) =>
                    isActive ? 'magazineMenuNavlink active' : 'magazineMenuNavlink'
                  }>&#9658; Удалить магазин</NavLink> 
            </div>
            <div className='contentWrapper'>
                <Routes>
                    <Route path="sellerIdpersonal" element={<SellerIdSettings/>}/>
                    <Route path="productsettings" element={<Zaglushka/>}/>
                    <Route path="ordersettings" element={<Zaglushka/>}/>
                    <Route path="eventlog" element={<Zaglushka/>}/>
                    <Route path="seal" element={<Zaglushka/>}/>
                </Routes>
            </div>
        
        </div>
    )
}

export default MagazineMenu;