import React from "react";
import './Styles/Samples.css';
export default function FAQs(){
    return(
        <div className="samples-container">
            <div>
                <p className="samples-header">{'Frequently Asked Questions'}</p>
            </div>
            <div className="faq-container" style={{paddingTop:"30px"}}>
                <div className="faq-wrapper" style={{maxWidth:"1000px",gap:"50px"}}>
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
                    <div className="faq-block">
                        <p className="faq-q">{'Is there any project/assignment cancellation fees?'}</p>
                        <p className="faq-a">{'Yes. That is based on the work already done on the assignment. You will be provided with the work completed till then.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'How can I contact the support executive directly?'}</p>
                        <p className="faq-a">{'PACE will assign a project manager dedicated to helping or assisting you in every situation. If you have any queries, feel free to contact him/her. The WhatsApp link will connect you immediately with an executive.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'How long it would take to get the reworks done?'}</p>
                        <p className="faq-a">{'It will be done within the deadline assigned by you. You will recieve the file if it gets completed before time.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'Is there any refund policy if the assignment or project would fail?'}</p>
                        <p className="faq-a">{'We understand that there is no point in coming to us if you fail the work delivered by us. 100% refund policy is maintained, if you supply us with the necessary result report.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'How can I give instructions to your experts working on my project while the assignment is being created?'}</p>
                        <p className="faq-a">{'You can communicate your needs to the Project Manager, and ask for regular drafts if you wish to check the work and give feedback. Your feedbacks are always welcome.'}</p>
                    </div>
                    <div className="faq-block">
                        <p className="faq-q">{'How should I complain regarding anything or anyone related to your service?'}</p>
                        <p className="faq-a">{'You can access our direct mailing system or chat with us through the WhatsApp link. We are very reasonable and can promise you a great experience'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}