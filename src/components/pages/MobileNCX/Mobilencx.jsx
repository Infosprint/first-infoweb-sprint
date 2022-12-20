import React from "react";
import "./mobilencx.css";
import Img1 from "../../../img/app-development-1.gif";

const Mobilencx = () => {
  return (
    <>
     {/* <section class="marginn"> */}
    <section>
    <div className="row flex-lg-row-reverse align-items-center mb-5">
        <div className="col-10 col-sm-8 col-lg-6 mt-5">
          <img src={Img1} className="d-block mx-lg-auto img-fluid" alt="Yo wassup" />
        </div>
        <div className="col-lg-6 p-5">
          <h1 className="display-5 fw-bold lh-1 mb-3 se-heading">MobileNCX</h1>
          <p className="h-para">We are focused on blockchain. The company offers mobile and platforms, distributed applications, system integration, and more.
We’re Mobile Marketing, a results-focused agency specializing in growing businesses by creating digital marketing experiences. Our holistic approach to the digital experience has enabled us to help various companies and business entities grow their brands through our best-in-class marketing methodologies. Working under our five pillars digital strategy, awareness, engagement, conversion & sales, and customer loyalty, we aim to offer a unified digital experience expertly designed to drive results. While we work with brands and businesses from many spheres, the bulk of our business revolves around the flooring industry. 
</p>
        </div>
      </div>
      </section>
    {/* </section> */}
    </>
  );
};

export default Mobilencx;
