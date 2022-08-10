import React from "react";
import './Styles/Samples.css';
export default function FAQs(){
    return(
        <div className="samples-container">
            <div>
                <p className="service-header">{'Frequently Asked Questions'}</p>
            </div>
            <div className="faq-container">
                <div className="faq-wrapper">
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
                </div>
            </div>
        </div>
    )
}