import React from "react";
import classes from './Header.module.css';
import Leftheader from "../Leftheader/Leftheader";
import Rightheader from "../Rightheader/Rightheader";

function Header(){
    return (
        <header className={classes.header}>
            <Leftheader/>
            <Rightheader/>
            
        </header>
    )
}

export default Header;