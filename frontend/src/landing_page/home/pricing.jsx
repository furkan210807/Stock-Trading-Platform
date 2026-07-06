import React from 'react';
function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h2 className='mb-3'>Unbeatable pricing</h2>
                    <p className='mb-3 '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: "none"}}>See pricing  <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col" style={{display:"flex", fontSize:"10px"}}>
                            <img style={{width:"40%"}} src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
                            <p className='mt-4 text-muted '>Free account opening</p>
                          
                        </div>
                        <div className="col" style={{display:"flex", fontSize:"10px"}}>
                            <img style={{width:"40%"}} src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
                            <p className='mt-3 text-muted '>Free equity delivery
and direct mutual funds</p>

                        </div>
                         <div className="col" style={{display:"flex", fontSize:"10px"}}>
                            <img style={{width:"40%"}} src="https://zerodha.com/static/images/other-trades.svg" alt="" />
                            <p className='mt-3 text-muted '> Intraday and F&O</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;