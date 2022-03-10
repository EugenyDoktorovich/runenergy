import React from "react";

import classes from './MainHelloMenu.module.css';

import screenshot from '../../img/HelloMenuImage.jpg'


function MainHelloMenu() {

    

    return (
        <div className={classes.wrapper}>
            <div className={classes.info}>
               <div>RUNENERGY -</div> 
               <div>первый, самый функциональный</div> 
               <div>и удобный сервис автоматизации учета для селлеров Маркетплейсов.
                    RUNENERGY интегрирует данные со всех Маркетплейсов в единое окно – систему учета МойСклад.
                    Сервис автоматизирует учет, операционные процессы и финансовую аналитику.</div> 
            </div>
            <div className={classes.picture}><img src={screenshot}></img></div>
            </div>
    )
}

export default MainHelloMenu;