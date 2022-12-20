import React, {useState} from "react";
import "./landing.css";
// import img13 from "../../../img/Man chatting on dating site.svg";
import { useSelector, useDispatch, } from 'react-redux'
import { editUserEmail, removeUserContactResponceStatus, userContactPost } from "../../../redux/reducer";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';


const Landing = () => {
    const { userContactResponceStatus,userEmail } = useSelector(store => store.userContact)

        const [userContact, setUserContact] = useState({
            name: null,
            mobile: null,
            email: userEmail || null
           
        });
    
        const [wait, setwait] = useState(false)
    
        const dispatch = useDispatch()
        let navigation = useNavigate();

        const PHONE_REGEXP = /^[6789]\d{9}$/;
    
        if (userContactResponceStatus && wait) {
            setTimeout(() => {
                dispatch(removeUserContactResponceStatus())
            }, 3000)
            setwait(false)
        }
    const handleForm = (e) => {
        console.log(userContactPost(userContact));
          e.preventDefault();
         if (!PHONE_REGEXP.test(+userContact.mobile))
             return alert("Please enter a valid phone number");
           dispatch(userContactPost(userContact))
           dispatch(editUserEmail(userContact.email))
           setwait(!wait)
           setUserContact({
               name: null,
               mobile: null,
               email: null
              
      });
  
      e.target.name.value = "";
      e.target.mobile.value = "";
      e.target.email.value = "";
      
}

  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
      <div className="row justify-content-between">
      <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp')",height: '585px'}}>
      <div className="align-items-center align-self-center text-center">
                        <div className="row justify-content-center">
                            <h1 className="l-heading text-capitalize">
                                digital transformation with InfoSprint Technologies
                            </h1>
                        </div>
                        <div className="row justify-content-center">
                            <p className="la-para">
                            We Info sprint Technologies help you dream big with ur business.
                            </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4 align-items-center align-self-center">
                                <a href="/contactus" className="btn btn-lg btn-warning l-btn-1">
                                    <span className="l-gs text-capitalize">get started</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
          {/* <div className="col-xs-12 col-sm-4 col-md-6">
              <div className="col-xs-12">
                    <img src={img1} alt="productimg" className="product-img1" />
              </div>
          </div> */}
      </div>
            {/* <div className="row justify-content-center">
                <div className="row justify-content-center mt-1">
                    <div className="col align-items-center align-self-center">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img4} className="d-block w-100 curousal-height" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100 curousal-height" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img6} className="d-block w-100 curousal-height" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                </div>
            </div> */}
            <div className="row justify-content-between">
            <div className="services pd">
            <h3 className="title">Services</h3>
          <div className="row l-row">
          <div className="card l-cards service">
          <i className="fas fa-laptop-code"></i>
          <h2>Web Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="card l-cards service">
          <i className="fas fa-chart-line"></i>
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        <div className="card l-cards service">
          <i className="fab fa-sketch"></i>
          <h2>Graphics</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?
          </p>
        </div>
        </div>
        </div>
        </div>
            <div className="row justify-content-between">
            <div className="services pd">
            <h3 className="title">Products</h3>
          <div className="row l-row">
          <div className="card l-cards service">
          <i className="fas fa-laptop-code"></i>
          <h2>RESPECT</h2>
          <p>
          We respect our colleagues, customers and partners
          </p>
        </div>
        <div className="card l-cards service">
          <i className="fas fa-chart-line"></i>
          <h2>AGILITY</h2>
          <p>
          We are extremely open-minded and adapt
          </p>
        </div>
        <div className="card l-cards service">
          <i className="fab fa-sketch"></i>
          <h2>OWNERSHIP</h2>
          <p>
          We take ownership of results
          </p>
        </div>
        </div>
            {/* <div class="row">
            <div class="col-lg-4 d-flex justify-content-center">
                <div class="card l-cards">
                    <input class="toggle-heart" type="checkbox" />
                    <span class="fas fa-heart"></span>
                    <div class="card-body text-center">
                        <div class="card-img py-2">
                            <img src={img13} alt="" className="img13" />
                        </div>
                        <div class="blue-text h5">RESPECT</div>
                        <div class="paragraph">
                        We respect our colleagues, customers and partners
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center">
                <div class="card l-cards">
                    <input class="toggle-heart" type="checkbox" />
                    <span class="fas fa-heart"></span>
                    <div class="card-body text-center">
                        <div class="card-img py-2">
                            <img src={img13} alt="" className="img13" />
                        </div>
                        <div class="blue-text h5">AGILITY</div>
                        <div class="paragraph">
                        We are extremely open-minded and adapt
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 d-flex justify-content-center">
                <div class="card l-cards">
                    <input class="toggle-heart" type="checkbox" />
                    <span class="fas fa-heart"></span>
                    <div class="card-body text-center">
                        <div class="card-img py-2">
                            <img src={img13} alt="" className="img13" />
                        </div>
                        <div class="blue-text h5">OWNERSHIP</div>
                        <div class="paragraph">
                            We take ownership of results
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
            </div>
            </div>
 
            <div className="row justify-content-center mt-sm-0 mt-lg-5 team-title">
                <div className="col-sm-8 align-items-center align-self-center text-center">
                    <h4 className="l-oct text-capitalize">
                        our creative team
                    </h4>
                </div>
            </div>
            <div className="team-area">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://i.postimg.cc/wMMhrMDm/2.jpg" className="img-responsive" alt="" />
            <div className="social">
              <ul className="list-inline">
                <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>John Doe</h4>
            <h5>Web Designer</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://1.bp.blogspot.com/-cISC5xoywEA/YRleZqupHzI/AAAAAAAACZE/w7jfz6BTGf4IJv9kV-ijNP3kKxW3JpZXQCNcBGAsYHQ/s0/3%2B%25282%2529.jpg" class="img-responsive" alt="" />
            <div className="social">
              <ul className="list-inline">
              <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Alex Wood</h4>
            <h5>Apps Developer</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src="https://1.bp.blogspot.com/-cGZY1xJjPNc/YRleZmEbEHI/AAAAAAAACZA/P-WOeYZegAQdUCF66C0E1ZF4zMEzaUvggCNcBGAsYHQ/s0/3%2B%25281%2529.jpg" class="img-responsive" alt="" />
            <div className="social">
              <ul className="list-inline">
              <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Rosie Meg</h4>
            <h5>Game Developer</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            <div className="row justify-content-around mt-5 mb-5">
                <div className="col-md-7 align-items-center align-self-center text-center py-md-3 form-back">
                    <div className="row justify-content-center mt-5 mt-md-2 pb-3">
                        <div className="col-sm-8 col-md-10 align-items-center align-self-center">
                            <h2 className="l-sysst text-capitalize">
                                start your success story today
                            </h2>
                        </div>
                    </div>
                    <form onSubmit={handleForm}>
                <div className="row justify-content-center">
                <div className="form-group col-md-8">
                             <input 
                                            value={userContact.name} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    name: e.target.value })
                                            }} 
                                            type="text" 
                                            className="form-control l-form-control mt-2"
                                            placeholder="Enter Your Name" 
                                            name="name"
                                            required 
                                            />
                             </div>
                                 <div className="form-group col-md-8">
                                       <input
                                             value={userContact.mobile} 
                                             onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    mobile: e.target.value })
                                            }} 
                                            type="number" 
                                            className="form-control l-form-control mt-2" 
                                            placeholder="Mobile Number" 
                                            name="mobile"
                                            required 
                                            />
                             </div>
                             <div className="form-group col-md-8">
                             <input 
                                            value={userContact.email} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    email: e.target.value })
                                            }} 
                                            type="email" 
                                            className="form-control l-form-control mt-2"
                                            placeholder="Enter Your @mail Address" 
                                            name="email"
                                            required 
                                            />
                             </div>
                 
                  {userContactResponceStatus && (userContactResponceStatus == 'success' ?
                            <Alert style={{ marginTop: '2%' }} severity="success">{userContactResponceStatus}!</Alert> :
                            <Alert style={{ marginTop: '2%' }} severity="error">{userContactResponceStatus}!</Alert>)}
                </div>
                <div className="col-sm-6 offset-3 form-group mt-5">
                    <input
                      type="submit"
                      className="btn btn-primary px-3 py-2 l-submitbtn"
                      value="Submit"
                    />
                  </div>
              </form>
                </div>
                {/* <div className="col-md-5 align-items-center align-self-center">
                    <img src={img13} alt="img13" className="l-img-13" />
                </div> */}
            </div>
            </div>
        </div>
    </>
  );
};

export default Landing;