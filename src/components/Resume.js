import React from "react";
import './Resume.css';
const Resume = () => {
    return (
        <div className="resume-page">
            <a href={require("../public/resume.pdf")} className="button" download="patrickmaes_resume">Download CV </a> 
            <div className="resume-wrapper">
                <object className="resume-container" data="resume.pdf" type="application/pdf">
                    <p>alt text</p>
                </object>
            </div>
        </div>
        
    );
}

export default Resume;