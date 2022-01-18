import React from "react";

import classes from './WildberriesSettings.module.css';

function WildberriesSettings() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.idWrapper}>
                <div>ID - идентификатор</div>
                <input disabled="true" type="text" className={classes.input}></input>
            </div>
            <div className={classes.apiWrapper}>
                <div>токен - новый API</div>
                <button className={classes.button}>Редактировать параметры</button>
                <input disabled="true" className={classes.input} type="text"></input>
            </div>
        </div>
    )
}

export default WildberriesSettings;