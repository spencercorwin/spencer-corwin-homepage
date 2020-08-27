import React from 'react';
import './social.css';

const Social = (props) => (
  <div className='profile-group'>
    <div>
      <h4>GitHub</h4>
      <div id='github-calendar'>
        <p>{props.contributions} contributions in the last year</p>
        <a href='https://github.com/spencercorwin'>
          <img
            src='http://ghchart.rshah.org/spencercorwin'
            alt="spencercorwin's GitHub chart"
          />
        </a>
      </div>
      <p>
        Profile: <a href='https://github.com/spencercorwin'>@spencercorwin</a>
      </p>
    </div>
    <div>
      <h4>LinkedIn</h4>
      <p>LinkedIn Connections: 871</p>
      <p>
        Profile:{' '}
        <a href='https://www.linkedin.com/in/spencercorwin/'>
          Spencer M. Corwin
        </a>
      </p>
    </div>
    <div>
      <h4>Stack Overflow</h4>
      <p>Reputation: {props.reputation}</p>
      <p>
        Profile:{' '}
        <a href='https://stackoverflow.com/users/9157715/spencer'>
          Spencer Corwin
        </a>
      </p>
    </div>
    <div>
      <h4>LeetCode</h4>
      <p>
        Profile: <a href='https://leetcode.com/spencercorwin/'>spencercorwin</a>
      </p>
    </div>
  </div>
);

export default Social;
