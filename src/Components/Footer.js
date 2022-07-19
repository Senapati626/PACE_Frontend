import React from "react";
import "./Styles/Footer.css";
export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-left">
                <ul className="footer-links">
                    <li><a href="/services">{'Services'}</a></li>
                    <li><a href="/testimonials">{'Testimonials'}</a></li>
                    <li><a href="/samples">{'Samples'}</a></li>
                    <li><a href="/services">{'FAQs'}</a></li>
                    <li><a href="/termsofservice">{'Terms of Service'}</a></li>
                </ul>
            </div>
            <div className="footer-newsletter">
            <p className="footer-newsletter-head">{'Subscribe to our mailing list.'}</p>
            <form>
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email Address"/>
                <input type="submit" value="subscribe"/>    
            </form>
            </div>
            <div className="footer-right">
                <p className="footer-right-header">{'pace'}</p>
                <p className="footer-right-address">RBC Hall,<br/>Kalyani Government Engineering College,<br/>University of Kalyani, Kalyani,<br/>Nadia-741235</p>
                <p className="footer-right-follow">Follow Us On</p>
                <ul className="footer-right-list">
                    <li style={{color:"#c8c8ff",borderBottom:"2px solid #c8c8ff"}}>LinkedIn</li>
                    <li style={{color:"#c8c8ff",borderBottom:"2px solid #c8c8ff"}}>Twitter</li>
                    <li style={{color:"#c8c8ff",borderBottom:"2px solid #c8c8ff"}}>Facebook</li>
                </ul>
            </div>
        </div>
    )
}