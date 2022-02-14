import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import classes from './SellerIdSettings.module.css';

/* <button  className={classes.button} onClick={addOzoneID}>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button> */

function SellerIdSettings() {
   const navigate = useNavigate();
 /* Логика диспатча для отображения ozonid у Link */
    const dispatch = useDispatch();

    const ozoneId = useSelector(state=>state.ozoneId);

    let textIput = React.createRef();
/* ЭТО ПЕРЕЙДЕТ В МАГАЗЫ */
    
    


    const pushOzoneMagazine = () => {
        if(!newMagazineInfo){
            return
        }
        dispatch({type:'PUSH_OZONE_MAGAZINE',data:newMagazineInfo});
        navigate(`/forauthuser/ozonesettings/${newMagazineInfo}`)
        textIput.current.value='';
    }

    let newMagazineInfo = '';
    const showInput = (event) => {
        newMagazineInfo = event.target.value;
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
    
    return (
        <div className={classes.wrapper}>
            <div className={first?classes.firstStep:firstDisactive}>
                <div className={classes.idWrapper}>
                    <div>Seller ID</div>
                    <input type="text" className={classes.input} onInput={showInput} ref={textIput}></input>
                </div>
                <div className={classes.apiWrapper}>
                    <div>API - key, ключ, токен</div>
                    <Button variant="contained"  className={classes.button} onClick={firstClick}>Редактировать</Button>
                    <input disabled="true" className={classes.input} type="text"></input>
                </div>
            </div>
            <div className={second?secondActive:classes.secondStep}>
                НАСТРОЙКА ТОВАРОВ
                <button onClick={secondClick}  className={classes.button} >Сохранить</button>
            </div>
            <div className={third?thirdActive:classes.thirdStep}>
                НАСТРОЙКА ЗАКАЗОВ
                <button onClick={thirdClick}  className={classes.button} >Сохранить</button>
            </div>
        </div>
    )
}

export default SellerIdSettings;