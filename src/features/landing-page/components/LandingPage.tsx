import React from 'react';
import FAQs from './FAQs';
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
            <FAQs />
        </>
    );
};

export default LandingPage;
