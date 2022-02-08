import React from "react";
import classes from './Auth.module.css';


function Auth(){
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Авторизация</h1>
            <form className={classes.authForm} action="">
                <input className={classes.firstInput} type="text" />
                <input className={classes.secondInput} type="text" />
            </form>
        </div>
    )
}

export default Auth;