import React,{useState} from "react";
import './Styles/Hero.css';
import TestC from './Assets/testcolor.png';
import AssgnC from './Assets/assignmentcolor.png';
import DissC from './Assets/dissertationcolor.png';
import QuizC from './Assets/quizcolor.png';
import {MdOutlineAssignment} from "react-icons/md";
import {MdOutlineComputer} from "react-icons/md";
import {MdOutlineQuiz} from "react-icons/md";
import {BsJournalBookmark} from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Hero(){
    const [itemactive,setItemactive] = useState("default");
    return(
        <section className="hero-container">
            <div className={itemactive==="default" ? "hero-compass-wrapper-la" : "hero-compass-wrapper-sm"}>
            <div className="hero-compass">
                <IconContext.Provider value={{className: 'compass-icons'}}>
                <div className="hero-compass-marks">
                    <MdOutlineAssignment onClick={()=>setItemactive("assignment")}></MdOutlineAssignment>
                </div>
                <div className="hero-compass-marks">
                    <MdOutlineComputer onClick={()=>setItemactive("test")}></MdOutlineComputer>
                </div>
                <div className="hero-compass-marks">
                    <MdOutlineQuiz onClick={()=>setItemactive("quiz")}></MdOutlineQuiz>
                </div>
                <div className="hero-compass-marks">
                    <BsJournalBookmark onClick={()=>setItemactive("project")}></BsJournalBookmark>
                </div>
                </IconContext.Provider>
                <div className={itemactive === "default"? "hero-compass-needle-default" : itemactive === "assignment" ? "hero-compass-needle-up" : itemactive === "test" ? "hero-compass-needle-left" : itemactive === "quiz" ? "hero-compass-needle-down" : itemactive === "project" ? "hero-compass-needle-right" : "hero-compass-needle-default"}>
                    <div className="hero-compass-needle-a"></div>
                    <div className="hero-compass-needle-b"></div>
                </div>
            </div>
            <div className={itemactive==="default" ? "smol-inactive" : "smol-active"} onClick={()=>setItemactive("default")}></div>
            </div>
            <div className={itemactive==="assignment" ? "hero-card" : "card-hide"}>
                <div className="hero-card-img">
                    <img src={AssgnC} alt="Assignments"/>
                </div>
                <div className="hero-card-header">
                    <p style={{color:"#7bacd4"}}>{'Assignments'}</p>
                </div>
                <div className="hero-card-txt">
                    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisi eu ex bibendum ultrices a sit amet erat. Proin faucibus massa in rutrum auctor.'}</p>
                </div>
            </div>
            <div className={itemactive==="test" ? "hero-card" : "card-hide"}>
                <div className="hero-card-img">
                    <img src={TestC} alt="tests"/>
                </div>
                <div className="hero-card-header">
                    <p style={{color:"#a6f8bd"}}>{'Online Tests'}</p>
                </div>
                <div className="hero-card-txt">
                    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisi eu ex bibendum ultrices a sit amet erat. Proin faucibus massa in rutrum auctor.'}</p>
                </div>
            </div>
            <div className={itemactive==="quiz" ? "hero-card" : "card-hide"}>
                <div className="hero-card-img">
                    <img src={QuizC} alt="Quiz"/>
                </div>
                <div className="hero-card-header">
                    <p style={{color:"#ff725e"}}>{'Online Quizzes'}</p>
                </div>
                <div className="hero-card-txt">
                    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisi eu ex bibendum ultrices a sit amet erat. Proin faucibus massa in rutrum auctor.'}</p>
                </div>
            </div>
            <div className={itemactive==="project" ? "hero-card" : "card-hide"}>
                <div className="hero-card-img">
                    <img src={DissC} alt="Projects"/>
                </div>
                <div className="hero-card-header">
                    <p style={{color:"#ffc727"}}>{'Dissertations'}</p>
                </div>
                <div className="hero-card-txt">
                    <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nisi eu ex bibendum ultrices a sit amet erat. Proin faucibus massa in rutrum auctor.'}</p>
                </div>
            </div>
        </section>
    )
}