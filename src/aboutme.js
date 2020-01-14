import React from "react";
import "./aboutme.css";
import { Link } from "react-router-dom";

const AboutMe = () => (
  <div className="description">
    <p>
      I am a software engineer at{" "}
      <a href="https://neotracker.io">NEO Tracker</a>. To see my personal
      projects click <Link to="/projects">here</Link>. To see the code for any
      of these projects go to my{" "}
      <a href="https://github.com/spencercorwin">GitHub</a>. To see a more
      complete view of my professional resume you can go to my{" "}
      <a href="https://www.linkedin.com/in/spencercorwin/">LinkedIn</a>.
    </p>
  </div>
);

export default AboutMe;
