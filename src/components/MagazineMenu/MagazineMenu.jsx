import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import classes from './MagazineMenu.module.css';

import Zaglushka from "../Zaglushka/Zaglushka";
import SellerIdSettings from "../SellerIdSettings/SellerIdSettings";

function MagazineMenu() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.navWrapper}>
                <h2>Настройки магазина</h2>
                <Link to="sellerIdpersonal">Seller ID, TOKEN</Link>
                <Link to="productsettings">Настройка товара</Link>
                <Link to="ordersettings">Настройка заказов</Link>
                <Link to="eventlog">Журнал событий</Link>
                <Link to="seal">Печать</Link>
            </div>
            <div className={classes.contentWrapper}>
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