import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Samples from './Components/Samples';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Services from './Components/Services';
import WhatsApp from './Components/Assets/whatsapp.png';
import TermsAndServices from './Components/T&S';
import Aboutus from './Components/AboutUs';
import FAQs from './Components/Faq';
import Loader from './Components/Loader';
import React,{useState,useEffect} from 'react';
function App() {
  const [load,setLoad] = useState(false)

  useEffect(()=>{
    setLoad(true);
    setTimeout(()=>{
      setLoad(false)
    },3000)
  },[])
  return (
    <div>
    {load ? <Loader/> :
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about-us' element={<Aboutus/>}/>
            <Route path='/samples' element={<Samples/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/termsofservice' element={<TermsAndServices/>}/>
            <Route path='/faqs' element={<FAQs/>}/>
          </Routes>
        <Footer/>
        <div className='footer-bottom'>
          <p>{'© 2022 Project and Content Experts | All Rights Reserved.'}</p>
        </div>
        <a href='https://wa.me/+916291261929' className='wa-link' target="_blank">
          <img src={WhatsApp} alt="Chat on WhatsApp" className="wa-icon"/>
        </a>
      </Router>
    </div>}
    </div>
  );
}

export default App;