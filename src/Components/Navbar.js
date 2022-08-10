import React,{useState} from "react";
import {NavLink, Link} from "react-router-dom";
import "./Styles/Navbar.css";
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineCloseSquare} from 'react-icons/ai';


export default function Navbar(){
    const styleActive = {color:"silver",fontSize:"28px",display:"block"}
    const styleInactive = {display:"none"}
    const [active,setActive] = useState(true)

    const showBar = ()=>{
        setActive(!active)
    }
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
                    <li><NavLink to="/faqs" className="navbar-list-item"><p>FAQs</p><span className="nav-list-item-span"></span></NavLink></li>
                </ul>
            </div>
            <div className="navbar-hamburger">
                <GiHamburgerMenu style={active ? styleActive : styleInactive} onClick={showBar}></GiHamburgerMenu>
                <AiOutlineCloseSquare style={active ? styleInactive : styleActive} onClick={showBar}></AiOutlineCloseSquare>
            </div>
            <div className={active ? "navbar-list-inactive" : "navbar-list-sm"}>
                <NavLink to="/services" className="navbar-list-item"><p>services</p><span className="nav-list-item-span"></span></NavLink>
                <NavLink to="/testimonials" className="navbar-list-item"><p>testimonials</p><span className="nav-list-item-span"></span></NavLink>
                <NavLink to="/samples" className="navbar-list-item"><p>samples</p><span className="nav-list-item-span"></span></NavLink>
                <NavLink to="/faqs" className="navbar-list-item"><p>FAQs</p><span className="nav-list-item-span"></span></NavLink>
            </div>
        </div>
    )
}