import React from 'react';
import style from "./AboutSection.module.css";
import aboutImg from "../../../img/about-img.png"

export const AboutSection = (props) => {
    return (
        <section className={style.AboutSection}>
            <div className={style.aboutImage}>
                <img src={aboutImg} alt="about our company"/>
            </div>
            <div className={style.aboutText}>
                <h2>What is DCCD</h2>
                <h5>Decentralized Control of Cargo Delivery</h5>
                <p>This is a breakthrough technology that will remove bureaucratic and corruption barriers in logistics. In the future, this will give complete control of the cargo at each stage, minimize smuggling and fraud.</p>
                <div className={style.borderBtn}>
                    <a href="" className={`${style.siteBtn} ${style.gradient}`}>Get Started</a>
                </div>
            </div>
        </section>
    )
}