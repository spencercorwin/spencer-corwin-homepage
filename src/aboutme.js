import React from 'react';
import './aboutme.css';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="description">
            <p>I am a full-stack web developer for hire from Orange County, CA with experience in HTML, CSS, Javascript, Typescript, ReactJS, NodeJS, ExpressJS, MongoDB, MongooseJS, and Git/GitHub. To see my completed projects click <Link to="/projects">here</Link>. To see the code for any of these projects go to my <a href="https://github.com/spencercorwin">GitHub</a>.</p>
            <p>Until recently I worked in the fields of finance and real estate, most recently working as a banker at a community bank. I’m a voracious reader and in late 2017 I read <em>How to Create a Mind</em> by Ray Kurzweil and was struck by the infinite potential that still exists in computers, software, and information technology. I realized that I had to somehow make my way into software. After months of research, reflection, and talking to people, I decided I had the capability to teach myself to code and become a software engineer. I got started with little practical direction, but eventually I realized that web development would be the most practical field to enter. For months I coded on nights and weekends while working at the bank. I used free online resources like freeCodeCamp and free textbooks to teach myself. By October 2018 I figured I had built a good base of skills, that I had saved a bit of money, and that I could move in with brother on Catalina Island to live ultra cheap. This way I could quit my job at the bank and code full-time to reach my goal of becoming a professional software engineer. I’ve been coding full-time since mid-October and I’ve come a long way. I am now looking for a full-time job as a web developer.</p>
            <p>Please note that while I currently live on Catalina Island in southern California, I intend to immediately move to wherever I find great employment.</p>
            <p>If you want to read more about my progression you can visit my blog <a href="https://spencercorwin.com/blog">here</a>. To see a more complete view of my professional resume you can go to my <a href="https://www.linkedin.com/in/spencercorwin/">LinkedIn</a> or you can view and download my resume <Link to="/resume">here</Link>. To see all my freeCodeCamp certifications, including for full-stack web development, click <Link to="/fcc">here</Link>. To get in touch with me please send me an <a href="mailto:spencercorwin@icloud.com">email</a>.</p>
        </div>
    )
}

export default AboutMe;