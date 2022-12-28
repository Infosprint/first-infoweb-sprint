import React from "react";

const JobApply = () => {
return(
    <div className="container bg-base-100 shadow-xl mt-5 mb-5" style={{width: '60%'}}>
    <div className="card">
    <div className="card-body text-center">
      <h2 className="card-title pb-2" style={{color: 'green'}}>Success</h2>
      <p className="h-para pb-2">Thanks For Applying For This Role, You Can Contact This Below Email !</p>
      <div className="card-actions justify-end">
        <h5 className="pb-2 underline"><u>hr@infosprinttech.com</u></h5>
        <p className="h-para">Will get back to you soon...</p>
      </div>
    </div>
  </div>
  </div>
)
}

export default JobApply;