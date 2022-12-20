import React from 'react';
import './Businessconsult.css';

const Businessconsulting = () => {
    return (
        <div className="container">
            <h1 className="i-heading text-center mt-5 pb-5">Business Consulting</h1>
        <p className="h-para">
        The Business Consulting Services performs the customer on strategy. Solving the problem and improve the marketing skills and knowledge. 
        As well as it helps to concern the several of business problems. In fact, it works with the customer on strategy, 
        solving the problem and also planning to develop the business skills.
        </p>
        <div className="row pb-5">
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="al-service-box pt-5 pb-4 px-5 text-center border rounded">
                    <span className="al-service-icon"> <i className="fas fa-car fa-5x"></i></span>
                    <h3 className="mt-3">Business Evolution Model</h3>
                    <p className="mt-3 paragraph">It helps decide the potential growth of your business. It makes to clients better and generates the more revenue.</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="al-service-box pt-5 pb-4 px-5 text-center border rounded">
                    <span className="al-service-icon"> <i className="fas fa-car fa-5x"></i>
                    </span>

                    <h3 className="mt-3">Product Innovation</h3>
                    <p className="mt-3">It helps to target understanding and assist with more creative and innovative ideas that build you stand apart.</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="al-service-box pt-5 pb-4 px-5 text-center border rounded">
                    <span className="al-service-icon"> <i class="fas fa-car fa-5x"></i></span>

                    <h3 className="mt-3">Digital Marketing</h3>
                    <p className="mt-3">You may learn about more related platforms for the digital marketing company or else it helps to dominate an aggressive market.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Businessconsulting;