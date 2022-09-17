import React from "react";
import "./Styles/Footer.css";
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-left">
                <ul className="footer-links">
                    <li><Link to="/services">{'Services'}</Link></li>
                    <li><Link to="/testimonials">{'Testimonials'}</Link></li>
                    <li><Link to="/samples">{'Samples'}</Link></li>
                    <li><Link to="/faqs">{'FAQs'}</Link></li>
                    <li><Link to="/termsofservice">{'Become an Expert'}</Link></li>
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
                <p className="footer-right-address">5055 E Somerset Dr,<br/>Cornville, Arizona 86325,<br/>United States of America</p>
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