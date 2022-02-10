import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";



import classes from './SellerIdSettings.module.css';

/* <button  className={classes.button} onClick={addOzoneID}>{disabled !== null ? "Редактировать параметры" : "Сохранить"}</button> */

function SellerIdSettings() {
   
 /* Логика диспатча для отображения ozonid у Link */
    const dispatch = useDispatch();

    const ozoneId = useSelector(state=>state.ozoneId);

    let textIput = React.createRef();
/* ЭТО ПЕРЕЙДЕТ В МАГАЗЫ */
    
    


    const pushOzoneMagazine = () => {
        dispatch({type:'PUSH_OZONE_MAGAZINE',data:newMagazineInfo});
        textIput.current.value='';
    }

    let newMagazineInfo = '';
    const showInput = (event) => {
        newMagazineInfo = event.target.value;
    }

    

    /* Попытка сделать через хук в обход редакс */
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
                    <button  className={classes.button} onClick={firstClick}>Редактировать</button>
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