import React from 'react';
import style from "./FeaturesSection.module.css";

export const FeaturesSection = (props) => {
    return (
        <section className={style.featuresSection}>
            <div className={style.sectionTitle}>
                <h2>Our Features</h2>
                <p>Use modern progressive technologies of Blockchain to safe your deliveries</p>
            </div>
            <div className={style.sectionTitle}>
                <h3>
                    What is this?
                </h3>
                <p>
                    This is a breakthrough technology that will remove bureaucratic and corruption barriers in
                    logistics.
                    In the future, this will give complete control of the cargo at each stage, minimize smuggling and
                    fraud.
                </p>
            </div>
            <div className={style.sectionTitle}>
                <h3>
                    Why blockchain?
                </h3>
                <p>
                    With the help of the blockchain, we want to achieve complete decentralization for the private circle
                    of people (private blockchain).
                    The blockchain trust network, based on mathematical laws, will remove the need to prove its actions
                    bureaucratically.
                </p>
            </div>
            <div className={style.sectionTitle}>
                <h3>
                    Why IoT?
                </h3>
                <p>
                    As you know, the main problem with the blockchain is that it does not prove physical actions. In
                    working with a real load, this is unacceptable.
                    We decided to use real sensors that will monitor the conditions of cargo delivery at each stage.
                    They will form a decentralized network that will connect directly to the blockchain. Any deviations
                    in the delivery conditions will be instantly recorded on the blockchain.
                    Each side will be aware of the deviation.
                </p>
            </div>
        </section>
    )
}