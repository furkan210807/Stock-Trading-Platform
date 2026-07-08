import React from 'react';
function LeftSection({
    imageUrl, 
    productName, 
    productDescription, 
    tryDemo,
    learnMore,
    googlePlay,
    appStore
    }) {
    return ( 
        <div className="container border-top mt-5">
            <div className="row mt-5">
                <div className="col-6  mt-5 ">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1 className='fs-2'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mt-4'>
                       <a href={tryDemo}  >Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                       <a href={learnMore} style={{marginLeft:"90px"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                   <div className='mt-3'>
                    <a href={googlePlay} ><img src="images/googlePlayBadge.svg" alt="" /></a>
                    <a href={appStore} style={{marginLeft:"30px"}}><img src="images/appstoreBadge.svg" alt="" /></a>
                   </div>
                   
                </div>
            </div>
        </div>
     );
}

export default LeftSection;