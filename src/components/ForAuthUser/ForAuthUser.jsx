import React from "react";
import classes from './ForAuthUser.module.css';

import Header from "../Header/Header";
import Main from "../Main/Main";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ForAuthUser(){
    const dispatch = useDispatch();
    const active = useSelector(state=>state.active);
    const addDisactive = () =>{
        dispatch({type:"SET_DISACTIVE", active:false});
    }
    const addActive = () => {
        dispatch({type:"SET_ACTIVE", active:true});
    }
    return (
        <div className={classes.wrapper} onClick={(active)?addDisactive:console.log('good')}>
            <Header/>
            <Main/>
        </div>
    )
}

export default ForAuthUser;