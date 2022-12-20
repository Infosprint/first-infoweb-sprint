import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import {Footer} from './components/Footer/footer';
import './App.css';
import Landing from './components/pages/Landing/landing';
import Services from './components/pages/Services/Service';
import Autontrade from './components/pages/AutoNTrade/Autontrade';
import BusinessTrans from './components/pages/BusinessTransformation/Businesstrans';
import Businessconsulting from './components/pages/BusinessConsulting/Businessconsulting';
import Career from './components/pages/Career/career';
import Jobposting from './components/pages/Jobposting/Jobposting';
import Digitalmarketing from './components/pages/Digital marketing/marketing';
import ContactUs from './components/pages/ContactUs/contact';
import Products from './components/pages/Products/products';
import Healthcare from './components/pages/Healthcare/Healthcare';
import Mobilencx from './components/pages/MobileNCX/Mobilencx';

function App() {
  const componentDidMount=()=>{
    (function (d, m) {
      var kommunicateSettings =
        { "appId": "1866d24e52cdc03c0b4f1bfd40734fb98", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  componentDidMount()
  return (
    <div
      style={{
        backgroundColor: '#f9f9f9',
      }}
    >
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/autontrade' element={<Autontrade />} />
        <Route path='/businesstrans' element={<BusinessTrans />} />
        <Route path='/careers' element={<Career />} />
        <Route path='/jobposting' element={<Jobposting/>} />
        <Route path='/digitalmarketing' element={<Digitalmarketing/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/healthcare' element={<Healthcare />} />
        <Route path='/mobilencx' element={<Mobilencx />} />
        <Route path='/businessconsulting' element={<Businessconsulting/>} />
       </Routes>
       <Footer />
       </Router>
       </div>
  );
}

export default App;
