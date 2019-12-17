import React from "react";
import "./projects.css";

const Projects = () => (
  <div id="projects">
    <h3 className="project-title">Personal Projects</h3>
    <ul className="list-style">
      <li>
        <a href="https://populariz-frontend.herokuapp.com/">
          Popularity Contest App
        </a>
      </li>
      <li>
        <a href="https://chrome.google.com/webstore/detail/instagram-unlimited/ipmehihejmhfhhieejoaclnmeoedijen">
          "Intagram Unlimited" Chrome Extension
        </a>
      </li>
      <li>
        <a href="https://twitter.com/dailygoldquotes">
          Daily Gold and Silver Quotes Twitter Bot
        </a>
      </li>
      <li>
        <a href="https://github.com/spencercorwin/corwinism-vscode-theme">
          Custom VS Code Theme
        </a>
      </li>
      <li>
        <a href="https://github.com/spencercorwin/corwinism-zsh-theme">
          Custom ZSH Theme
        </a>
      </li>
    </ul>
  </div>
);

export default Projects;
