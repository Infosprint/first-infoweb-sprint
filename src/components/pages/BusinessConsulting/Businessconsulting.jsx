import React from 'react';
import './Businessconsult.css';
import Img1 from "../../../img/MicrosoftTeams-image (17).png";
import { padding } from '@mui/system';

const Businessconsulting = () => {
    return (
      <div className="main-wrapper">
      <div className="align-items-center align-self-center text-center">
          <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
    style={{
      height: '300px'}}
    >
        <div className="text-center" style={{marginBottom: '96px'}}>
        <div className="row justify-content-center">
                        <h1 className="i-heading text-capitalize">Business Consulting</h1>
                    </div>
                      </div>
                      </div>
                    
                </div>
             <div className="row">
                <div className="col-md-6 align-items-center align-self-center">
                  <div className="row">
                    <h1 className="s-subtitle text-capitalize mt-5 text-center">
                    Business Consulting
                    </h1>
                  </div>
                  <div className="row p-3">
                    <p className="h-para">
                    Business consultants are efficient in helping organizations to improve performance and efficiency by providing effective business analysis, 
solutions and also maintaining companies’ agenda of targets. Most of the business owners consider selecting business consultants at the 
time of deciding the path on which they want to drive their businesses. Most business owners hire consultants to identify growth problems, 
expertise in a specific market, increase the productivity of existing staff, change business paradigms, recognize new business objectives, 
educate employees, terminating unproductive business strata, revitalize old yet potential business opportunities, and influence decision-makers. 
As a consultant joins any company or a client, firstly it discovers the objectives of the company or the client. Afterwards, the consultant learns the possibilities 
of growth and plans accordingly.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 align-items-center align-self-center">
                  <img src={Img1} alt="img1" className="m-img-1" />
                </div>
              </div>
            {/* <h1 className="i-heading text-center mt-5 pb-5">Business Consulting</h1>
        <p className="h-para">
        The Business Consulting Services performs the customer on strategy. Solving the problem and improve the marketing skills and knowledge. 
        As well as it helps to concern the several of business problems. In fact, it works with the customer on strategy, 
        solving the problem and also planning to develop the business skills.
        </p> */}
        <div className="row pb-5">
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="al-service-box pt-5 pb-4 px-5 border rounded">
                    <span className="al-service-icon"> <i className="fas fa-car fa-5x"></i></span>
                    <h3 className="mt-3">Business Evolution Model</h3>
                    <p className="mt-3 paragraph">Sometimes management might not able to see problems because of working in the same conditions or environment for long period. Therefore, it becomes important to get a view from any outsiders who are also expert in your field. 
                    Probably, who can be better than a business consulting service?</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="al-service-box pt-5 pb-4 px-5 border rounded">
                    <span className="al-service-icon"> <i className="fas fa-car fa-5x"></i>
                    </span>

                    <h3 className="mt-3">Product Innovation</h3>
                    <p className="mt-3">Therefore, hiring a business consultant can be a better option as they are professionals' employees and not full-time employees; therefore,
                     they will offer you tips which can save you money in the long run.To enjoy all these above benefits,contact a proficient business consulting service</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="al-service-box pt-5 pb-4 px-5 border rounded">
                    <span className="al-service-icon"> <i class="fas fa-car fa-5x"></i></span>

                    <h3 className="mt-3">Digital Marketing</h3>
                    <p className="mt-3">Although you may have a solid understanding of business practices but, it may be impossible that you know everything in all areas. A business consultant expert will enlighten your mind with some new skills in business strategies, 
                    thereby allowing you to implement new changes.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Businessconsulting;