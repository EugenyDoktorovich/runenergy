import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import classes from './OzoneSettings.module.css';

/* <button  className={classes.button} onClick={addOzoneID}>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button> */

function OzoneSettings() {
   

    const dispatch = useDispatch();

    const ozoneId = useSelector(state=>state.ozoneId);

    let textIput = React.createRef();

    const addOzoneID = () => {
        dispatch({type:'ADD_OZONE_ID', information:information});
        textIput.current.value='';
    }
    let information = '';
    const showInput = (event)=>{
         information= event.target.value;
         
    }
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.idWrapper}>
                <div>Seller ID</div>
                <input type="text" className={classes.input} onInput={showInput} ref={textIput}></input>
            </div>
            <div className={classes.apiWrapper}>
                <div>API - key, ключ, токен</div>
                <button  className={classes.button} onClick={addOzoneID}>Редактировать</button>
                <input disabled="true" className={classes.input} type="text"></input>
            </div>
        </div>
    )
}

export default OzoneSettings;