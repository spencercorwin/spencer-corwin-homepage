import React from 'react';
import './resume.css';
import ResumePDF from './assets/spencer-corwin-resume.png';

const Resume = () => (
  <div id='resume-container'>
    <a href='https://spencercorwin.com/assets/spencer-corwin-resume.pdf'>
      <img src={ResumePDF} alt='Spencer Corwin Resume' />
    </a>
  </div>
);

export default Resume;
