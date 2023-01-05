import React, {useState} from "react";
import "./landing.css";
import Img1 from "../../../img/MicrosoftTeams-image (6).png";
import { useSelector, useDispatch, } from 'react-redux'
import { editUserEmail, removeUserContactResponceStatus, userContactPost } from "../../../redux/reducer";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import video from '../../pages/Video/iStock-1353527696-mp4_format.mp4';

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
      <div className="w-full">
      <div className="row justify-content-center g-2 align-baseline"> 
    <video src={video} className="l-video" controls autoPlay muted /> 
</div>
            <div className="row justify-content-between">
            <div className="services pd align-center">
            <div className="col-lg-12 text-center">
            <h2 className="section-title">About us</h2>
        </div>
            <p className="text-center h-para pb-3">Infosprint Technologies is your reliable, innovative, and full-scale business transformation partner. We enable businesses to adopt cutting-edge technologies and thereby help them to achieve legacy modernization. Our USP is definitely directed at realizing the clients' IT needs with an offer of custom digital transformation strategy. We further collaborative efforts to re-imagine IT. This we do capably through prime partnerships and collaborations with top-notch providers of IT solutions like Pega, Appian, Salesforce, SAP, Automation Anywhere and others. 

Infosprint' Business Consulting Services enable local and global organizations to realize their digital transformation goals and scale at speed. The key to our successful business consulting is in making your business future-proof and creating definite milestones in your digital transformation journey. Our custom, innovative and client-specific business transformation practices deliver exceptional results. We excel at what we do, and this definitely goes without saying. 

</p>
            <section class="section-big main-color">
   <div class="container">

      <div class="row">
         <div class="col-md-12 pb-20 text-center"> 
            
            <div class="exp-separator center-separator">
               <div class="exp-separator-inner">
               </div>
            </div>

         </div>
      </div>

      <div class="row">
         <div class="col-md-4">
            <ul class="i-list medium">
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-desktop"></i> </div>

                  <div class="icon-content">
                     <h3 class="l-title">Digital Transformation </h3>
                     <p class="sub-title">
                     Infosprint' integrated approach to digital business transformation helps your business to drive sustainable growth through superior customer experiences. Also, our team's efforts are directed at keeping your team members inspired, motivated, and aligned to the business plan for digital transformation.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-code"></i> </div>

                  <div class="icon-content">
                     <h3 class="l-title">Business Consulting</h3>
                     <p>
                     Infosrint' business consulting services are focused on optimizing the relationships between people, processes and technologies. Our business consulting experts help your organization to turn efficient and agile by adopting the right process automation tools.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-paper-plane"></i> </div>

                  <div class="icon-content">
                     <h3 class="l-title">Cloud Technologies</h3>
                     <p>
                     Infosprint offers the latest, innovative and highly flexible cloud services. We further strategic partnerships with major cloud providers like AWS, Microsoft Azure and Salesforce on the basis of pay-as-you-go model. Our focus is definitely on technical alignment and joint development. Our cloud engineers help Salesforce customers to integrate with AWS and Microsoft Azure thereby extends their Salesforce capabilities.
                     </p>
                  </div>
               </li>
            </ul>
         </div>
         <div class="col-md-4">
            <ul class="i-list medium">
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-diamond"></i> </div>
                  <div class="icon-content">
                     <h3 class="l-title">BPM</h3>
                     <p class="sub-title">
                     Infosprint's Business Management Practice features low-code capabilities, streamlining of complex processes, higher process efficiency, and decreased time to market. All this we do by capably adopting niche technology solutions such as appian, PEGA, Salesforce and Automation Anywhere. 
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-recycle"></i> </div>
                  <div class="icon-content">
                     <h3 class="l-title">Mobile & CX</h3>
                     <p>
                     Infosprint provides futuristic experiences to targeted customers. This we do by executing full-scale and vibrant Mobile and CX services. Significantly, we offer customized CX strategies for higher customer retention and greater customer delight.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-heart-o"></i> </div>
                  <div class="icon-content">
                     <h3 class="l-title">
API Development</h3>
                     <p>
                     Infosprint's API developers offer practical solutions that meet your organization's aspirations. We design and develop solutions as per your business requirements. Definitely, our API development practice allows for greater customization of the website or app content. We meet in total the needs of end-users and visitors, and make the user experience more flexible and personalized.
                     </p>
                  </div>
               </li>
            </ul>
         </div>
         <div class="col-md-4">
            <ul class="i-list medium">
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-codepen"></i> </div>
                  <div class="icon-content">
                     <h3 class="l-title">
Digital Engineering</h3>
                     <p class="sub-title">
                     Infosprint's digital engineering services feature custom portal development, user-friendly CMSs, and enhanced team collaboration. Our focused efforts are directed at streamlining complex workflows to achieve higher business performance.
                      </p>
                       
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-newspaper-o"></i> </div>
                  <div class="icon-content">
                     <h3 class="l-title">Quality Assurance</h3>
                     <p>
                     Infosprint offers innovative and industry best automation framework. Our QA experts address holistically the challenges of your digital transformation journey. We adhere with proven QA methodologies and applications to achieve enhanced quality of each IT solution, assured security, and greater customer experience.
                     </p>
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
               <li class="i-list-item">
                  <div class="icon"> <i class="fa fa-newspaper-o"></i> </div>
                  <div class="icon-content">
                     {/* <h3 class="l-title">Quality Assurance</h3>
                     <p>
                     Infosprint offers innovative and industry best automation framework. Our QA experts address holistically the challenges of your digital transformation journey. We adhere with proven QA methodologies and applications to achieve enhanced quality of each IT solution, assured security, and greater customer experience.
                     </p> */}
                  </div>
                  <div class="iconlist-timeline"></div>
               </li>
         
            </ul>
         </div>
      </div>
   </div>
</section>
        </div>
        </div>
        <div className="row justify-content-center s-tr pb-5">
            <div className="col-lg-6 align-items-center align-self-center">
                    <img src={Img1} alt="img5" className="se-img-5" />
                </div>
              <div className="col-lg-6 align-items-center align-self-center">
                      <h1 className="section-title text-center">WHY INFOSPRINT ?</h1>
                  <div className="row justify-content-center">
                      <p className="h-para">
                      Advertising, social media, and customer evaluations are just a few examples of the activities that make up brand communication. 
Every time a prospective customer or client connects with a certain brand, brand communication occurs. It can entail subscribing 
to a newsletter or discovering a logo online. Creating a recognizable brand will improve the effectiveness of all communication 
channels.Companies should invest time in creating communication strategies since they are crucial to creating a cohesive brand. 
A brand is likely to fail without a successful strategy. People must be aware that certain goods and services exist in order 
for them to make a purchase, and brand communication makes this knowledge possible. Making a decision on how to communicate is crucial,
 but so is the frequency and accessibility of that communication.
                      {/* <Link to='/products' style={{fontSize: '19px'}}>Learn More</Link> */}
                      <a href='/products' className="btn btn-active btn-primary">Learn More</a>
                      </p>
                  </div>
              </div>
               
            </div>
 <div className="pb-5">
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
      {/* <section className="mx-auto my-5" style={{maxWidth: '23rem'}}>
      <div className="card testimonial-card mt-2 mb-3 single-team">
      <div className="card-up aqua-gradient"></div>
      <div className="avatar mx-auto white img-area">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" className="rounded-circle img-fluid"
          alt="woman avatar" />
      </div>
      <div className="card-body text-center">
        <h4 className="card-title font-weight-bold text-black">Martha Smith</h4>
        <hr />
        <p><i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
          adipisci</p>
      </div>
    </div>
    </section> */}
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
</div>
            {/* <div className="row justify-content-around"  style={{backgroundImage: "url('https://scx1.b-cdn.net/csz/news/800/2017/theoreticala.jpg')",
            height: '585px',backgroundSize: 'cover'}}>
                <div className="col-md-7 align-items-center align-self-center text-center py-md-3 form-back"> */}
                    {/* <div className="row justify-content-center mt-5 mt-md-2 pb-3"> */}
                        {/* <div className="col-sm-8 col-md-10 align-items-center align-self-center"> */}
                            {/* <h2 className="l-sysst text-capitalize">
                                start your success story today
                            </h2> */}
                        {/* </div> */}
                    {/* </div> */}
                    {/* <form onSubmit={handleForm}>
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
              </form> */}
                {/* </div> */}
            {/* </div> */}
            {/* <div className="row justify-content-between">
            <div className="services pd">
            <h3 className="title text-center">Products</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quae?</p>
          <div className="row l-row text-center">
          <div className="card p-3">
          <i className="fas fa-laptop-code text-4xl"></i>
          <h3>RESPECT</h3>
          <p>
          We respect our colleagues, customers and partners
          </p>
        </div>
        <div className="card p-3">
          <i className="fas fa-chart-line"></i>
          <h3>AGILITY</h3>
          <p>
          We are extremely open-minded and adapt
          </p>
        </div>
        <div className="card p-3">
          <i className="fab fa-sketch"></i>
          <h3>OWNERSHIP</h3>
          <p>
          We take ownership of results
          </p>
        </div>
        </div>
            </div>
            </div> */}
        </div>
    </>
  );
};

export default Landing;
