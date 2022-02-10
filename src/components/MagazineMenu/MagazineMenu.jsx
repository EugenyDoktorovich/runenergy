import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import classes from './MagazineMenu.module.css';

import Zaglushka from "../Zaglushka/Zaglushka";


function MagazineMenu() {
    return (
        <div >
            <div className={classes.navWrapper}>
                <h2>Настройки магазина</h2>
                <Link to="sellerIdpersonal">Seller ID, TOKEN</Link>
                <Link to="">Настройка товара</Link>
                <Link to="">Настройка заказов</Link>
                <Link to="">Журнал событий</Link>
                <Link to="">Печать</Link>
            </div>
            <div className={classes.contentWrapper}>
                <Routes>
                <Route path="sellerIdpersonal" element={<Zaglushka/>}/>
                </Routes>
            </div>
        
        </div>
    )
}

export default MagazineMenu;