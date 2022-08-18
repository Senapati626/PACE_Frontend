import React from "react";
import './Styles/Samples.css';
import Team from './Assets/aboutus.svg';
export default function Aboutus(){
    return(
        <div className="aboutus-container">
            <div className="aboutus-section">
                <p className="aboutus-header">{'PACE'}</p>
                <p className="aboutus-header2">{'Your one stop solution for assignments, exams, quizzes and dissertation needs'}</p>
            </div>
            <div className="home-section" style={{flexWrap:"wrap",maxWidth:"1200px"}}>
                <div className="home-section-graphic">
                    <img src={Team} alt="" style={{width:"100%"}}/>
                </div>
                <div className="home-section-txt" style={{color:"silver",fontSize:"20px"}}>
                    <p>{'We are a dedicated team of developers, writers, and research analysts for your academic assistance. We are here to help you out with the assignments, dissertations, projects, surveys, quizzes and other academic works. With the efficiency of our research and writing team, you will get the work fast and free from plagiarism. We generate 100% original content with in-depth analysis of different subjects of assignments. Our experts are here to assist you 24X7.'}</p> 
                    <p>{'We understand it’s very difficult, to balance work and study all at the same time. We understand you are working real hard for your survival and need support. With this vision and your best interest in mind, we will serve you the best.'}</p>
                </div>
            </div>
        </div>
    )
}