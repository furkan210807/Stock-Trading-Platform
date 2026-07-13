import React from 'react';
import SearchBar from './Search';


function Hero() {
    return ( 
    <>
    
     
        <section className="container-fluid" id='SupportHero'>
        <div className="p-5 mt-5 mb-2" id='supportWrapper'>
                <h3>Support Portal</h3>
               <button id='buttonTicket'>My tickets</button> 
        </div>
        <SearchBar></SearchBar>
        <div style={{marginBottom:"0px", backgroundColor:"#d0d3d6" , color:"#d0d3d6"}}>s</div>
        </section>
    
    
    </>
       
     );
}

export default Hero;