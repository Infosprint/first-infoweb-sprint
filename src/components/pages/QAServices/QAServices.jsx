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
            <p className="h-para p-3">Manual testing is when a human tester actually sits down at the computer (or mobile device) and uses the software themselves. The main benefit to manual testing 
is that you can get real-time feedback without having to design an automated test.
The downside to manual testing is that it takes time for an individual to perform the test, 
and there’s a greater chance of human error or inconsistent behavior.
Automated testing is performed using a test script that can be run repeatedly, 
either by focusing on a specific aspect of the program, or performing the same actions in
different ways to see whether they all get the desired result.
The benefit to automated testing is that you can dive deep and find bugs
that a human tester can’t see, while avoid the variables that comes with manual testing.</p>
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
