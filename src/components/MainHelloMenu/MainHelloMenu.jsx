import React from "react";

import classes from './MainHelloMenu.module.css';

import screenshot from '../../img/HelloMenuImage.jpg'


function MainHelloMenu() {

    

    return (
        <div className={classes.wrapper}>
            <div className={classes.info}>
               <div className={classes.title}>RUNENERGY -</div> 
               <div className={classes.titleSecond}>первый, <span className={classes.colorFilter}>самый функциональный</span></div> 
               <div className={classes.titleThird}>и удобный сервис автоматизации учета для селлеров Маркетплейсов.
                    RUNENERGY интегрирует данные со всех Маркетплейсов в единое окно – систему учета МойСклад.
                    Сервис автоматизирует учет, операционные процессы и финансовую аналитику.</div> 
            </div>
            <div className={classes.picture}></div>
            </div>
    )
}

export default MainHelloMenu;