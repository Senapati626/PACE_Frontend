import React from "react";
import MailingForm from "./ActionForm";
import './Styles/Home.css';
import Plag from './Assets/plagiarism.png';
import Trust from './Assets/trust (1).png';
import Support from './Assets/support.png';
import Privacy from './Assets/privacy.png';
import Testimonies from './Assets/testimony.svg';
import Experts from './Assets/experts.svg';
//import Hero from "./Hero";


const Home = ()=>{
    return(
        
        <div className="home-container">
            <section className="hero-section">
                <div>
                    <p className="hero-text">{'Assignments, Dissertations, Quizzes, we have your back'}</p>
                </div>
                <div>
                    <a href="#" style={{fontSize:"28px"}} className="home-section-link">{'Get a free consultation now'}</a>
                </div>
            </section>
            <section className="choose-section">
                <div>
                    <p className="choose-header">{'People are choosing PACE'} <span>because...</span></p>
                </div>
                <div className="choose-card-wrapper">
                    <div className="choose-card">
                        <div>
                            <img src={Plag} alt="plagiarism" className="choose-card-img"/>
                        </div>
                        <div>
                            <p className="choose-card-header">Zero Plagiarism</p>
                        </div>
                        <div>
                            <p className="choose-card-content">All content is checked in turnitin.</p>
                        </div>
                    </div>
                    <div className="choose-card">
                        <div>
                            <img src={Trust} alt="Trust Policy" className="choose-card-img"/>
                        </div>
                        <div>
                            <p className="choose-card-header">{'Trust Policy'}</p>
                        </div>
                        <div>
                            <p className="choose-card-content">{'We will NOT scam you. We will try our best to get you through. If a task is not doable we simply decline the assignment. We confirm only the doable tasks. So get your quote now.'}</p>
                        </div>
                    </div>
                    <div className="choose-card">
                        <div>
                            <img src={Support} alt="Support" className="choose-card-img"/>
                        </div>
                        <div>
                            <p className="choose-card-header">{'Unprecedented Support'}</p>
                        </div>
                        <div>
                            <p className="choose-card-content">{'Quick replies and updates. WhatsApp us on link'}</p>
                        </div>
                    </div>
                    <div className="choose-card">
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
                <div className="home-section-txt">
                    <div>
                        <p className="home-section-txt-header">Use Our Instant Mailing Service</p>
                    </div>
                    <div>
                        <p className="home-section-txt-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="home-section-graphic">
                    <MailingForm/>
                </div>
            </section>
            <section className="home-section testimony-section">
                <div className="home-section-graphic">
                    <img src={Testimonies} alt="Testimonies" className="testimony-img"/>
                </div>
                <div className="home-section-txt">
                    <div>
                        <p className="home-section-txt-header">{'Do not take our word for it'}</p>
                    </div>
                    <div>
                        <p className="home-section-txt-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <a href="/reviews" className="home-section-link">Check Testimonials</a>
                    </div>
                </div>
            </section>
            <section className="home-section form-section">
                <div className="home-section-txt">
                    <div>
                        <p className="home-section-txt-header">{'Become an expert for us'}</p>
                    </div>
                    <div>
                        <p className="home-section-txt-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <a href="/termsofservice" className="home-section-link">Check our Terms of Service</a>
                    </div>
                </div>
                <div className="home-section-graphic">
                    <img src={Experts} alt="Experts" className="testimony-img"/>
                </div>
            </section>
        </div>
    )
}
export default Home;