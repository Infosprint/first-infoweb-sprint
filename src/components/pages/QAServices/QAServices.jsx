import React from "react";
import "./QAservices.css";
import img1 from "../../../img/MicrosoftTeams-image (31).png";
import img2 from "../../../img/MicrosoftTeams-image (32).png";
import img3 from "../../../img/MicrosoftTeams-image (33).png";

const QAservices = () => {
  return (
    <>
      <div className="main-wrapper">
      <div className="bg_image1 p-5 shadow-1-strong text-white"
  style={{ height: '300px'}}>
      <div className="text-center">
      <div className="row justify-content-center">
                      <h1 className="i-heading text-capitalize">QAServices</h1>
                  </div>
                    </div>
                    </div>
                    
            <h3 className="title text-center pt-5">Setup Plan with Time and Costs</h3>
            <p className="h-para p-3">Infosprint Technologies has created this Privacy Policy in order to demonstrate its commitment in respecting the privacy of its user(s) and protecting your personal information received during the use or access of our website.

We have developed this Privacy Policy for you to understand how we collect, communicate and disclose and make use of personal information provided by you.

• Collection and the purpose for which information may be collected

We collect personal information by lawful and fair means and, wherever appropriate, with the knowledge or consent of the provider of such data or information.

We collect and use your personal information solely with the objective of fulfilling the purpose(s) specified by us and for other compatible purposes only.

Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.

You can visit or access our website without telling us who you are and without revealing any information on the same. However, there are times when we would require information from you. Our website may require you to give us your contact information like your name, email address, present job details, phone .</p>
                    <div class="row row-cols-1 row-cols-md-3 g-3 p-5">
    <div class="col">
    <div class="card">
      <img src={img1} class="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div class="card-body">
                <h5 class="card-title s-subtitle">Compatibility testing</h5>
                <p class="card-text q-services">This is a subset of usability testing, verifying the software product is accessible to the users under consideration having disabilities (deaf, blind, mentally disabled etc.). 
                The end goal, in both usability and accessibility, is to discover how easily people can use </p>
            </div>
    </div>
    </div>
    <div class="col">
    <div class="card">
      <img src={img2} class="card-img-top"
        alt="Hollywood Sign on The Hill" />
          <div class="card-body">
                <h5 class="card-title s-subtitle">Accessibility</h5>
                <p class="card-text q-services">An organization can use performance testing as a diagnostic aid to locate computing or communications bottlenecks within a system. Bottlenecks are a single point or component within a system's overall function that holds back overall performance.</p>
            </div>
    </div>
    </div>
    <div class="col">
    <div class="card">
      <img src={img3} class="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div class="card-body">
                <h5 class="card-title s-subtitle">Security testing</h5>
                <p class="card-text q-services">The software industry has achieved solid recognition in this age. In recent decades, however, the cyber-world seems to be an even more
                 dominating and driving force which is shaping up the new forms of almost every business.</p>
            </div>
    </div>
    </div>
</div>
      </div>
    </>
  );
};

export default QAservices;
