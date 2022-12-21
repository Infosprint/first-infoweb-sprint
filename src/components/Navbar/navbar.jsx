import React from "react";
import {useNavigate} from 'react-router-dom';
import Logo from '../../img/Infosprint Technologies Logo (1).jpg';
import "./navbar.css";


const Navbar = () => {

  const navigation= useNavigate();

  return (
    <nav className="navbar navbar-expand-lg n-bag">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {/* <h5 style={{fontWeight: 'bold'}}>Infosprint Technologies</h5> */}
          <img src={Logo} alt="" width="100%" height="35" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="nav-content">
        <div className="d-flex justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/services"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{
                    navigation('/services')
                  }}
                >
                  Services                
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/businesstrans">Business Transformation</a></li>
                  <li><a className="dropdown-item" href="/businessconsulting">Business consulting</a></li>
                  <li><a className="dropdown-item" href="/digitalmarketing">Digital Marketing</a></li>
                  <li><a className="dropdown-item" href="/mobilencx">Mobile and CX</a></li>
                  <li><a className="dropdown-item" href="/qaservices">QA Services</a></li>              
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{
                    navigation('/products')
                  }}
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/autontrade">AutoNTrade</a></li>
                </ul>
              </li>
                <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/contactus"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{
                    navigation('/contactus')
                  }}
                >
                  Contact Us                
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/jobposting">Job Posting</a></li>
                </ul>
              </li>
              {/* <li className="nav-item active">
                <a className="nav-link" id="google_translate_element">
                  </a>
              </li> */}
            </ul>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
