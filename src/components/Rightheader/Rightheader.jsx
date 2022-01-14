import React from "react";
import classes from './Rightheader.module.css';
import Helpbutton from "../Helpbutton/Helpbutton";
import NewsBellButton from "../NewsBellButton/NewsBellButton";
import UserAuthDropDown from "../UserAuthDropDown/UserAuthDropDown";


function Rightheader(){
    return (
        <div className={classes.rightheader}>
            <Helpbutton/>
            <NewsBellButton/>
            <UserAuthDropDown/>

        </div>
    )
}

export default Rightheader;