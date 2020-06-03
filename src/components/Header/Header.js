import React, {useEffect} from 'react';
import logo from "../../img/logo.png"
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setStatus} from "../../redux/itemsReducer";


export const Header = (props) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setStatus(''))
    };
    return (
        <header className={style.headerSection}>
            <div className={style.containerFluid}>
                <div className={style.siteLogo}>
                        <img src={logo} alt=""/>
                </div>
                    <ul className={style.menuList}>
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink onClick={handleClick} to="/find"><li>Cargo ID</li></NavLink>
                        <NavLink onClick={handleClick} to="/new"><li>New Transaction</li></NavLink>
                        <NavLink to="/pendings"><li>Pendings</li></NavLink>
                    </ul>
            </div>
        </header>
    )
}

