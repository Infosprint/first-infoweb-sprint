import React from "react";
import "./products.css";
import img1 from '../../../img/MicrosoftTeams-image (13).png';

const p_land = () => {
  return (
    <div>
       <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
  style={{ height: '300px'}}>
      <div className="text-center">
      <div className="row justify-content-center">
                      <h1 className="se-heading text-capitalize">Products</h1>
                  </div>
                    </div>
                    </div>
          <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">Best AutoNTrade in 2022</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      First, you will choose a platform and set the parameters of your trading strategy. You’ll use your trading experience to create a set of rules and conditions, and then your custom algorithm will apply the criteria to place trades on your behalf. These factors are normally based on the timing of the trade, the price at which it should be opened and closed, and the quantity. For example.
The automated trading strategy that’s been set will constantly monitor financial market prices, and trades will automatically be executed if predetermined parameters are met. The aim is to execute trades faster and more efficiently, and to take advantage of specific, technical market events.
                      </p>
                  </div>
              </div>
              <div className="col-lg-6 col-sm-6 mb-4">
                    <div className='p-5'>
                    <img src={img1} alt="img5" className="se-img-5" />
                    </div>
                </div>
              </div>
       {/* <div className="col-lg-12 col-md-11 col-11 mx-auto">
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
                                    </div> */}
                                    </div>
  );
};

export default p_land;
