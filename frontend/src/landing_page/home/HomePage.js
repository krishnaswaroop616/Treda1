import React from 'react';
import HeroSection from './HeroSection';
import MainSection from "./MainSection";
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

function HomePage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <hr></hr>
            <MainSection/>
            <hr></hr>
            <Pricing/>
            <OpenAccount/>
            <Footer/>
        </>
    );
}

export default HomePage;