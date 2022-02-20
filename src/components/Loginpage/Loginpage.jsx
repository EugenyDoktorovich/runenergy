import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Button from '@mui/material/Button';


import classes from './Loginpage.module.css';




function Loginpage({loginHandler}){

    const dispatch = useDispatch();

    const active = useSelector(state=>state.succesLoginWindow);



    const addActive = () => {
        dispatch({type:"SET_SUCCESLOGIN_ACTIVE", succesLoginWindow:true});
    }

    const addDisactive = () =>{
        dispatch({type:"SET_SUCCESLOGIN_DISACTIVE", succesLoginWindow:false});
    }

    const succesLogin = () => {
        loginHandler();
        addActive();
        setTimeout(addDisactive, 4000);
    }

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Авторизация</h1>
            <form className={classes.authForm} action="">
                <input className={classes.firstInput} type="text" />
                <input className={classes.secondInput} type="text" />
            </form>
            <Button variant="contained" onClick={succesLogin}>ВОЙТИ</Button>
        </div>
    )
}

export default Loginpage;