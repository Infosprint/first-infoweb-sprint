import React from "react";
import "./Autontrade.css";
import Img1 from "../../../img/MicrosoftTeams-image (15).png";

const Autontrade = () => {
  return (
    <>
      <div className="main-wrapper mb-5">
      <div className="align-items-center align-self-center text-center">
        <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
  style={{
    height: '300px'}}
  >
      <div className="text-center">
      <div className="row justify-content-center">
                      <h1 className="i-heading text-capitalize">Auto N Trade</h1>
                  </div>
                    </div>
                    </div>
                  
              </div>
        {/* <div className="container-fluid"> */}
          <div className="row justify-centent-center">
            <div className="col-md-6 align-self-center align-items-center">
              <div className="row justify-content-center">
                <div className="align-items-center align-self-center">
                  <h1 className="q-heading text-capitalize text-center">Auto N Trade</h1>
                </div>
              </div>
              <div className="row justify-content-center p-3">
                <div className="align-items-center align-self-center">
                  <p className="h-para">AUTO N TRADE..........Buying a car gives an ecstatic feeling, be it a brand-new car or a second-hand model.
 New cars show high performance in the first few years of their lifespan, on the other hand a second-hand car needs to have cared for a bit more than the new one. One way of showing the necessary love to your four-wheeler is through regular maintenance. Another is obviously your driving style.
                  Vehicles are becoming ever more complex and challenging to repair.
                   Our service has the upper hand in overcoming these challenges by pairing technology and innovation and highly skilled technicians to meet the customer’s needs. With many locations around the globe, you can be assured that where ever you are, you can find a trusted Auto N Trade Service Dealer
We do everything for you from car sales to maintenance. We are the preferred choice by many because our experience and knowledge is self-evident.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center align-items-center hea1 mt-5">
              <img src={Img1} alt="img1" className="q-img-1" />
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Autontrade;
