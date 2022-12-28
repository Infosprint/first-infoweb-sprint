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
import Digitalmarketing from './components/pages/Digital marketing/marketing';
import ContactUs from './components/pages/ContactUs/contact';
import Products from './components/pages/Products/products';
import QAservices from './components/pages/QAServices/QAServices';
import Mobilencx from './components/pages/MobileNCX/Mobilencx';
import JobApply from './components/pages/JobApply/JobApply';
import Industry from './components/pages/Industry/Industry';

function App() {
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
        <Route path='/career' element={<Career />} />
        <Route path='/digitalmarketing' element={<Digitalmarketing/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/qaservices' element={<QAservices />} />
        <Route path='/mobilencx' element={<Mobilencx />} />
        <Route path='/businessconsulting' element={<Businessconsulting/>} />
        <Route path='/career/success' element={<JobApply />} />
        <Route path='/industry' element={<Industry />} />
       </Routes>
       <Footer />
       </Router>
       </div>
  );
}

export default App;
