import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';

import Pricing from './pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>

        <Hero></Hero>
        <Awards></Awards>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <OpenAccount></OpenAccount>
     

        
        
        </>
     );
}

export default HomePage;