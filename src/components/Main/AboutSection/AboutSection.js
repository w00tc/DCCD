import React from 'react';
import style from "./AboutSection.module.css";
import aboutImg from "../../img/about-img.png"

export const AboutSection = (props) => {
    return (
        <section className={style.AboutSection}>
            <div className={style.aboutImage}>
                <img src={aboutImg} alt="about our company"/>
            </div>
            <div className={style.aboutText}>
                <h2>What is Bitcoin</h2>
                <h5>Bitcoin is an innovative payment network and a new kind of money.</h5>
                <p>Bitcoin is one of the most important inventions in all of human history. For the first time
                    ever, anyone can send or receive any amount of money with anyone else, anywhere on the
                    planet, conveniently and without restriction. It’s the dawn of a better, more free
                    world.</p>
                <div className={style.borderBtn}>
                    <a href="" className={`${style.siteBtn} ${style.gradient}`}>Get Started</a>
                </div>
            </div>
        </section>
    )
}