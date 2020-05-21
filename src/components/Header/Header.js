import React from 'react';
import logo from "../../../img/logo.png"
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
                        <NavLink to="/"><li><a href="#menu">Home</a></li></NavLink>
                        <NavLink to="/find"><li><a href="#menu">Cargo ID</a></li></NavLink>
                        <li><a href="#menu">News</a></li>
                        <li><a href="#menu">About</a></li>
                        <li><a href="#menu">Contact</a></li>
                    </ul>
            </div>
        </header>
    )
}

