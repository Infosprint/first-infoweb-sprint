import React from 'react';
import './footer.css';
import Logo from '../../img/Infosprint Technologies Logo (1).jpg';


export function Footer() {

  return (
      <footer className="footer-section mt-3">
        <div className="container">
            <div className="footer-cta pt-4 pb-2">
                <div className="row">
                    <div className="col-md-4 mb-30">
                      <div classNameName='row'>
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="col-md-8 cta-text text-capitalize">
                                <h4>Find us</h4>
                                <span>Infosprint Technologies Private Limited
16, 5th Floor, Bizness Square,  Hitech city Rd, Laxmi cyber city Hyderabad, Telangana, 500033</span>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+91-6302184327</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span> info@infosprinttech.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                            <img src={Logo} alt="" width="100%" height="35" />
                            </div>
                            <div className="footer-text">
                                <p>Infosprint Technologies is a global product cum service-based IT start up empowered with Innovative Research & Development, Implementation and Rapid Delivery.
                                     We specialise in Web Designing , Mobile Applications, and also render services for hedge clients over Digital Marketing & Consultancy in cross-functional Domains.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://business.facebook.com/"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://twitter.com/"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram instagram-bg"></i></a>
                                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin linkedin-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="copyright-text text-center">
                        <p>Copyright &copy; 2022, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
