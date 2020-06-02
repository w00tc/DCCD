import React from 'react';
import style from "./Footer.module.css";
import logo from "../../../img/logo.png"

export const Footer = (props) => {
    return (
        <footer className={style.footerSection}>
            <div className={style.container}>
                <div className={style.footerWidget}>
                    <img src={logo} className={style.footerLogo} alt=""/>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit
                        anim id est laborum.</p>
                    <span>
                        Copyright &copy;
                        2020 All rights reserved | This template is made with <i
                            className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com"
                                                                                    target="_blank">Colorlib</a>
                    </span>
                </div>
                <div className={style.footerWidget}>
                    <h5 className="widget-title">Resources</h5>
                    <ul>
                        <li><a href="#">How to Buy Coin</a></li>
                        <li><a href="#">Coin Overview</a></li>
                        <li><a href="#">Blog News</a></li>
                        <li><a href="#">How to Sell Coin</a></li>
                        <li><a href="#">Purchase Theme</a></li>
                    </ul>
                </div>
                <div className={style.footerWidget}>
                    <h5 className="widget-title">Quick Links</h5>
                    <ul>
                        <li><a href="#">Network Stats</a></li>
                        <li><a href="#">Block Explorers</a></li>
                        <li><a href="#">Governance</a></li>
                        <li><a href="#">Exchange Markets</a></li>
                        <li><a href="#">Get Theme</a></li>
                    </ul>
                </div>
                <div className={style.footerWidget}>
                    <h5 className="widget-title">Follow Us</h5>
                    <div className="social">
                        <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="" className="google"><i className="fa fa-google-plus"></i></a>
                        <a href="" className="instagram"><i className="fa fa-instagram"></i></a>
                        <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

