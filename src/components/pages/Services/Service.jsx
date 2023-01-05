import React from 'react';
import {Link} from 'react-router-dom';
import img1 from '../../../img/MicrosoftTeams-image (5).png';
import img2 from '../../../img/MicrosoftTeams-image (6).png';
import img3 from '../../../img/MicrosoftTeams-image (12).png'
import img4 from '../../../img/MicrosoftTeams-image (4).png';
import img5 from '../../../img/marketing.gif'; 
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
                      <h1 className="section-title text-center">
DIGITAL TRANSFORMATION
</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Infosprint promotes an innovative and collaborative effort to re-imagine IT. This we do capably by leveraging on best of IT solutions. Basically, our digital transformation process covers the macro and micro expectations of your organization's business systems. 
At the macro level we focus on aligning custom and innovative technologies with the established objectives and goals of your business. At the micro level we evolve a formalized plan on how, when, and what kind of strategic upgrades your business should make to core systems to achieve the needful digital transformation.
Significantly, our digital transformation strategy leverages on the new and emerging technologies. The focus of our digital transformation strategy is directed at
●	Making changes to your business models
●	Bringing innovations to your products and services
●	Developing new value chains to meet the changing needs of your customers
Infosprint' digital transformation services help businesses to improve their business processes and leverage on new business models and gain additional capabilities. So, by means of a consistent and reliable digital transformation strategy businesses can derive greater value from the available data, processes, information, and technology.


                      <a href='/businesstrans' className="btn btn-active btn-primary">Read More</a>
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
                      Infosprint Technologies is your reliable, trusted and innovative business consulting partner. Our primary objective is to drive value for businesses through an offer of an end-to-end enterprise application software, database, analytics, intelligent technologies, and experience management. We capably help businesses of all sizes and in all industries to operate profitably, adapt continuously, and achieve their business goals and customers' delight.
Infosprint drives value through innovative business consulting services. Our proven expertise in evolving custom appian, Salesforce and SAP solutions stands testimony. 
●	By leveraging on the open, enterprise-grade, and low-code Appian platform, we accelerate customers’ businesses by discovering, designing, and automating their most important processes.  
●	By leveraging on Salesforce's CRM we help to analyze customer data and know how your current customers interact with your business. This information is helpful in bringing needful changes to your service or product. Significantly, we help you help you to discover new ways to manage customer relationships. 
●	By leveraging on SAP we create a strong and interconnected business. We ensure that your business is greatly agile, resilient, and able to make the decisions needed to drive long-term growth. 


                      <a href='/businessconsulting' className="btn btn-active btn-primary">Read More</a>
                      </p>
                  </div>
              </div>
               
            </div>
            <div className="row justify-content-center s-tr pb-3">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">BPM</h1>
                  </div>
                  <div className="row justify-content-center p-3">
                      <p className="h-para">
                      Infosprint' Business Process Management practice imparts phenomenal value to your business. By leveraging on our seamless expertise in appian solutions, we bring to each client engagement our revolutionary low-code capabilities. We capably do this by streamlining complex processes, and giving each business a competitive edge over others.
We go beyond what appian Business Process Management Software can offer. Our BPM solutions include an end-to-end BPM Suite that covers process, rules, design tools, forms, analytics, mobile, content, collaboration, data access, SOA and Integration, visibility and transparency.
By leveraging on appian solutions, we design, execute, manage, and optimize each business' process to achieve greater efficiency and higher growth. Significantly, our BPM solutions are directed at achieving for each business a greater level of collaboration that includes customers, workers, partners and suppliers.

                      <a href='/digitalmarketing' className="btn btn-active btn-primary">Read More</a>
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img4} alt="img5" className="se-img-5" />
                </div>
            </div>
            <div className="row justify-content-center s-tr pb-3">
            <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img3} alt="img5" className="se-img-5" />
                </div>
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="section-title text-center">MOBILE & CX</h1>
                  </div>
                  <div className="row justify-content-center">
                      <p className="h-para">
                      Infosprint understands that great CX is primary to win new customers, strengthen existing relationships, and make people happier. A successful mobile app is one that can create a recall effect. Simply speaking, an effective mobile CX solution makes the users use the app again and again. Significantly, we offer a seamless digital experience to your business different marketing channels. 
Our mobile CX solutions help your business to achieve consistently an excellent customer experience.  We achieve strong personalization and seamless connection by integrating all customer touch points and innovations like speech recognition, artificial intelligence (AI), machine learning and data analytics. Instead of simply optimizing digital resources for mobile, we help businesses to build a mobile-first experience for their customers. Our mobile-first CX strategy puts focus on three areas.
●	Mobile App: We establish the precedence of mobile apps over web apps. It means greatly reduced number of taps to browse and checkout, and higher conversion rates for your business.
●	Loading Speed: In line with the mobile-first user experience we ensure that no page takes more than a few seconds to load.
●	Social Commerce: We help your business by creating engaging, and interactive mobile-first strategies. This will help you to increase sales, engage with, and build relationships with customers and develop greater customer insights.

                      <a href='/mobilencx' className="btn btn-active btn-primary">Read More</a>
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
                      Infosprint adheres and upholds the best practices of quality assurance. Our well-defined, innovative and comprehensive QA process includes highly functional and most comprehensive top-down process. We bring clarity to the QA process through a milestone based approach and seamless automation. We also ensure that the QA process begins early with an assurance on total transparency.
Understandably, we consider the primary objectives of digital transformation are met only through innovative and full-scale QA services. To achieve this, our QA experts follow the industry best Automation framework. Our team of QA experts brings hands-on experience to each software project. The team can capably address the real-time challenges faced by the businesses during their digital transformation process.

                      {/* <a href='/businesstrans' style={{fontSize: '17px'}}>Read More</a> */}
                      </p>
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center mt-5">
                    <img src={img5} alt="img5" className="se-img-5" />
                </div>
            </div>
    </div>
</>
  )
}

export default Services