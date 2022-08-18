import React,{useState,useRef} from "react";
import './Styles/Testimonials.css';
import images from './testimonies/testimony400';


export default function Testimonials(){
    const [currImg,setCurrImg] = useState(images[0])
    const currentEle = useRef();

    return(
        <div className="tml-container">
            <h2 className="tml-header">{'Have a glimpse at the kind of work we do'}</h2>
            <div className="tml-active-a">
                <img src={currImg} alt="" ref={currentEle} className="tml-animate" id="currentImg"/>
            </div>
            <div className="tml-slide">
                {images.map((image,index)=>{
                    return(
                        <div className={currImg===image ? "tml-slide-img-a img-active" : "tml-slide-img-a"} key={index}>
                            <img src={image} alt="" onClick={()=>setCurrImg(image)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}