import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import classes from './OzoneSettings.module.css';

function OzoneSettings() {
    const dispatch = useDispatch();
    const ozoneId = useSelector(state=>state.ozoneId);
    const [name,setName] = useState(ozoneId);
    const [disabled, setDisabled] = useState('disabled');
    const addOzoneID = () => {
        dispatch({type:'ADD_OZONE_ID', id:name})
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.idWrapper}>
                <div>Seller ID</div>
                <input value={name} disabled={disabled} type="text" className={classes.input} onChange={event => setName(event.target.value)} ></input>
            </div>
            <div className={classes.apiWrapper}>
                <div>API - key, ключ, токен</div>
                <button  className={classes.button} onClick={_ => setDisabled(disabled !== null ? null : "disabled")  }>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button>
                <input disabled="true" className={classes.input} type="text"></input>
            </div>
        </div>
    )
}

export default OzoneSettings;