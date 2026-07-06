import React from 'react';
function Education() {
    return ( 
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="images/education.svg" alt="" style={{width:"80%"}} />
                </div>
                <div className="col-6">
                    <h2>Free and open market education</h2>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=""  style={{textDecoration: "none"}}>Veristy <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mt-5 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href=""  style={{textDecoration: "none"}}>TradingQ&A  <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;