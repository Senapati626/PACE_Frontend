import React,{useState,useRef,useEffect} from "react";
import './Styles/Testimonials.css';
import images400 from './testimonies/testimony400';
import images600 from './testimonies/testimony600';


export default function Testimonials(){
    const [currImg400,setCurrImg400] = useState(images400[0])
    const [currImg600,setCurrImg600] = useState(images600[0])
    const currentEle = useRef();

    return(
        <div className="tml-container">
            <h2 className="tml-header">{'Have a glimpse at the kind of work we do'}</h2>
            <div className="tml-active-a">
                <img src={currImg400} alt="" ref={currentEle} className="tml-animate" id="currentImg"/>
            </div>
            <div className="tml-slide">
                {images400.map((image,index)=>{
                    return(
                        <div className={currImg400===image ? "tml-slide-img-a img-active" : "tml-slide-img-a"} key={index}>
                            <img src={image} alt="" onClick={()=>setCurrImg400(image)}/>
                        </div>
                    )
                })}
            </div>
            <div className="tml-active-b">
                <img src={currImg600} alt="" ref={currentEle} className="tml-animate" id="currentImg"/>
            </div>
            <div className="tml-slide">
                {images600.map((image,index)=>{
                    return(
                        <div className={currImg600===image ? "tml-slide-img-b img-active" : "tml-slide-img-b"} key={index}>
                            <img src={image} alt="" onClick={()=>setCurrImg600(image)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}