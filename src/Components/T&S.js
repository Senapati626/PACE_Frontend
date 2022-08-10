import React from "react";
import './Styles/Samples.css';
export default function TermsAndServices(){
    return(
        <div className="samples-container">
            <div>
                <p className="service-header">{'Terms of Service'}</p>
            </div>
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
            <div>
                <p className="service-header"><strong>Lets make some money together.</strong></p>
                <p style={{color:"gray",marginTop:"-50px",textAlign:"center"}}>{'Ping us on WhatsApp.'}</p>
            </div>
        </div>
    )
}