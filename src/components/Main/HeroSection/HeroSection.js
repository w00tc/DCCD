import React from 'react';
import style from "./HeroSection.module.css";
import laptop from "../../../img/laptop.png"
import {Header} from "../../Header/Header";

export const HeroSection = (props) => {
    return (
        <section className={style.heroSection}>
            <Header/>
            <div className={style.container}>
                    <div className={style.heroText}>
                        <h2>Start with <span>DCCD</span> <br/>Safe Cargo Delivery</h2>
                        <h4>Use modern progressive technologies of Blockchain to safe your deliveries</h4>
                    </div>
                    <div className={style.laptop}>
                        <img src={laptop} className={style.laptopImage} alt="imageDCCD"/>
                    </div>
            </div>
        </section>
    )
}
