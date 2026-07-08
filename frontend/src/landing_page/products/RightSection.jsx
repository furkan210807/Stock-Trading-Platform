import React from 'react';
function RightSection({imageUrl, productName,  productDescription, learnMore,}) {
    return ( 
         <div className="container border-top mt-5">
            <div className="row">
               
                <div className="col-6 p-5 mt-5">
                    <h1 className='fs-2'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-4'>
                      <a href={learnMore}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                  
                     </div>
                 <div className="col-6  mt-5">
                    <img src={imageUrl} alt="" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;