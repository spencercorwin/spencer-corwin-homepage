import React from 'react';
import './blog.css';

const Blog = () => {
    return(
        <div>
            <div>
                <h3 className="blog-title"><a href="https://spencercorwin.com/blog/5/digidex-reflections/">How I Built My First Full-Stack Web Application</a></h3>
                <h6 className="blog-date">January 31, 2019</h6>
                <p className="blog-preview">As I worked on the Free Code Camp curriculum I knew I wanted to work on my own projects. I had built up a list of cool ideas that I thought…</p>
            </div>
            <div>
                <h3 className="blog-title"><a href="https://spencercorwin.com/blog/4/how-to-connect-front-end-to-back-end/">How To Connect a React Front-End to an Express Back-End</a></h3>
                <h6 className="blog-date">January 10, 2019</h6>
                <p className="blog-preview">After at least a week of repeatedly banging my head against a wall I have finally, successfully connected my React front-end to my Express…</p>
            </div>
            <div>
                <h3 className="blog-title"><a href="https://spencercorwin.com/blog/3/completing-freecodecamp/">Completing Free Code Camp</a></h3>
                <h6 className="blog-date">December 26, 2018</h6>
                <p className="blog-preview">On December 19th, 2018 I completed the freeCodeCamp (FCC) curriculum to earn their full stack certification. FCC estimates that this…</p>
            </div>
            <div>
                <h3 className="blog-title"><a href="https://spencercorwin.com/blog/2/island-life/">How to Remove All Distractions and Code Full-Time</a></h3>
                <h6 className="blog-date">November 26, 2018</h6>
                <p className="blog-preview">I’m living the island life. Not the Hawaiian Island life. The Santa Catalina Island life. Catalina Island is an island off the coast of…</p>
            </div>
            <div>
                <h3 className="blog-title"><a href="https://spencercorwin.com/blog/1/how-i-quit-my-job/">How I Decided to Quit My Job as a Banker and Learn to Code</a></h3>
                <h6 className="blog-date">November 12, 2018</h6>
                <p className="blog-preview">In 2014 I graduated from Whitman College with a degree in economics and was off into the real world. Like many graduates, I didn’t know…</p>
            </div>
        </div>
    )
}

export default Blog