import React,{useEffect} from "react";
import MailingForm from "./ActionForm";
import './Styles/Home.css';
import Plag from './Assets/plagiarism.png';
import Trust from './Assets/trust (1).png';
import Support from './Assets/support.png';
import Privacy from './Assets/privacy.png';
import Testimonies from './Assets/testimony.svg';
import Faqs from './Assets/faqs.svg';
import Clock from "./Clock";
import Hero from "./Hero";
import {Link} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";


const Home = ()=>{
    useEffect(()=>{
        Aos.init({duration:1500})
    },[])
    return(
        
        <div className="home-container">
            <Hero/>
            <Clock/>
            <section className="choose-section">
                <div>
                    <p className="choose-header">{'People are choosing PACE'} <span>because...</span></p>
                </div>
                <div className="choose-card-wrapper">
                    <div className="choose-card" data-aos="flip-up">
                        <div>
                            <img src={Plag} alt="plagiarism" className="choose-card-img"/>
                        </div>
                        <div>
                            <p className="choose-card-header">Zero Plagiarism</p>
                        </div>
                        <div>
                            <p className="choose-card-content">{'We are committed towards giving plagiarism free work. All content is checked in turnitin before it makes it to you or your submission portal.'}</p>
                        </div>
                    </div>
                    <div className="choose-card" data-aos="flip-up">
                        <div>
                            <img src={Trust} alt="Trust Policy" className="choose-card-img"/>
                        </div>
                        <div>
                            <p className="choose-card-header">{'Trust Policy'}</p>
                        </div>
                        <div>
                            <p className="choose-card-content">{'We will NOT scam you. We have your best interests in mind and will try our best to get you through. If a task is not doable, we simply decline the assignment. We confirm only the doable tasks. So get your quote now.'}</p>
                        </div>
                    </div>
                    <div className="choose-card" data-aos="flip-up">
                        <div>
                            <img src={Support} alt="Support" className="choose-card-img"/>
                        </div>
                        <div>
                            <p className="choose-card-header">{'Unprecedented Support'}</p>
                        </div>
                        <div>
                            <p className="choose-card-content">{'You will always be updated about your work. We want you not to be worried about anything. Quick replies and regular updates is our motto. Connect with us on WhatsApp now.'}</p>
                        </div>
                    </div>
                    <div className="choose-card" data-aos="flip-up">
                        <div>
                            <img src={Privacy} alt="Privacy" className="choose-card-img"/>
                        </div>
                        <div>
                            <p className="choose-card-header">{'Full Privacy'}</p>
                        </div>
                        <div>
                            <p className="choose-card-content">{"We do not disclose even the client's name to the experts untill necessary for the task. We use VPN to login into moodle and blackboards. Your details are safe with us. We take great care for it."}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-section form-section">
                <div className="home-section-txt" data-aos="fade-right">
                    <div>
                        <p className="home-section-txt-header">Use Our Instant Mailing Service</p>
                    </div>
                    <div>
                        <p className="home-section-txt-text">{'Initiate the conversation with our instant mailing service. Just fill out the form and attach necessary files. A copy of the mail will also be sent to you. You can also text us directly on WhatsApp.'}</p>
                    </div>
                </div>
                <div className="home-section-graphic" data-aos="fade-left">
                    <MailingForm/>
                </div>
            </section>
            <section className="home-section testimony-section">
                <div className="home-section-graphic" data-aos="fade-right">
                    <img src={Testimonies} alt="Testimonies" className="testimony-img"/>
                </div>
                <div className="home-section-txt" data-aos="fade-left">
                    <div>
                        <p className="home-section-txt-header">{'Do not take our word for it'}</p>
                    </div>
                    <div>
                        <p className="home-section-txt-text">{"Don't trust reviews catered by writers? Why Should YOU!!! Check out our 100% genuine WhatsApp conversations and results screenshots. Necessary precautions have been taken to maintain privacy of our clients."}</p>
                    </div>
                    <div>
                        <Link to="/testimonials" className="home-section-link">Check Testimonials</Link>
                    </div>
                </div>
            </section>
            <div className="faq-container home-section">
                <div className="faq-wrapper" style={{maxWidth:"600px"}} data-aos="fade-right">
                    <p className="home-section-txt-header">{'FAQS'}</p>
                    <div className="faq-block">
                        <p className="faq-q">{'Are your experts reliable?'}</p>
                        <p className="faq-a">{'Our experts are from leading educational institutes from India like IITs, NITs, IIMs and top business and law schools. They have to take some of the toughest exams in the world just to get admitted. So yes, they are reliable.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'Do you take care of plagiarism?'}</p>
                        <p className="faq-a">{'Yes, 0% plagiarism guaranteed. Will send you a turnitin report as well.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'Will you take care of my deadline?'}</p>
                        <p className="faq-a">{'Yes, always. We understand how important the work is to you. We will make sure the deadline is met.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'Are there any discounts available?'}</p>
                        <p className="faq-a">{'Yes there are. We also have time to time promotional offers where you can redeem discounts on referrals.'}</p>
                    </div>
                    <div>
                        <Link to="/faqs" className="home-section-link">More FAQs</Link>
                    </div>
                </div>
                <div className="home-section-graphic" data-aos="fade-left">
                    <img src={Faqs} alt="Faqs" className="testimony-img"/>
                </div>
            </div>
        </div>
    )
}
export default Home;