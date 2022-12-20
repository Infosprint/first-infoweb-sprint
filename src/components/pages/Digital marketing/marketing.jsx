import React from "react";
import "./marketing.css";
import Img1 from "../../../img/marketing.gif";
const digitalmarketing = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-6 align-items-center align-self-center text-center">
                  <div className="row">
                    <h1 className="m-heading text-capitalize mt-5">
                      digital marketing
                    </h1>
                  </div>
                  <div className="row">
                    <p className="h-para mt-3">
                    We build and promote brands with superior ROI-driven online marketing solutions encompassing a wide variety of digital disciplines in the era of viral trends,
                    allowing your business to take off with a flight!
                    </p>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center mt-5">
                  <img src={Img1} alt="img1" className="m-img-1" />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12 col-lg-12 col-sm-6 align-items-center">
                  <div className="row justify-content-center">
                    <h3 className="wwd text-capitalize pb-3">what we do?</h3>
                    <p className="wwd-para">
                      We’re storytellers, brand designers and digital strategic
                      leaders you’ve been looking for We’re
                      <span classNameName="m-headin">
                        The Infosprint Technologies
                      </span>
                      . The existence of IT is to make you look incredible, to
                      tell your story, to bind you with your audience and to
                      deliver what you need. IT makes sure that you can surpass
                      your goal in the digital world. Here we will integrate
                      with your business, product and goal.
                    </p>
                  </div>
                  <div className="row justify-content-center">
                    <h3 className="branding text-capitalize pb-3">branding</h3>
                    <p className="b-para">
                      Branding is an identity. To classNameify your business for
                      your targeted customers we can provide you a unique
                      branding.To stand out in today's online ecosystem a
                      company needs an awe-inspiring brand. Infosprint Technologies
                      adds the touch of creativity your brand needs to
                      complement the growth of your company. Creating and
                      evolving brands that can be believed in, touching hearts
                      and influencing minds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default digitalmarketing;
