import React from "react";


import classes from './Loginpage.module.css';


function Loginpage({loginHandler}){
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Авторизация</h1>
            <form className={classes.authForm} action="">
                <input className={classes.firstInput} type="text" />
                <input className={classes.secondInput} type="text" />
            </form>
            <button onClick={loginHandler}>ВОЙТИ</button>
        </div>
    )
}

export default Loginpage;