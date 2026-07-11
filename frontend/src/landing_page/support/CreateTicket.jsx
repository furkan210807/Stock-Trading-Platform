import React from 'react';
import './CreateTicket.css';

function CreateTicket() {
    return ( 
        // <div className="container">
        //     <div className="row p-5 mt-5 mb-5">
        //         <h1 className='text-center fs-2'>To, Crete a Ticket select a relevant Topic</h1>
        //         <div className="col-4 p-5 mt-5 mb-5">
        //             <h4 className='fs-5'> <i class="fa fa-plus-circle"></i>Account Opening</h4>
        //             <ul>
                    
        //             <li><a href="" style={{lineHeight:"2"}}>Resident individual</a><br /></li>
        //            <li><a href="" style={{lineHeight:"2"}}>Minor</a><br /></li> 
        //            <li> <a href="" style={{lineHeight:"2"}}>Non Resident Indian (NRI)</a><br /></li>
        //            <li><a href="" style={{lineHeight:"2"}}>Company, Partnership, HUF and LLP</a><br /></li> 
        //             <li><a href="" style={{lineHeight:"2"}}>Glossary</a><br /></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>

<div className="accordion mt-5 " id="supportAccordion">

  {/* Accordion 1 */}
  <div className="border mb-4">
    <h2 className="accordion-header mb-3">
      <button className="accordion-button" type="button"data-bs-toggle="collapse" data-bs-target="#collapseOne">
       <i className='fa fa-plus-circle' aria-hidden="true"></i> Account Opening
      </button>
    </h2>
    <div id="collapseOne"className="accordion-collapse collapse show"data-bs-parent="#supportAccordion" >
      <div className="accordion-body">
        <ul style={{lineHeight:"2.2"}}>
        <li><a href="">Resident individual</a></li>
        <li><a href="">Minor</a></li>
        <li><a href="">Non Resident Indian (NRI)</a></li>
        <li><a href="">Company, Partnership, HUF and LLP</a></li>
        <li><a href="">Glossary</a></li>
       </ul>
      </div>
    </div>
  </div>

  {/* Accordion 2 */}
  <div className="border mb-4">
    <h2 className="accordion-header mb-3">
      <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse" data-bs-target="#collapseTwo">
       <i class="fa-solid fa-circle-user"></i> Your Zerodha Account
</button>
    </h2>

    <div id="collapseTwo"className="accordion-collapse collapse" data-bs-parent="#supportAccordion" >
      <div className="accordion-body">
        <ul style={{lineHeight:"2.2"}}>
            <li><a href="">Your Profile</a></li>
            <li><a href="">Account modification</a></li>
            <li><a href="">Client Master Report (CMR) and Depository Participant (DP)</a></li>
            <li><a href="">Nomination</a></li>
            <li><a href="">Transfer and conversion of securities</a></li>
        </ul>
      </div>
    </div>
  </div>
    {/* According 3 */}
  <div className="border  mb-4">
    <h2 className="accordion-header mb-3">
      <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse" data-bs-target="#collapseThree">
       <i class="fa-brands fa-uikit"></i> Kite
      </button>
    </h2>

    <div id="collapseThree"className="accordion-collapse collapse" data-bs-parent="#supportAccordion" >
      <div className="accordion-body">
        <ul style={{lineHeight:"2.2"}}>
            <li><a href="">IPO</a></li>
            <li><a href="">Trading FAQs</a></li>
            <li><a href="">Margin Trading Facility (MTF) and Margins</a></li>
            <li><a href="">Charts and orders</a></li>
            <li><a href="">Alerts and Nudges</a></li>
            <li><a href="">General</a></li>
        </ul>
      </div>
    </div>
    {/* According 4 */}
  </div>
  <div className="border  mb-4 ">
    <h2 className="accordion-header mb-4">
      <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse" data-bs-target="#collapseFour">
       <i class="fa-solid fa-indian-rupee-sign"></i>Funds
      </button>
    </h2>

    <div id="collapseFour"className="accordion-collapse collapse" data-bs-parent="#supportAccordion" >
      <div className="accordion-body">
         <ul style={{lineHeight:"2.2"}}>
            <li><a href="">Add money</a></li>
            <li><a href="">Withdraw money</a></li>
            <li><a href="">Add bank accounts</a></li>
            <li><a href="">eMandates</a></li>
            
        </ul>
      </div>
    </div>
  </div>

  {/* Accordion 5 */}
  
  <div className="border  mb-4">
    <h2 className="accordion-header mb-4">
      <button className="accordion-button collapsed" type="button"data-bs-toggle="collapse"data-bs-target="#collapseFive" >
       <span><i class="fa-solid fa-coins"></i></span> Coin
      </button>
    </h2>

    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#supportAccordion" >
      <div className="accordion-body">
        <ul style={{lineHeight:"2.2"}}>
            <li><a href="">Mutual funds</a></li>
            <li><a href="">National Pension Scheme (NPS)</a></li>
            <li><a href="">Fixed Deposit (FD)</a></li>
            <li><a href="">Features on Coin</a></li>
            <li><a href="">Payments and Orders</a></li>
            <li><a href="">General</a></li>
        </ul>
      </div>
    </div>
  </div>
  {/* According 6 */}
   <div className="border  mb-4 ">
    <h2 className="accordion-header mb-4">
      <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse" data-bs-target="#collapseSix">
        <i class="fa-brands fa-xbox"></i> Console 
      </button>
    </h2>

    <div id="collapseSix"className="accordion-collapse collapse" data-bs-parent="#supportAccordion" >
      <div className="accordion-body">
         <ul style={{lineHeight:"2.2"}}>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Corporate actions</a></li>
            <li><a href="">Funds statement</a></li>
            <li><a href="">Reports</a></li>
            <li><a href="">Profile</a></li>
            <li><a href="">Segments</a></li>
        </ul>
      </div>
    </div>
  </div>

</div>

     );
}

export default CreateTicket;