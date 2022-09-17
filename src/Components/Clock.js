import React,{useState,useEffect} from "react";
import './Styles/Clock.css';
import TestC from './Assets/testcolor.png';
import AssgnC from './Assets/assignmentcolor.png';
import DissC from './Assets/dissertationcolor.png';
import QuizC from './Assets/quizcolor.png';
import Parrot from './Assets/parrot.gif';
import {MdOutlineAssignment} from "react-icons/md";
import {MdOutlineComputer} from "react-icons/md";
import {MdOutlineQuiz} from "react-icons/md";
import {BsJournalBookmark} from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Clock(){
    const [itemactive,setItemactive] = useState("default");
    const [promptactive,setPromptactive] = useState(true);

    useEffect(()=>{
        Aos.init({duration:1500});
    },[])
    return(
        <section className="clock-container">
            <div className={itemactive==="default" ? "clock-compass-wrapper-la" : "clock-compass-wrapper-sm"}>
            <div className="clock-compass">
                <IconContext.Provider value={{className: 'compass-icons'}}>
                <div className="clock-compass-marks">
                    <MdOutlineAssignment onClick={()=>{setItemactive("assignment"); setPromptactive(false)}}></MdOutlineAssignment>
                    <span>{'Assignments'}</span>
                </div>
                <div className="clock-compass-marks">
                    <MdOutlineComputer onClick={()=>{setItemactive("test"); setPromptactive(false)}}></MdOutlineComputer>
                    <span>{'Online Tests'}</span>
                </div>
                <div className="clock-compass-marks">
                    <MdOutlineQuiz onClick={()=>{setItemactive("quiz");setPromptactive(false)}}></MdOutlineQuiz>
                    <span>{'Quiz Assessments'}</span>
                </div>
                <div className="clock-compass-marks">
                    <BsJournalBookmark onClick={()=>{setItemactive("project");setPromptactive(false)}}></BsJournalBookmark>
                    <span>{'Dissertations'}</span>
                </div>
                </IconContext.Provider>
                <div className={itemactive === "default"? "clock-compass-needle-default" : itemactive === "assignment" ? "clock-compass-needle-up" : itemactive === "test" ? "clock-compass-needle-left" : itemactive === "quiz" ? "clock-compass-needle-down" : itemactive === "project" ? "clock-compass-needle-right" : "clock-compass-needle-default"}>
                    <div className="clock-compass-needle-a"></div>
                    <div className="clock-compass-needle-b"></div>
                </div>
            </div>
            <div className={itemactive==="default" ? "smol-inactive" : "smol-active"} onClick={()=>setItemactive("default")}></div>
            </div>
            <div className={itemactive==="assignment" ? "clock-card" : "card-hide"}>
                <div className="clock-card-img">
                    <img src={AssgnC} alt="Assignments"/>
                </div>
                <div className="clock-card-header">
                    <p style={{color:"#7bacd4"}}>{'Assignments'}</p>
                </div>
                <div className="clock-card-txt">
                    <p>{'Our team manages the assignment and works with in-depth proficiency. The brief, learning ourcomes and rubrics will be followe extensively to give relevant and quality work.'}</p><br></br>
                    <p>{'Check our '}<Link to={"/samples"} style={{textDecoration:"none",color:"#7bacd4"}}>Samples</Link></p>
                </div>
            </div>
            <div className={itemactive==="test" ? "clock-card" : "card-hide"}>
                <div className="clock-card-img">
                    <img src={TestC} alt="tests"/>
                </div>
                <div className="clock-card-header">
                    <p style={{color:"#a6f8bd"}}>{'Online Tests'}</p>
                </div>
                <div className="clock-card-txt">
                    <p>{'Our experts have cracked some of the toughest entrance examinations in the world. Our unique approach, expertise and team work will take care of your exam worries. Send a sample with the date and time of exam and let us take care of it.'}</p>
                    <br></br>
                    <p>{'Check our '}<Link to={"/samples"} style={{textDecoration:"none",color:"#a6f8bd"}}>Samples</Link></p>
                </div>
            </div>
            <div className={itemactive==="quiz" ? "clock-card" : "card-hide"}>
                <div className="clock-card-img">
                    <img src={QuizC} alt="Quiz"/>
                </div>
                <div className="clock-card-header">
                    <p style={{color:"#ff725e"}}>{'Online Quizzes'}</p>
                </div>
                <div className="clock-card-txt">
                    <p>{'Our team has over a million hours of quiz taking experience. We know what works to get you through your quizzes. You can see numerous quiz screenshots on our testimonials page.'}</p>
                    <br></br>
                    <p>{'Check our '}<Link to={"/samples"} style={{textDecoration:"none",color:"#ff725e"}}>Samples</Link></p>
                </div>
            </div>
            <div className={itemactive==="project" ? "clock-card" : "card-hide"}>
                <div className="clock-card-img">
                    <img src={DissC} alt="Projects"/>
                </div>
                <div className="clock-card-header">
                    <p style={{color:"#ffc727"}}>{'Dissertations'}</p>
                </div>
                <div className="clock-card-txt">
                    <p>{'Research Topics, Methodology, Literature survey, large word count, quantitative and qualitative surveys, strict deadlines, numerous feedback form supervisor, development bugs etc worrying you ? Not anymore. Contact us now.'}</p>
                    <br></br>
                    <p>{'Check our '}<Link to={"/samples"} style={{textDecoration:"none",color:"#ffc727"}}>Samples</Link></p>
                </div>
            </div>
            {promptactive ? 
            <div className="clock-prompt-card" data-aos="slide-right">
                <div className="clock-prompt-img">
                    <img src={Parrot} alt=""/>
                </div>
                <div className="clock-prompt-content">
                    <p><strong>{'Hi, Nancy here.'}</strong></p>
                    <p>{'Click on the markings in the compass to check the kind of work we do.'}</p>
                    <button className="clock-prompt-btn" onClick={()=>setPromptactive(false)}>{'Okay'}</button>
                </div>
            </div> : <div></div>}
        </section>
    )
}