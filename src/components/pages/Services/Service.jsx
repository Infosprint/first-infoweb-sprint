import React from 'react';
// import {useNavigate} from 'react-router-dom';
import img11 from '../../../img/MicrosoftTeams-image (4).png';
import "./service.css";

const Services = () => {
  // const history = useNavigate();

  return (
    <>
    <div className="main-wrapper pb-5">
        <div className="container-fluid">
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center text-center">
                  <div className="row justify-content-center">
                      <h1 className="se-heading text-capitalize">services</h1>
                  </div>
                  <div className="row justify-content-center">
                      <p className="h-para">
                      Visually appealing, polished, and Professional,Intuitive to use,Optimized for mobile devices and search engines,
                      With easily accessible contact information,Matching the current trends,
                      Regularly check for any broken links or not working scripts

                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img11} alt="img5" className="se-img-5" />
                </div>
            </div>
            <div className="s-container">
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
</div>
            {/* <div className="container mb-5">
    <div className="row justify-content-center">
        <div className="col-md-3 offset-md-1 rounded bg-white border p-4 text-center">
            <div className="carousel slide" id="mySlider">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="py-4 blue-text">
                            <h4 className="font-weight-bold">List Tracking</h4>
                            <p>IN REAL TIME</p>
                            <p>we make time tracking so simple you'll actually use it. But even if you forget, our tracking reminders.                                    
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="pt-4 blue-text d-flex flex-column pb-2">
                            <h4 className="font-weight-bold">Sales Track</h4>
                            <p>MAXIMUM SALES</p>
                            <p>know how much your time is worth? Break down your hours by projects, clients and tasks to see what's making you money.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <div className="pt-4 blue-text">
                            <h4 className="font-weight-bold">Stategy</h4>
                            <p>IS REQUIRED</p>
                            <p>Start tracking in your browser, stop the timer o your phone -all your time entires are synced between the phone apps, desktop apps.
                            </p>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        <div className="col-md-3 offset-md-1 rounded bg-white border p-4 text-center">
            <div className="carousel slide" id="mySlider1">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" width="200" />
                        <div className="py-4 blue-text">
                            <h4 className="font-weight-bold">List Tracking</h4>
                            <p>IN REAL TIME</p>
                            <p>we make time tracking so simple you'll actually use it. But even if you forget, our tracking reminders.                                    
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" width="200" />
                        <div className="pt-4 blue-text d-flex flex-column pb-2">
                            <h4 className="font-weight-bold">Sales Track</h4>
                            <p>MAXIMUM SALES</p>
                            <p>know how much your time is worth? Break down your hours by projects, clients and tasks to see what's making you money.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" width="200" />
                        <div className="pt-4 blue-text">
                            <h4 className="font-weight-bold">Stategy</h4>
                            <p>IS REQUIRED</p>
                            <p>Start tracking in your browser, stop the timer o your phone -all your time entires are synced between the phone apps, desktop apps.
                            </p>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        <div className="col-md-3 offset-md-1 rounded bg-white border p-4 text-center">
            <div className="carousel slide" id="mySlider2">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" width="200" />
                        <div className="py-4 blue-text">
                            <h4 className="font-weight-bold">List Tracking</h4>
                            <p>IN REAL TIME</p>
                            <p>we make time tracking so simple you'll actually use it. But even if you forget, our tracking reminders.                                    
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" width="200" />
                        <div className="pt-4 blue-text d-flex flex-column pb-2">
                            <h4 className="font-weight-bold">Sales Track</h4>
                            <p>MAXIMUM SALES</p>
                            <p>know how much your time is worth? Break down your hours by projects, clients and tasks to see what's making you money.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" width="200" />
                        <div className="pt-4 blue-text">
                            <h4 className="font-weight-bold">Stategy</h4>
                            <p>IS REQUIRED</p>
                            <p>Start tracking in your browser, stop the timer o your phone -all your time entires are synced between the phone apps, desktop apps.
                            </p>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    </div>
</div> */}
        </div>
    </div>
</>
  )
}

export default Services