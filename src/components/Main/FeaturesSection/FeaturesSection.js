import React from 'react';
import style from "./FeaturesSection.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobileAlt, faShieldAlt, faWallet, faHeadset, faSyncAlt, faVolumeUp} from '@fortawesome/free-solid-svg-icons'

export const FeaturesSection = (props) => {
    return (
        <section className={style.featuresSection}>
            <div className={style.sectionTitle}>
                <h2>Our Features</h2>
                <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
            </div>
            <div className={style.container}>
                <div className={style.feature}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faMobileAlt}/>
                    </div>
                    <div className={style.featureContent}>
                        <h4>Mobile Apps</h4>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit
                            anim
                            id est laborum. </p>
                        <a href="" className="readmore">Readmore</a>
                    </div>
                </div>
                <div className={style.feature}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faShieldAlt}/>
                    </div>
                    <div className={style.featureContent}>
                        <h4>Safe & Secure</h4>
                        <p>With the help of the blockchain, we want to achieve complete decentralization for the private circle of people (private blockchain).
                        </p>
                        <a href="" className="readmore">Readmore</a>
                    </div>
                </div>
                <div className={style.feature}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faWallet}/>
                    </div>
                    <div className={style.featureContent}>
                        <h4>Wallet</h4>
                        <p>The blockchain trust network, based on mathematical laws, will remove the need to prove its actions bureaucratically. </p>
                        <a href="" className="readmore">Readmore</a>
                    </div>
                </div>
                <div className={style.feature}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faHeadset}/>
                    </div>
                    <div className={style.featureContent}>
                        <h4>Experts Support</h4>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit
                            anim
                            id est laborum. </p>
                        <a href="" className="readmore">Readmore</a>
                    </div>
                </div>
                <div className={style.feature}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faSyncAlt}/>
                    </div>
                    <div className={style.featureContent}>
                        <h4>Instant Exchange</h4>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit
                            anim
                            id est laborum. </p>
                        <a href="" className="readmore">Readmore</a>
                    </div>
                </div>
                <div className={style.feature}>
                    <div className={style.icon}>
                        <FontAwesomeIcon icon={faVolumeUp}/>
                    </div>
                    <div className={style.featureContent}>
                        <h4>Recuring Buys</h4>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit
                            anim
                            id est laborum. </p>
                        <a href="" className="readmore">Readmore</a>
                    </div>
                </div>
            </div>
        </section>
    )
}