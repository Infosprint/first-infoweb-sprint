import React from "react";
import "./Autontrade.css";
import Img1 from "../../../img/Auto N Trade.gif";

const Autontrade = () => {
  return (
    <>
      <div className="main-wrapper mb-5">
        <div className="container-fluid">
          <div className="row justify-centent-center">
            <div className="col-md-6 align-self-center align-items-center q-left">
              <div className="row justify-content-center mt-5">
                <div className="align-items-center align-self-center text-center">
                  <h1 className="q-heading text-capitalize">Auto N Trade</h1>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-10 align-items-center align-self-center">
                  <p className="q-para">
                  Vehicles are becoming ever more complex and challenging to repair. Our service has the upper hand in overcoming these challenges by pairing technology and innovation and highly skilled technicians to meet the customer’s needs. With many locations around the globe, you can be assured that where ever you are, you can find a trusted Auto N Trade Service Dealer
We do everything for you from car sales to maintenance. We are the preferred choice by many because our experience and knowledge is self-evident.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center align-items-center hea1 mt-5">
              <img src={Img1} alt="img1" className="q-img-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Autontrade;
