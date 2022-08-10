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
import FAQs from './Components/Faq';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
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
    </div>
  );
}

export default App;