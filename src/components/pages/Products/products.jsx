import React from "react";
import "./products.css";
import img1 from '../../../img/MicrosoftTeams-image.png';

const p_land = () => {
  return (
    <div>
       <div className="col-lg-12 col-md-11 col-11 mx-auto">
                            <div className="row gy-5 ">
                                <div className="col-12 card p-4 shadow blog_left__div">
                                    <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-3">
                                        <h1 className="text-uppercase" style={{color: '#09098f'}}>Best AutoNTrade in 2022</h1>
                                    </div>
                                    <div className="row justify-content-center mt-4">
                <div className="col-10 align-items-center align-self-center">
                  <p className="h-para">
                  Car N Trade is an automotive portal for cars. Customers come to Car N Trade to buy new or used cars or to sell their cars. 
                  They can also research our content and use our tools such as car reviews, price guides, car specifications, car images, used car inventory, car finance offers and trade-in tools. 
                  They can inquire about a new or used car and we connect them to a new or used car dealer or OEM.
                  </p>
                </div>
              </div>
                                    <div>
                                        <img src={img1} alt='img' className="product-img1" />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
  );
};

export default p_land;
