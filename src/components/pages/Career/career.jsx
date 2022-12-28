import React from "react";
import "./career.css";

const Career = () => {

  return (
      <div className="container-fluid">
        <div className="row justify-content-center mb-5">
        <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
  style={{
    height: '300px'}}
  >
      <div className="text-center">
      <div className="row justify-content-center">
                      <h1 className="se-heading text-capitalize">Career</h1>
                  </div>
                    </div>
                    </div>
        <section>
<div className="box1">
  <div className="box-col box-80">
     <h4 className="jobtitle">Digital Marketing</h4>
    <span className="function">Hyderabad</span>
  </div>
  <div className="box-col box-20 text-right">
    <a className="joblink" href="/career/success">Apply</a>
  </div>
</div>
<div className="box1">
  <div className="box-col box-80">
     <h4 className="jobtitle">Frontend Developer</h4>
    <span className="function">Hyderabad</span>
  </div>
  
  <div className="box-col box-20 text-right">
    <a className="joblink" href="/career/success">Apply</a>
  </div>
  
</div>
<div className="box1">
  <div className="box-col box-80">
     <h4 className="jobtitle">Full-Stack Developer</h4>
    <span className="function">Hyderabad</span>
  </div>
  <div className="box-col box-20 text-right">
   <a className="joblink" href="/career/success">Apply</a>
  </div>
  </div>
  <div className="box1">
  <div className="box-col box-80">
     <h4 className="jobtitle">MERN Stack Developer</h4>
    <span className="function">Hyderabad</span>
  </div>
  <div className="box-col box-20 text-right">
   <a className="joblink" href="/career/success">Apply</a>
  </div>
  </div>
  </section>
        </div>
      </div>
  );
};

export default Career;
