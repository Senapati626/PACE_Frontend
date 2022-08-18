import React from "react";
import './Styles/Samples.css';
import Experts from './Assets/experts.svg';
import GForm from './Assets/google-forms.png';
import Terms from './Assets/terms.svg';


export default function TermsAndServices(){
    return(
        <div className="samples-container">
            <div>
                <p className="samples-header">{'Become a Project and Content Expert'}</p>
            </div>
            <div className="expert-section">
                <div>
                    <img src={Experts} alt="" className="expert-img"/>
                </div>
                <div className="expert-txt-container">
                    <p className="expert-txt">{'We are looking forward to exploring new talents and making them a part of PACE. People interested in the arena of academic writing are always welcome. The freelancers working in the field are also welcome to witness a flexible and reliable opportunity. Fill out the google form and someone will contact you shortly.'}</p>
                    <a href="#" className="expert-link">
                        <img src={GForm} alt=""/>
                        <span>Become an Expert</span>
                    </a>
                </div>
            </div>
            <div className="expert-section">
                <div className="expert-txt">
                    <p className="service-header" style={{fontWeight:"500",color:"#c8c8ff",fontSize:"30px"}}>{'Terms of Service'}</p>
                    <ol className="terms-list">
                        <li>{'We believe in having a sense of understanding with our clients. We expect the same.'}</li>
                        <li>{'We follow a monthly payment cycle. If you are working with us for the first time, we expect payment of the first few tasks immediately and a weekly payment cycle for few weeks then a monthly cycle will be introduced.'}</li>
                        <li>{'Payments from the last month needs to be cleared by the 10th of the next month. We need this to maintain necessary cash flows.'}</li>
                        <li>{'If you have been introduced to the monthly pay cycle, we need you to send us a valid identity and address proof.'}</li>
                        <li>{'We maintain a very faithful relationship with our clients. This means that if you share any of your student’s contact, none of them will be contacted by us in bad faith. We expect you to do the same with our experts.'}</li>
                        <li>{'Before you refund any money to your clients over poor quality or failed reports, we need you to consult with us as well before doing so.'}</li>
                        <li>{'We will always be responsible for our work (even if the results come months after the submission of the work) and will never hide away from our liabilities (even though you have paid us in full earlier for the task). In short, you can trust us to be reasonable. '}</li>
                        <li>{'We believe that the best outcomes will come when we are honest and straightforward with each other. We need you to be the same with us.'}</li>
                    </ol>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={Terms} alt="" className="expert-img"/>
                </div>
            </div>
            <div>
                <p className="service-header"><strong>Lets make some <span style={{color:"greenyellow"}}>money</span> together.</strong></p>
            </div>
        </div>
    )
}