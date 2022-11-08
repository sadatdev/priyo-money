import React from 'react';
import Features from './Features';
import Header from './Header';
import Hero from './Hero';
import PriyoVisa from './PriyoVisa';
import RegisterInMinutes from './RegisterInMinutes';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <PriyoVisa />
            <Features />
            <RegisterInMinutes />
        </>
    );
};

export default LandingPage;
