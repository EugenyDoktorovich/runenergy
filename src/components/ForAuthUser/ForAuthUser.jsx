import React from "react";
import classes from './ForAuthUser.module.css';

import Header from "../Header/Header";
import Main from "../Main/Main";


function ForAuthUser(){
    return (
        <div className={classes.wrapper} >
            <Header/>
            <Main/>
        </div>
    )
}

export default ForAuthUser;