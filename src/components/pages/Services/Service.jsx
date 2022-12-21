import React from 'react';
import {Link} from 'react-router-dom';
import img1 from '../../../img/MicrosoftTeams-image (5).png';
import img2 from '../../../img/MicrosoftTeams-image (6).png';
import img3 from '../../../img/MicrosoftTeams-image (12).png'
import img11 from '../../../img/MicrosoftTeams-image (4).png';
import "./service.css";

const Services = () => {
  // const history = useNavigate();

  return (
    <>
    <div className="main-wrapper pb-5">
        <div className="align-items-center align-self-center text-center">
        <div className="bg_image1 p-5 text-center shadow-1-strong text-white"
  style={{height: '300px'}}
  >
      <div className="text-center" style={{marginBottom: '96px'}}>
      <div className="row justify-content-center">
                      <h1 className="se-heading text-capitalize">services</h1>
                  </div>
                    </div>
                    </div>
                  
              </div>
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">Business Transformation</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Advertising, social media, and customer evaluations are just a few examples of the activities that make up brand communication. 
Every time a prospective customer or client connects with a certain brand, brand communication occurs. It can entail subscribing 
to a newsletter or discovering a logo online. Creating a recognizable brand will improve the effectiveness of all communication 
channels. 
Companies should invest time in creating communication strategies since they are crucial to creating a cohesive brand. 
A brand is likely to fail without a successful strategy. People must be aware that certain goods and services exist in order 
for them to make a purchase, and brand communication makes this knowledge possible. Making a decision on how to communicate is crucial,
but so is the frequency and accessibility of that communication. 
                      <Link to='/businesstrans' style={{fontSize: '17px'}}>Read More</Link>
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center">
                    <div className='p-5'>
                    <img src={img1} alt="img5" className="se-img-5" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center s-tr pb-3">
            <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img2} alt="img5" className="se-img-5" />
                </div>
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">Business Consulting</h1>
                  </div>
                  <div className="row justify-content-center">
                      <p className="h-para">
                      Present economic situation states that businesses need ways to make way for efficient operations to increase their revenue generation 
while keeping their expenses low at the same time. While some businesses stay ahead of the curve of revenue demands, most of the businesses 
struggle to stay abreast with the demands in this competitive market due to lack of proper consulting. Selecting the right consultant allows a business to grow and increase
potential limit instead of maintaining long-lasting status of either being small-scaled business or medium scaled.
                      <Link to='/businessconsulting' style={{fontSize: '17px'}}>Read More</Link>
                      </p>
                  </div>
              </div>
               
            </div>
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">Digital Marketing</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Advertising, social media, and customer evaluations are just a few examples of the activities that make up brand communication. 
Every time a prospective customer or client connects with a certain brand, brand communication occurs. It can entail subscribing 
to a newsletter or discovering a logo online. Creating a recognizable brand will improve the effectiveness of all communication 
channels.
Companies should invest time in creating communication strategies since they are crucial to creating a cohesive brand. 
                      <Link to='/digitalmarketing' style={{fontSize: '17px'}}>Read More</Link>
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img11} alt="img5" className="se-img-5" />
                </div>
            </div>
            <div className="row justify-content-center s-tr pb-3">
            <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img3} alt="img5" className="se-img-5" />
                </div>
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">MobileNCX</h1>
                  </div>
                  <div className="row justify-content-center">
                      <p className="h-para">
                      The CX-Mobile is also highly configurable with a range of energy levels, networking capabilities and menu of optional scanning features. 
Designed for travel on public roads and highways, the system is available with a choice of truck options. 
Plus you can count on Leidos services and support teams to fully integrate the system into your workflow.
                      <Link to='/mobilencx' style={{fontSize: '17px'}}>Read More</Link>
                      </p>
                  </div>
              </div>
               
            </div>
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center text-center">
                      <h1 className="section-title">QA Services</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Software programs are more complex than ever, and with the pressure to continually release new updates and features, traditional testing strategies just can’t keep up.
While internal user testing is an option for some companies, it won’t replace thorough QA testing. That’s because non-technical employees might be able weigh in on 
UI or design glitches, but they won’t find problems at the database level.
Quality assurance services, on the other hand, specialize in uncovering bugs, and can put your product through rigorous testing, both manual and automated.
                      <Link to='/businesstrans' style={{fontSize: '17px'}}>Read More</Link>
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img11} alt="img5" className="se-img-5" />
                </div>
            </div>
            {/* <div className="s-container">
    <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-title">Services We Provide</h2>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">Networking</h4>
                    <p>The exchange of information and ideas among people with a common profession
Or special interest, Usually in an informal social setting.
</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">Social Activity</h4>
                    <p>A self-regulating business model that helps a company be socially
Accountable to itself, its stakeholders, and the public.
</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-desktop icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">Web Design</h4>
                    <p>We make creative website using imagination and technology to help brands grow in an age of Digital transformation</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">Cloud Service</h4>
                    <p>The delivery of different services through the internet which includes 
Tools and applications like data storage, networking, and software.
</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-comments icon-lg icon-red icon-bg-red icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">Consulting</h4>
                    <p>Help you address the risks and opportunities that digital technologies 
Are created for your business. Develop an innovative</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-search-plus icon-lg icon-green icon-bg-green icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">SEO Optimization</h4>
                    <p>SEO can take your internet platforms to the next level, earning your company to higher ROI than traditional marketing for growth.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-user icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">Usability Testing</h4>
                    <p>Testing your design informally on passers-by risks include inaccurate data, It represents users requirements. </p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
            <div className="s-card border-0 shadow rounded p-5">
                <div className="card-body"> <i className="fa fa-envelope icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3"></i>
                    <h4 className="mt-4 mb-3 s-subtitle">UX Prototyping</h4>
                    <p>The process of prototyping—from creating simple wireframes to testing fully functional mock-ups—is one of the most potent set of skills.</p>
                </div>
            </div>
        </div>
    </div>
</div> */}
    </div>
</>
  )
}

export default Services