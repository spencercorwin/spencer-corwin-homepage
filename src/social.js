import React from 'react';
import './social.css';

const Social = (props) => {
    return(
        <div className="profile-group">
            <div>
                <h4>GitHub</h4>
                <div id="github-calendar">
                    <p>{props.contributions} contributions in the last year</p>
                    <a href="https://github.com/spencercorwin">
                        <img src="http://ghchart.rshah.org/spencercorwin" alt="spencercorwin's GitHub chart" />
                    </a>
                </div>
                <p>Profile: <a href="https://github.com/spencercorwin">@spencercorwin</a></p>
            </div>
            <div>
                <h4>LinkedIn</h4>
                <p>LinkedIn Connections: 800</p>
                <p>Profile: <a href="https://www.linkedin.com/in/spencercorwin/">Spencer M. Corwin</a></p>
            </div>
            <div>
                <h4>Codewars</h4>
                <div className="line-holder">
                    <p>Overall Rank: {props.rank}</p>
                    <p>Javascript Rank: {props.js}</p>
                    <p>Python Rank: {props.python}</p>
                </div>
                <div className="line-holder">
                    <p>Overall Score: {props.score}</p>
                    <p>Javascript Score: {props.jsscore}</p>
                    <p>Python Score: {props.pythonscore}</p>
                </div>
                <p>Profile: <a href="https://www.codewars.com/users/scorwin">scorwin</a></p>
            </div>
            <div>
                <h4>Stack Overflow</h4>
                <p>Reputation: {props.reputation}</p>
                <p>Profile: <a href="https://stackoverflow.com/users/9157715/spencer">Spencer Corwin</a></p>
            </div>
            <div>
                <h4>FreeCodeCamp</h4>
                <p>Profile: <a href="https://www.freecodecamp.org/spencercorwin">@spencercorwin</a></p>
            </div>
            <div>
                <h4>CodePen</h4>
                <p>Profile: <a href="https://codepen.io/spencercorwin/">@spencercorwin</a></p>
            </div>
            <div>
                <h4>Mozilla Development Network (MDN)</h4>
                <p>Profile: <a href="https://developer.mozilla.org/en-US/profiles/spencercorwin">spencercorwin</a></p>
            </div>
        </div>
    )
}

export default Social