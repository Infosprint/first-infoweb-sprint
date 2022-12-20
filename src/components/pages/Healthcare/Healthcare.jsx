import React from "react";
import "./healthcare.css";
// import Img10 from "../../../img/hc-img-10.gif";

const healthcare = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-end pb-5">
            <div className="col-md-2 align-items-start align-self-start pt-4">
              {/* <img src={Img1} alt="img1" className="hc-img-1" /> */}
            </div>
          <div className="row justify-content-center">
            <div className="col-md-7 align-items-center align-self-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-self-center align-items-center text-center">
                  <h1 className="hc-heading text-capitalize pb-3">our expertise</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="text-center">
                  <p className="hc-para">
                  Qurinom Health Connect guarantees that hospitals are connected with the correct medical professionals by offering promising healthcare staff augmentation services through our consulting agency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 align-items-center">
              {/* <img src={Img3} alt="img3" className="hc-img-3" /> */}
            </div>
          </div>
          <div className="align-items-start align-self-start">
               {/* <img src={Img2} alt="img2" className="hc-img-2" /> */}
          </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-md-1 align-items-center align-self-center">
              {/* <img src={Img4} alt="img-4" className="hc-img-4 px-2" /> */}
            </div>
            <div className="col-md-11 align-items-center align-self-center text-start">
              <h5 className="hc-line-1">
              	Keeping track of a computerised database of small, medium, and major hospitals and clinics.
              </h5>
            </div>
          </div>
          <div className="row justify-content-start mt-3">
            <div className="col-md-1 align-items-center align-self-center">
              {/* <img src={Img4} alt="img-4" className="hc-img-4 px-2" /> */}
            </div>
            <div className="col-md-11 align-items-center align-self-center text-start">
              <h5 className="hc-line-2">
              	Examining organisational work cultures and ensuring professionalism is maintained.
              </h5>
            </div>
          </div>
          <div className="container h-container">
          <div className="row g-5 mt-5 justify-content-evenly mb-5">
            <div className="col-md-4">
            <div class="card hc-card" style={{width: "20rem"}}>
            {/* <img src={Img5} alt="img5" className="hc-img-5 card-img-top pb-3" /> */}
              <div class="card-body text-center">
                    <h3 className="hc-card-title">#1</h3>
                    <p className="hc-card-text pb-3">
                    Interviewing registered workers to confirm their sincerity and qualification.	To prevent annoyance, use location-specific listings.
                  </p>
              </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card hc-card" style={{width: "20rem"}}>
            {/* <img src={Img6} alt="img6" className="hc-img-6 card-img-top pb-3" /> */}
              <div class="card-body text-center">
                    <h3 className="hc-card-title">#2</h3>
                    <p className="hc-card-text pb-3">
                    	We verify the papers to the best of our ability to ensure that the information supplied is correct.
                  </p>
              </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card hc-card" style={{width: "20rem"}}>
            {/* <img src={Img7} alt="img5" className="hc-img-5 card-img-top pb-3" /> */}
              <div class="card-body text-center">
                    <h3 className="hc-card-title">#3</h3>
                    <p className="hc-card-text pb-3">
                    While fulfilling the employment contract, we ensure that all industry rules are followed & established.
                  </p>
              </div>
              </div>
            </div>
          </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 align-items-center align-self-center">
              {/* <img src={Img10} alt="img10" className="hc-img-10" /> */}
            </div>
            <div className="col-md-1 align-items-center align-self-center">
              {/* <img src={Img1} alt="img11" className="hc-img-11" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default healthcare;
