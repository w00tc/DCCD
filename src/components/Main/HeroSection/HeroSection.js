import React from 'react';
import style from "./HeroSection.module.css";
import laptop from "../../img/laptop.png"
import {Header} from "../Header/Header";

export const HeroSection = (props) => {
    return (
        <section className={style.heroSection}>
            <Header/>
            <div className={style.container}>
                    <div className={style.heroText}>
                        <h2>Invest in <span>Bitcoin</span> <br/>Bitcoin Trading</h2>
                        <h4>Use modern progressive technologies of Bitcoin to earn money</h4>
                        <form className={style.heroForm}>
                            <input type="text" placeholder="Enter your email"/>
                                <button className={style.siteBtn}>Get Started</button>
                        </form>
                    </div>
                    <div className={style.laptop}>
                        <img src={laptop} className={style.laptopImage} alt="imageDCCD"/>
                    </div>
            </div>
        </section>
    )
}
