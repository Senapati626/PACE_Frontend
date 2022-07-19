import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./Styles/Navbar.css";



export default function Navbar(){
    return(
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <h3><Link to="/" className="navbar-logo">Pace</Link></h3>
                </div>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <li><NavLink to="/services" className="navbar-list-item"><p>services</p><span className="nav-list-item-span"></span></NavLink></li>
                    <li><NavLink to="/testimonials" className="navbar-list-item"><p>testimonials</p><span className="nav-list-item-span"></span></NavLink></li>
                    <li><NavLink to="/samples" className="navbar-list-item"><p>samples</p><span className="nav-list-item-span"></span></NavLink></li>
                    <li><NavLink to="/samples" className="navbar-list-item"><p>FAQs</p><span className="nav-list-item-span"></span></NavLink></li>
                </ul>
            </div>
        </div>
    )
}