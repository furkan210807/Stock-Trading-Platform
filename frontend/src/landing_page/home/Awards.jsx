import React from 'react';
function Awards() {
    return ( 
       <div className="container p-5 mb-5">
        <div className="row">
            <div className="col-6">
                <img src="/images/largestBroker.svg" alt="" className='ecosystem'/>
            </div>
            <div className="col-6 p-5">
                <h3>Largest Stock Broker in India</h3>
               <p className='mb-5'> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
               <div className="row">
                <div className="col-6">
                    <ul>
                        <li>
                            <p>Futures and options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives </p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds And gov Security</p>
                        </li>
                    </ul>
                </div>
               </div>
               <img src="/images/pressLogos.png" style={{width:"90%"}} alt="" />

            </div>
        </div>
       </div>
     );
}

export default Awards;