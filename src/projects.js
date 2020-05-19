import React from 'react';
import './projects.css';

const Projects = () => (
  <div id='projects'>
    <h3 className='project-title'>Personal Projects</h3>
    <ul className='list-style'>
      <li>
        <a href='https://populariz-frontend.herokuapp.com/'>
          Popularity Contest App
        </a>
      </li>
      <li>
        <a href='https://github.com/spencercorwin/instagram-unlimited'>
          "Intagram Unlimited" Chrome Extension
        </a>
      </li>
      <li>
        <a href='https://github.com/spencercorwin/twitter-bots'>
          Daily Gold and Silver Quotes Twitter Bot
        </a>
      </li>
    </ul>
  </div>
);

export default Projects;
