import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

import logo from '../../img/logo.png';

import { setStatus } from '../../redux/actions/items.actions';

export const Header = (props) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setStatus(''));
    };
    return (
        <header className={style.headerSection}>
            <div className={style.containerFluid}>
                <div className={style.siteLogo}>
                    <img src={logo} alt=""/>
                </div>
                <ul className={style.menuList}>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink onClick={handleClick} to="/find">
                        <li>Cargo ID</li>
                    </NavLink>
                    <NavLink onClick={handleClick} to="/new">
                        <li>New Transaction</li>
                    </NavLink>
                    <NavLink to="/pendings">
                        <li>Pendings</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

