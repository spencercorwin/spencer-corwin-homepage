import React from 'react';
import './projects.css';

const Projects = () => (
  <div id='projects'>
    <h3 className='project-title'>Personal Projects</h3>
    <ul className='list-style'>
      <li>
        <a href='https://populariz-frontend.herokuapp.com/'>"Populariz" App</a>{' '}
        (<a href='https://github.com/spencercorwin/populariz'>GitHub</a>)
      </li>
      <li>
        <a href='https://github.com/spencercorwin/instagram-unlimited'>
          "Intagram Unlimited" Chrome Extension
        </a>
      </li>
      <li>
        <a href='https://twitter.com/dailygoldquotes'>
          Daily Gold and Silver Quotes Twitter Bot
        </a>{' '}
        (<a href='https://github.com/spencercorwin/twitter-bots'>GitHub</a>)
      </li>
    </ul>
  </div>
);

export default Projects;
