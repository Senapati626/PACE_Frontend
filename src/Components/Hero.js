import React,{useState} from "react";
import './Styles/Hero.css';
import Test from './Assets/test.png';
import Assignment from './Assets/assignment.jpg';
import Dissertation from './Assets/dissertation.png';
import Quiz from './Assets/quiz.png';
import TestC from './Assets/testcolor.png';
import AssgnC from './Assets/assignmentcolor.png';
import DissC from './Assets/dissertationcolor.png';
import QuizC from './Assets/quizcolor.png';

export default function Hero(){
    const [itemactive,setItemactive] = useState("");
    const needle = document.querySelector('.hero-clock-needle');
    const clockItems = document.querySelectorAll('#hero-clock-item')
    
    return(
        <section className="hero-container">
            <div className="hero-header">
                <p className="hero-header-txt">{'PACE saves time in more ways than one'}</p>
            </div>
            <div className="hero-clock">
                {itemactive==="a" ?
                <div className="hero-clock-needle rotate-center-a">
                    <div className="hero-clock-pivot" onClick={()=>setItemactive("")}></div>
                    <div className="hero-clock-pointer"></div>
                </div> :
                itemactive==="b" ?
                <div className="hero-clock-needle rotate-center-b">
                    <div className="hero-clock-pivot" onClick={()=>setItemactive("")}></div>
                    <div className="hero-clock-pointer"></div>
                </div> :
                itemactive==="c" ?
                <div className="hero-clock-needle rotate-center-c">
                    <div className="hero-clock-pivot" onClick={()=>setItemactive("")}></div>
                    <div className="hero-clock-pointer"></div>
                </div> :
                itemactive==="d" ?
                <div className="hero-clock-needle rotate-center-d">
                    <div className="hero-clock-pivot" onClick={()=>setItemactive("")}></div>
                    <div className="hero-clock-pointer"></div>
                </div> :
                <div className="hero-clock-needle">
                    <div className="hero-clock-pivot" onClick={()=>setItemactive("")}></div>
                    <div className="hero-clock-pointer"></div>
                </div>
                }
                {
                    itemactive==="a" ? 
                    <div id="hero-clock-item" className="hero-clock-item-active">
                        <img src={Test} alt="" className="hero-clock-item-img"/>
                    </div> :
                    <div id="hero-clock-item" onClick={()=>setItemactive("a")}>
                        <img src={Test} alt="" className="hero-clock-item-img"/>
                    </div>
                }
                {
                    itemactive==="b" ? 
                    <div id="hero-clock-item" className="hero-clock-item-active">
                    <img src={Assignment} alt="" className="hero-clock-item-img-a"/>
                    </div> :
                    <div id="hero-clock-item" onClick={()=>setItemactive("b")}>
                    <img src={Assignment} alt="" className="hero-clock-item-img-a"/>
                    </div>
                }
                {
                    itemactive==="c" ? 
                    <div id="hero-clock-item" className="hero-clock-item-active">
                    <img src={Dissertation} alt="" className="hero-clock-item-img"/>
                    </div> :
                    <div id="hero-clock-item" onClick={()=>setItemactive("c")}>
                    <img src={Dissertation} alt="" className="hero-clock-item-img"/>
                    </div>
                }
                {
                    itemactive==="d" ? 
                    <div id="hero-clock-item" className="hero-clock-item-active">
                    <img src={Quiz} alt="" className="hero-clock-item-img"/>
                    </div> :
                    <div id="hero-clock-item" onClick={()=>setItemactive("d")}>
                    <img src={Quiz} alt="" className="hero-clock-item-img"/>
                    </div>
                }
            </div>
            <div className={itemactive==="a" ? "specialization-card" : "card-hide"}>
                <div>
                    <img src={AssgnC} alt="" className="specialization-img"/>
                </div>
                <div><p className="specialization-card-header">Assignment</p></div>
                <div><p className="specialization-card-txt">Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.</p></div>
            </div>
            <div className={itemactive==="b" ? "specialization-card" : "card-hide"}>
                <div>
                    <img src={TestC} alt="" className="specialization-img"/>
                </div>
                <div><p className="specialization-card-header">Exam</p></div>
                <div><p className="specialization-card-txt">Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.</p></div>
            </div>
            <div className={itemactive==="c" ? "specialization-card" : "card-hide"}>
                <div>
                    <img src={DissC} alt="" className="specialization-img"/>
                </div>
                <div><p className="specialization-card-header">Dissertation</p></div>
                <div><p className="specialization-card-txt">Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.</p></div>
            </div>
            <div className={itemactive==="d" ? "specialization-card" : "card-hide"}>
                <div>
                    <img src={QuizC} alt="" className="specialization-img"/>
                </div>
                <div><p className="specialization-card-header">Quiz</p></div>
                <div><p className="specialization-card-txt">Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.</p></div>
            </div>

        </section>
    )
}