import React from "react";
import './Resume.css';
const Resume = () => {
    return (
        <div className="resume-wrapper">
            <object className="resume-container" data="resume.pdf" type="application/pdf">
                <p>alt text</p>
            </object>
        </div>
    );
}

export default Resume;