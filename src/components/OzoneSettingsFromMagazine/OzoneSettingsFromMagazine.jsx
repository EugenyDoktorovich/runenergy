import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import nextId from "react-id-generator";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import classes from './OzoneSettingsFromMagazine.module.css';

/* <button  className={classes.button} onClick={addOzoneID}>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button> */

function OzoneSettingsFromMagazine() {
   const navigate = useNavigate();
 /* Логика диспатча */
    const dispatch = useDispatch();

    const ozoneId = useSelector(state=>state.ozoneId);

    let textIput = React.createRef();
    let textInputSecond = React.createRef();

    
    


    const pushOzoneMagazine = () => {
        if(!newMagazineInfo){
            return
        }
        dispatch({type:'UPDATE_OZONE_MAGAZINE',data:[newMagazineInfo,newMagazinInfoSecond]});
        navigate(`/forauthuser/ozonesettings/${newMagazineInfo}`)
        textIput.current.value='';
    }

    let newMagazineInfo = '';
    const showInput = (event) => {
        newMagazineInfo = event.target.value;
    }

    let newMagazinInfoSecond = '';
    const showInputSecond = (event) => {
        newMagazinInfoSecond = event.target.value;
    }


    let nextId = {
        id:newMagazineInfo,
        token:newMagazineInfo
    }
   

    /* Через хук в обход редакс */
    const firstClick = () => {
        pushOzoneMagazine();
        setFirst(false);
        setSecond(true);
        
    }

    const secondClick = () => {
        setSecond(false);
        setThird(true);
    }

    const thirdClick = () => {
        setFirst(true);
        setThird(false);
        
    }


    const firstDisactive = classes.firstStep+ ' ' + classes.active;
    const secondActive = classes.secondStep + ' ' + classes.active;
    const thirdActive = classes.thirdStep + ' ' + classes.active;

    const [first,setFirst] = useState(true);
    const [second,setSecond] = useState(false);
    const [third,setThird] = useState(false);

    const firstInputValue = useSelector(state=>state.ozoneMagazinesData[0][0]);
    const secondInputValue = useSelector(state=>state.ozoneMagazinesData[0][1]);
    
    return (
        <div className={classes.wrapper}>
            <div className={first?classes.firstStep:firstDisactive}>
            <div className={classes.help}>Введите новые значения, а затем нажмите кнопку сохранить изменения.</div>
                <div className={classes.idWrapper}>
                    <div className={classes.sellerIdPar}>Seller ID</div>
                    <input type="text" className={classes.input} onInput={showInput} ref={textIput} defaultValue={firstInputValue}></input>
                </div>
                <div className={classes.apiWrapper}>
                    <div className={classes.sellerIdPar}>API - key, ключ, токен</div>
                    <Button variant="contained"  className={classes.button} onClick={firstClick}>Сохранить изменения</Button>
                    <input className={classes.input} onInput={showInputSecond} type="text" ref={textInputSecond} defaultValue={secondInputValue}></input>
                </div>
            </div>
            <div className={second?secondActive:classes.secondStep}>
                НАСТРОЙКА ТОВАРОВ
                <Button variant="contained" onClick={secondClick}  className={classes.button} >Сохранить</Button>
            </div>
            <div className={third?thirdActive:classes.thirdStep}>
                НАСТРОЙКА ЗАКАЗОВ
                <Button variant="contained" onClick={thirdClick}  className={classes.button} >Сохранить</Button>
            </div>
        </div>
    )
}

export default OzoneSettingsFromMagazine;