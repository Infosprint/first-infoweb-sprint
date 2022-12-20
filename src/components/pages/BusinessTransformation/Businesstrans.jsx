import React from "react";
import "./Businesstrans.css";
import Img1 from "../../../img/MicrosoftTeams-image (3).png";

const BusinessTrans = () => {
  return (
    <>
    <div className="container">
        <h1 className="i-heading text-center mt-5 pb-5">Business Transformation</h1>
        <p className="h-para">
        Business Transformation is a world of unrivalled disturbance & market violence, 
        business transformation today spins around the requirement to give rise to new value— to deliver new efficiencies,
        to undo new opportunities, and to lead new growth. The process of structurally modifying the systems, people, processes & technology over a whole business or business unit, 
        to attain quantifiable improvements in efficiency, effectiveness & stakeholder satisfaction. It includes planned decisions that have an impact on where you’ll grow, 
        how your organization operates & what kinds of performance improvements you can expect.
        </p>
        <div className="row mb-5">
        <div className="row justify-content-between">
           
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize s-subtitle">Architecture for Innovative Solutions</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                <div className="row justify-content-center b-paragraph">
                Architectural Innovation is the modification of existing solutions for an entirely new market.
                Architectural innovation refers to changing the overall design of a product by putting existing components together in new ways. 
                This innovation occurs in the short to medium term.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center align-self-center">
               <img src={Img1} alt="img1" style={{width: '100%'}} />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
            <div className="services pd">
        <h3 className="title">Transformation</h3>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="square"><i className="fas fa-code"></i></div>
            <div className="serv">
              <h5>Incremental</h5>
              <p>Gradual, continues improvements on existing products and services</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="serv">
              <div className="square"><i className="fas fa-cogs"></i></div>
              <h5>Architectural </h5>
              <p>A significant improvement on a product that aims to sustain
                         The position is an existing market</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="square"><i className="fas fa-globe"></i></div>
            <div className="serv">
              <h5>Disruptive</h5>
              <p>Technology or new business model that disrupts the existing marketing</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="square"><i className="fas fa-user-shield"></i></div>
            <div className="serv">
              <h5>Radical</h5>
              <p>Technological breakthrough that transforms industries, often 
Creates a new market.</p>
            </div>
          </div>
      </div>
    </div>
            </div>
        {/* <div className="row">
        <div class="position-absolute top-50 start-50 translate-middle">
<div class="animate__animated animate bounce card " style={{width: '18rem'}}>
  <div class="container mt-3">
    <img src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png" class="card-img-top " alt="..." /></div>
  <div class="card-body">
    <h5 class="card-title ms-1">Website</h5>
    <p class="card-text mb-5 ms-1">See more bootstrap code snippets on my website</p>

    <a href="https://freesnippetcode.blogspot.com/" target="_blank" class="btn btn-primary mb-1 mt-1 ">Go now</a>
  </div>
</div>
  </div>
  </div> */}
  </div>
    </>
  );
};

export default BusinessTrans;
