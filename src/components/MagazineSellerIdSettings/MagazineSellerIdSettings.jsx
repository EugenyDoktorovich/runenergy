import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import nextId from "react-id-generator";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import classes from './MagazineSellerIdSettings.module.css';

/* <button  className={classes.button} onClick={addOzoneID}>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button> */

function MagazineSellerIdSettings() {
   const navigate = useNavigate();
 /* Логика диспатча для отображения ozonid у Link */
    const dispatch = useDispatch();

    const ozoneId = useSelector(state=>state.ozoneId);

    let textIput = React.createRef();
    let textInputSecond = React.createRef();
/* ЭТО ПЕРЕЙДЕТ В МАГАЗЫ */
    
    


    const pushOzoneMagazine = () => {
        if(!newMagazineInfo){
            return
        }
        dispatch({type:'PUSH_OZONE_MAGAZINE',data:[newMagazineInfo,newMagazinInfoSecond]});
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



   /*  let nextId() = {
        id:newMagazineInfo,
        token:newMagazineInfo
    }
     */

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
                    <div className={classes.sellerIdPar}>Seller ID</div>
                    <input type="text" className={classes.input} onInput={showInput} ref={textIput}></input>
                </div>
                <div className={classes.apiWrapper}>
                    <div className={classes.sellerIdPar}>API - key, ключ, токен</div>
                    <Button variant="contained"  className={classes.button} onClick={firstClick}>Редактировать</Button>
                    <input className={classes.input} onInput={showInputSecond} type="text" ref={textInputSecond}></input>
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

export default SellerIdSettings;