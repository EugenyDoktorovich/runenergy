import React from "react";

import classes from './OzoneSettings.module.css';

function OzoneSettings() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.idWrapper}>
                <div>Seller ID</div>
                <input disabled="true" type="text" className={classes.input}></input>
            </div>
            <div className={classes.apiWrapper}>
                <div>API - key, ключ, токен</div>
                <button className={classes.button}>Редактировать параметры</button>
                <input disabled="true" className={classes.input} type="text"></input>
            </div>
        </div>
    )
}

export default OzoneSettings;