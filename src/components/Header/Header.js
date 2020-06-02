import React from 'react';
import logo from "../../img/logo.png"
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={style.headerSection}>
            <div className={style.containerFluid}>
                <div className={style.siteLogo}>
                    <a href="index.html">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                    <ul className={style.menuList}>
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/find"><li>Cargo ID</li></NavLink>
                        <NavLink to="/new"><li>New Transaction</li></NavLink>
                    </ul>
            </div>
        </header>
    )
}

