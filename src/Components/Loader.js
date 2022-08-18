import React,{useState,useEffect} from "react";
import "./Styles/Loader.css";
const Loader = ()=>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        const id = setInterval(()=>setCount((oldcount)=> oldcount>=100 ? 100 : oldcount+1),30);
        return() =>{
            clearInterval(id);
        }
    },[count])
    return(
        <div className="loader-container" id="loader">
            <div className="running">
                <div className="outer">
                    <div className="body">
                        <div className="arm behind"></div>
                        <div className="arm front">
                        </div>
                        <div className="leg behind"></div>
                        <div className="leg front"></div>
                    </div>
                </div>
            </div>
            <div>
                <p className="loader-count">{count}{'%'}</p>
            </div>
        </div>
    )
}

export default Loader;