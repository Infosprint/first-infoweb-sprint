import React from 'react';
import {Link} from 'react-router-dom';
import img1 from '../../../img/MicrosoftTeams-image (5).png';
import img2 from '../../../img/MicrosoftTeams-image (6).png';
import img3 from '../../../img/MicrosoftTeams-image (12).png'
import img4 from '../../../img/MicrosoftTeams-image (4).png';
import img5 from '../../../img/marketing.gif'; 
import "./service.css";

const Services = () => {
  // const history = useNavigate();

  return (
    <>
    <div className="main-wrapper pb-5">
        <div className="align-items-center align-self-center text-center">
        <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
  style={{height: '300px'}}
  >
      <div className="text-center" style={{marginBottom: '96px'}}>
      <div className="row justify-content-center">
                      <h1 className="se-heading text-capitalize">services</h1>
                  </div>
                    </div>
                    </div>
                  
              </div>
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">Business Transformation</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Advertising, social media, and customer evaluations are just a few examples of the activities that make up brand communication. 
Every time a prospective customer or client connects with a certain brand, brand communication occurs. It can entail subscribing 
to a newsletter or discovering a logo online. Creating a recognizable brand will improve the effectiveness of all communication 
channels. 
Companies should invest time in creating communication strategies since they are crucial to creating a cohesive brand. 
A brand is likely to fail without a successful strategy. People must be aware that certain goods and services exist in order 
for them to make a purchase, and brand communication makes this knowledge possible. Making a decision on how to communicate is crucial,
but so is the frequency and accessibility of that communication. 
                      <a href='/businesstrans' className="btn btn-active btn-primary">Read More</a>
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center">
                    <div className='p-5'>
                    <img src={img1} alt="img5" className="se-img-5" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center s-tr pb-3">
            <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img2} alt="img5" className="se-img-5" />
                </div>
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">Business Consulting</h1>
                  </div>
                  <div className="row justify-content-center">
                      <p className="h-para">
                      Present economic situation states that businesses need ways to make way for efficient operations to increase their revenue generation 
while keeping their expenses low at the same time. While some businesses stay ahead of the curve of revenue demands, most of the businesses 
struggle to stay abreast with the demands in this competitive market due to lack of proper consulting. Selecting the right consultant allows a business to grow and increase
potential limit instead of maintaining long-lasting status of either being small-scaled business or medium scaled.
                      <a href='/businessconsulting' className="btn btn-active btn-primary">Read More</a>
                      </p>
                  </div>
              </div>
               
            </div>
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">Digital Marketing</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Advertising, social media, and customer evaluations are just a few examples of the activities that make up brand communication. 
Every time a prospective customer or client connects with a certain brand, brand communication occurs. It can entail subscribing 
to a newsletter or discovering a logo online. Creating a recognizable brand will improve the effectiveness of all communication 
channels.
Companies should invest time in creating communication strategies since they are crucial to creating a cohesive brand. 
                      <a href='/digitalmarketing' className="btn btn-active btn-primary">Read More</a>
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img4} alt="img5" className="se-img-5" />
                </div>
            </div>
            <div className="row justify-content-center s-tr pb-3">
            <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img3} alt="img5" className="se-img-5" />
                </div>
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">MobileNCX</h1>
                  </div>
                  <div className="row justify-content-center">
                      <p className="h-para">
                      The CX-Mobile is also highly configurable with a range of energy levels, networking capabilities and menu of optional scanning features. 
Designed for travel on public roads and highways, the system is available with a choice of truck options. 
Plus you can count on Leidos services and support teams to fully integrate the system into your workflow.
                      <a href='/mobilencx' className="btn btn-active btn-primary">Read More</a>
                      </p>
                  </div>
              </div>
               
            </div>
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center text-center">
                      <h1 className="section-title">QA Services</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Software programs are more complex than ever, and with the pressure to continually release new updates and features, traditional testing strategies just can’t keep up.
While internal user testing is an option for some companies, it won’t replace thorough QA testing. That’s because non-technical employees might be able weigh in on 
UI or design glitches, but they won’t find problems at the database level.
Quality assurance services, on the other hand, specialize in uncovering bugs, and can put your product through rigorous testing, both manual and automated.
                      {/* <a href='/businesstrans' style={{fontSize: '17px'}}>Read More</a> */}
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img5} alt="img5" className="se-img-5" />
                </div>
            </div>
    </div>
</>
  )
}

export default Services