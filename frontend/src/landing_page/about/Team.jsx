import React from 'react';
function Team() {
    return ( 
        <div className="container">
            <div className="row p-3  text-muted border-top">
                <h2 className='fs-3 text-center '>People</h2>
            </div>

            <div className="row p-3   text-muted fs-8">
               <div className="col-6 p-3 text-center ">
               <img src="images/nithinKamath.jpg" style={{borderRadius:"100%", width:"45%"}} alt="" />
              
                <h4 className='fs-5 mt-4'>Nithin Kamath</h4>
               <h5 className='fs-6'>Founder,CEO</h5>
              
               </div>
               <div className="col-6 p-3">
               <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p><br />
               <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p><br />
               <p>Playing basketball is his zen.</p><br />
               <p>Connect on  <a href="">Homepage</a>/<a href="">TradingQnA</a> /<a href="">Twitter</a></p>
               </div>
            </div>
        </div>
     );
}

export default Team;