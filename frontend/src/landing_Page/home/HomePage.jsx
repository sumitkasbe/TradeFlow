import React from 'react';
import Hero from './Hero';
import Awards from './Award';
import State from './State';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (  
        <>
            <Hero />
            <Awards />
            <State />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage