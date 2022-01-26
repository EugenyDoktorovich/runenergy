import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import avatar from "../../img/avatarPlaceholder.png";
import arrow from "../../img/arrow.svg";


import classes from './UserAuthDropDown.module.css';


function UserAuthDropDown() {
    const dispatch = useDispatch();

    const active = useSelector(state=>state.active);
    const addActive = () => {
        dispatch({type:"SET_ACTIVE", active:true});
    }

    const addDisactive = () =>{
        dispatch({type:"SET_DISACTIVE", active:false});
    }

    return (
        <div className={classes.wrapper} onClick={(!active)?addActive:addDisactive
        }>
            <div>it@runenergy</div>
            <img src={avatar} className={classes.avatar}></img>
            <img src={arrow}></img>
        </div>
    )
}

export default UserAuthDropDown;