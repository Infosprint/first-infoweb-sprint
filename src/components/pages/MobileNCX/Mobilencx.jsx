import React from "react";
import "./mobilencx.css";
import Img1 from "../../../img/MicrosoftTeams-image (21).png";

const Mobilencx = () => {
  return (
    <>
    <section>
    <div className="align-items-center align-self-center text-center">
        <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
  style={{
    height: '300px'}}
  >
      <div className="text-center">
      <div className="row justify-content-center">
                      <h1 className="i-heading text-capitalize">MobileNCX</h1>
                  </div>
                    </div>
                    </div>
                  
              </div>
    <div className="row flex-lg-row-reverse align-items-center mb-5">
    <div className="row">
                <div className="col-md-6 align-items-center align-self-center">
                  <div className="row">
                    <h1 className="s-subtitle text-capitalize text-center">
                    Research-based UX and UI design
                    </h1>
                  </div>
                  <div className="row">
                    <p className="h-para">
                    Our mobile consulting team understands what makes a user-friendly mobile app and is ready to help you improve your existing UX & UI. 
                    If you don’t have the design yet, we’ll ensure convenience of your future app by creating research-based UX blueprints and trendy UI mockups.
Adherence to security standards,Relying on the practices backed up by our ISO 27001 certificate,
 ScienceSoft guarantees total security of user- and server-based data, queried by your application. 
 Whether your company sticks to BYOD, POCE, or COPE policy, you can be sure that your sensitive data is safe 24/7.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center mt-5">
                  <img src={Img1} alt="img1" className="m-img-1" />
                </div>
              </div>
      </div>
      </section>
    </>
  );
};

export default Mobilencx;
