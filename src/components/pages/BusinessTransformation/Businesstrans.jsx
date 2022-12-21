import React from "react";
import "./Businesstrans.css";
import Img1 from "../../../img/MicrosoftTeams-image (8).png";

const BusinessTrans = () => {
  return (
    <>
    <div className="main-wrapper pb-5">
    <div className="align-items-center align-self-center text-center pb-5">
        <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
  style={{
    height: '300px'}}
  >
      <div className="text-center">
      <div className="row justify-content-center">
                      <h1 className="i-heading text-capitalize">Business Transformation</h1>
                  </div>
                    </div>
                    </div>
                  
              </div>
        <div className="row mb-5">
        <div className="row justify-content-between">
           
            <div className="col-md-6 align-items-center align-self-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize s-subtitle text-center">Architecture for Innovative Solutions</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                <div className="row h-para">
                Some sustaining innovations are the incremental year-by-year improvements that all good companies grind out. 
Other sustaining innovations are breakthrough, leapfrog-beyond-the-competition products. It doesn’t matter how technologically 
difficult the innovation is, however: The established competitors almost always win the battles of sustaining technology, because
 this strategy entails making a better product that they can sell for higher profit margins to their best customers, the established competitors
 have powerful motivations to fight sustaining battles. And they have the resources to win.Here our organization executes its existing business model (composed of the six domains: the service, revenue, cost, operating, value, and performance model). 
 It uses existing assets and capabilities and has a low risk of getting the next product out the door.
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
              <h5>Social Media & Strategy </h5>
              <p>A social media strategy outlines how to maximize engagement and interactions on social media platforms in order to accomplish a company’s goal. 
These goals can be to increase brand awareness, produce a viral impact, or generate leads.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="serv">
              <div className="square"><i className="fas fa-cogs"></i></div>
              <h5>Digital Performance Marketing </h5>
              <p>We throw around the word “digital marketing” so frequently.
Digital marketing actually comes in a variety of forms, and each type’s outlet and capabilities are expanding on a daily basis.  </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="square"><i className="fas fa-globe"></i></div>
            <div className="serv">
              <h5>Website and App Development</h5>
              <p>The difficult process of planning, creating, testing, and deploying a web-based program is known as web application development. 
A firm may decide to develop a unique web application when they want to establish an online</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="square"><i className="fas fa-user-shield"></i></div>
            <div className="serv">
              <h5>Data Solutions</h5>
              <p>The days of assuming you could figure out who your target audience was are long gone. 
Big data enables you to get in-depth information on virtually any demographic you could want to target. </p>
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
