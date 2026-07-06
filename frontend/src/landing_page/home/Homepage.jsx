import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Navbar from '../Navbar';
import Pricing from './pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Awards></Awards>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <OpenAccount></OpenAccount>
        <Footer></Footer>

        
        
        </>
     );
}

export default HomePage;