import React from "react";
import "./Styles/Loader.css";
const Loader = ()=>{
    document.readyState === 'complete' ? document.querySelector('#loader').classList.add("loader-hide") : document.querySelector('#loader').classList.add("loader-container");
    return(
        <div className="loader-container" id="loader">
            <h1>Loader</h1>
        </div>
    )
}

export default Loader;