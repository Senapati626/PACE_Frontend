import React from "react";
import './Styles/Samples.css';
import {FaFileDownload} from 'react-icons/fa';


export default function Samples(){
    const style = {color:"silver", fontSize: "24px"}
    return(
        <div className="samples-container">
            <div className="samples-header">
                <p>{'Check out these samples to view the kind of work we do'}</p>
            </div>
            <div className="samples-list">
                <div className="sample-card">
                    <p>{'Sample Essay'}</p>
                    <a href="dist/essay_sample_PACE.pdf" target="_blank" download><FaFileDownload style={style}/></a>
                </div>
                <div className="sample-card">
                    <p>{'Sample Dissertation(1)'}</p>
                    <a href="dist/dissertation(1)_sample_PACE.pdf" target="_blank" download><FaFileDownload style={style}/></a>
                </div>
                <div className="sample-card">
                    <p>{'Sample Dissertation(2)'}</p>
                    <a href="dist/dissertation(2)_sample_PACE.pdf" target="_blank" download><FaFileDownload style={style}/></a>
                </div>
                <div className="sample-card">
                    <p>{'Sample Presentation'}</p>
                    <a href="dist/presentation_sample_PACE.pdf" target="_blank" download><FaFileDownload style={style}/></a>
                </div>
                <div className="sample-card">
                    <p>{'Sample Lab Report'}</p>
                    <a href="dist/lab_report_sample_PACE.pdf" target="_blank" download><FaFileDownload style={style}/></a>
                </div>
                <div className="sample-card">
                    <p>{'Sample Test Solutions'}</p>
                    <a href="dist/test_sample_PACE.pdf" target="_blank" download><FaFileDownload style={style}/></a>
                </div>
                <div className="sample-card">
                    <p>{'Sample Hand-Written Assignment'}</p>
                    <a href="dist/hand_written_assignment_sample_PACE.pdf" target="_blank" download><FaFileDownload style={style}/></a>
                </div>
            </div>
        </div>
    )
}