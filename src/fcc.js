import React from 'react';
import './fcc.css';
import FullStack from './assets/freecodecamp-full-stack-certification.png';
import API from './assets/freecodecamp-apis-and-microservices-certification.png';
import DataVis from './assets/freecodecamp-data-visualization-certification.png';
import FrontEnd from './assets/freecodecamp-front-end-libraries-certification.png';
import InfoSec from './assets/freecodecamp-information-security-and-quality-assurance-certification.png';
import JS from './assets/freecodecamp-javascript-algorithms-and-data-structures-certification.png';
import WebDesign from './assets/freecodecamp-responsive-web-design-certification.png';

const FCC = () => {
    return(
        <div className="certificates">
            <a href="https://spencercorwin.com/assets/fcc-certifications/freecodecamp-full-stack-certification.png"><img src={FullStack} alt="Full Stack Certification" /></a>
            <a href="https://spencercorwin.com/assets/fcc-certifications/freecodecamp-responsive-web-design-certification.png"><img src={WebDesign} alt="Responsive Web Design Certification" /></a>
            <a href="https://spencercorwin.com/assets/fcc-certifications/freecodecamp-javascript-algorithms-and-data-structures-certification.png"><img src={JS} alt="Javascript Certification" /></a>
            <a href="https://spencercorwin.com/assets/fcc-certifications/freecodecamp-front-end-libraries-certification.png"><img src={FrontEnd} alt="Front-End Libraries Certification" /></a>
            <a href="https://spencercorwin.com/assets/fcc-certifications/freecodecamp-data-visualization-certification.png"><img src={DataVis} alt="Data Visualization Certification" /></a>
            <a href="https://spencercorwin.com/assets/fcc-certifications/freecodecamp-apis-and-microservices-certification.png"><img src={API} alt="APIs Certification" /></a>
            <a href="https://spencercorwin.com/assets/fcc-certifications/freecodecamp-information-security-and-quality-assurance-certification.png"><img src={InfoSec} alt="Information Security Certification" /></a>
        </div>
    )
}

export default FCC