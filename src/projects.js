import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <div id="projects">
            <h3 className="project-title">Personal Projects</h3>
            <ul className="list-style">
                <li><a href="https://digidex-app.herokuapp.com">Digidex App (ReactJS, React Router, ExpressJS, MongoDB)</a></li>
                <li><a href="https://popularity-contest.herokuapp.com/">Popularity Contest App (NextJS, D3JS, ReactJS, ExpressJS, MongoDB, Typescript, SSR)</a></li>
                {/*<li><a href="https://github.com/spencercorwin/command-line-games">Command Line Tic-Tac-Toe and Connect Four (Typescript)</a></li>*/}
                <li><a href="https://twitter.com/dailygoldquotes">Daily Gold and Silver Quotes (NodeJS Web Scraper and Twitter Bot)</a></li>
                <li><a href="https://spencercorwin.com/to-do-app">To Do App (ReactJS)</a></li>
                <li><a href="https://spencercorwin.com/bitch-better-have-my-coffee">"Bitch Better Have My Coffee" Podcast Website (GatsbyJS)</a></li>
                <li><a href="https://spencercorwin.com/comps">Residential Comp Analysis (WIP)</a></li>
            </ul>
            <h3 className="project-title">Free Code Camp Projects</h3>
            <ul className="list-style">
                <li><a href="https://spencers-timestamp-microservice.glitch.me/">Timestamp Microservice</a></li>
                <li><a href="https://spencers-request-header-parser-microservice.glitch.me/">Request Header Parser Microservice</a></li>
                <li><a href="https://spencers-url-shortener-microservice.glitch.me/">URL Shortener Microservice</a></li>
                <li><a href="https://spencers-exercise-tracker.glitch.me/">Exercise Tracker</a></li>
                <li><a href="https://spencers-file-metadata-microservice.glitch.me/">File Metadata Microservice</a></li>
                <li><a href="https://spencers-metric-imperial-converter.glitch.me/">Metric-Imperial Converter</a></li>
                <li><a href="https://spencers-issue-tracker.glitch.me/">Issue Tracker</a></li>
                <li><a href="https://spencers-personal-library.glitch.me/">Personal Library</a></li>
                <li><a href="https://spencers-stock-price-checker.glitch.me/">Stock Price Checker</a></li>
                <li><a href="https://spencers-anonymous-message-board.glitch.me/">Anonymous Message Board</a></li>
                <li><a href="https://spencercorwin.com/random-quote-machine">Random Quote Machine</a></li>
                <li><a href="https://spencercorwin.com/markdown-previewer">Markdown Previewer</a></li>
                <li><a href="https://spencercorwin.com/drum-machine">Drum Machine</a></li>
                <li><a href="https://spencercorwin.com/javascript-calculator">Javascript Calculator</a></li>
                <li><a href="https://spencercorwin.com/pomodoro-clock">Pomodoro Clock</a></li>
                <li><a href="https://spencercorwin.com/bar-chart">US GDP 1947-2015 Bar Chart</a></li>
                <li><a href="https://spencercorwin.com/scatterplot">Doping in Professional Cycling Scatter Plot</a></li>
                <li><a href="https://spencercorwin.com/heat-map">Monthly Global Land-Surface Temperature 1753-2015 Heat Map</a></li>
                <li><a href="https://spencercorwin.com/choropleth-map">Percentage of US Adults with Bachelors Degree by County</a></li>
                <li><a href="https://spencercorwin.com/treemap">Treemaps for Kickstarter Funding, Movie Sales, Video Game Sales</a></li>
                <li><a href="https://spencercorwin.com/tribute-page">Tribute Page</a></li>
                <li><a href="https://spencercorwin.com/survey-form">Survey Form</a></li>
                <li><a href="https://spencercorwin.com/product-landing-page">Product Landing Page</a></li>
                <li><a href="https://spencercorwin.com/technical-documentation-page">Technical Documentation Page</a></li>
                <li><a href="https://spencercorwin.com/personal-portfolio-webpage">Personal Portfolio Webpage</a></li>
            </ul>
        </div>
    )
}

export default Projects;