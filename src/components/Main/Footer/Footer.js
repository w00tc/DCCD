import React from 'react';
import style from "./Footer.module.css";
import logo from "../../../img/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"


export const Footer = (props) => {
    return (
        <footer className={style.footerSection}>
            <div className={style.container}>
                <div className={style.footerWidget}>
                    <img src={logo} className={style.footerLogo} alt=""/>
                    <p>DCCD
                        decentralized control of cargo delivery
                    </p>
                    <span>
                        Copyright &copy;
                        2020 All rights reserved<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </span>
                </div>
                <div className={style.footerWidget}>
                    <h5 className="widget-title">Resources</h5>
                    <ul>
                        <li><a href="https://github.com/enriquenc/DCCD">DCCD BlockChain Open Source </a></li>
                        <li><a href="https://github.com/w00tc/DCCD">DCCD Front End</a></li>
                    </ul>
                </div>
                <div className={style.footerWidget}>
                    <h5 className="widget-title">Follow Us</h5>
                    <div className={style.social}>
                        <a href="https://www.instagram.com/inspiring.ac" className="instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> BlockChain Developer</a><br/>
                        <a href="https://www.instagram.com/luka_fhal" className="instagram"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Web Developer</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

