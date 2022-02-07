import React from 'react';
import {HeroSection} from "./components/Main/HeroSection/HeroSection";
import {AboutSection} from "./components/Main/AboutSection/AboutSection";
import {FeaturesSection} from "./components/Main/FeaturesSection/FeaturesSection";
import {Footer} from "./components/Main/Footer/Footer";

export const Main = () =>
{
    return (
        <div>
            <HeroSection/>
            <AboutSection/>
            <FeaturesSection/>
            <Footer/>
        </div>
    )
}