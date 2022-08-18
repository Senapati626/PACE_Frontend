import React from "react";
import './Styles/Hero.css';
export default function Hero(){
    
    const mousemoving = (e)=>{
        const tracker = document.querySelectorAll("#blob")[0];
        tracker.style.top = `${e.clientY-200}px`;
        tracker.style.left = `${e.clientX-250}px`;
    }
    return (
        <div className="hero-container" onMouseMove={mousemoving}>
            <div className="hero-blob-container" id="blob-background">
                <div className="hero-blob" id="blob"></div>           
            </div>
            <div className="hero-wrapper">
                <div className="hero-row">
                    <p className="hero-txt">{'we do '}<span className="hero-span" style={{color:"#c04ec0"}}>this<span style={{backgroundColor:"#c04ec0"}}></span></span>{' so'}</p>
                </div>
                <div className="hero-row">
                    <p className="hero-txt">{'that '}<span className="hero-span" style={{color:"#008080"}}>you<span style={{backgroundColor:"#008080"}}></span></span>{' do what'}</p>
                </div>
                <div className="hero-row">
                    <p className="hero-txt">{'you do '}<span className="hero-span" style={{color: "#d12525"}}>best<span style={{backgroundColor:"#d12525"}}></span></span></p>
                </div>
                <div className="hero-row-sm">
                    <p>{'Hassle-free and commited assistance to your dissertation, quizzes, assignments and exams.'}</p>
                </div>
            </div>
        </div>
    )
}