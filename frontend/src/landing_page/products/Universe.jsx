import React from 'react';
function Universe() {
    return (
        <div className="container  mt-5">
            <div className="row text-center">
               <h1>The Zerodha Universe</h1>
               <p>Extend your trading and investment experience even further with our partner platforms</p>
           
                 <div className="col-4 p-3 mt-5 mb-0">
                    <img src="images/smallcaseLogo.png" style={{width:"50%"}} />
                    <p className='text-muted ' style={{padding:"20px" , fontSize:"0.8rem",}}> Thematic investing platform that helps <br />you invest in diversified baskets of stocks on ETFs.</p>
                </div>

                 <div className="col-4 p-3 mt-5">
                    <img src="images/streakLogo.png" style={{width:"40%"}} />
                    <p className='text-small text-muted' style={{padding:"20px" , fontSize:"0.8rem"}}> Systematic trading platform that <br /> allows you to create and backtest <br /> strategies without coding.</p>
                </div>

                 <div className="col-4 p-3 mt-5" >
                    <img src="images/zerodhaFundhouse.png"style={{width:"40%"}} />
                    <p className='text-small text-muted' style={{padding:"20px" , fontSize:"0.8rem"}}>Our asset management venture that <br /> is creating simple  and transparent index <br /> funds to help you save for your goals.</p>
                </div> 

                 <div className="col-4 p-3 mt-5">
                    <img src="images/sensibullLogo.svg" style={{width:"40%"}} />
                    <p className='text-small text-muted' style={{padding:"20px" , fontSize:"0.8rem"}}>Options trading platform that <br /> lets you create strategies, analyze <br /> positions, and examine <br /> data points like open interest, FII/DII, <br /> and more.</p>
                </div>

                 <div className="col-4 p-3 mt-5">
                    <img src="https://zerodha.com/static/images/partners/tijori.svg"style={{width:"40%"}} />
                    <p className='text-small text-muted' style={{padding:"20px" , fontSize:"0.8rem"}}>Investment research platform that <br /> offers detailed insights on stocks, <br /> sectors, supply chains, and more.</p>
                </div>

                 <div className="col-4 p-3 mt-5">
                    <img src="https://zerodha.com/static/images/products/ditto-logo.png" style={{width:"40%"}} />
                    <p className='text-small text-muted' style={{padding:"20px" , fontSize:"0.8rem"}}>Personalized advice on <br /> life and  health insurance. <br /> No spam and no mis-selling.
</p>
                </div> 
                 
                 <button className='p-2 btn btn-primary fs-5 mb-3' style={{width:"20%", margin : "0 auto"}}>Sign up for free</button>
            </div>
            </div>
        
      );
}

export default Universe;