import React, { Component } from "react";
import {
  MemoryRouter,
  Route,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactGA from "react-ga";
import "./App.css";
import Image from "./assets/guatape-min.jpeg";
import Projects from "./projects";
import AboutMe from "./aboutme";
// import Resume from './resume';
import Social from "./social";
import Testimonials from "./testimonials";
// import FCC from './fcc';
// import Contact from './contact';
// import Blog from './blog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: true,
      contributions: "418", //'...loading...',
      reputation: "216" //'...loading...'
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    ReactGA.initialize("UA-128636931-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  toggleDarkMode = () => {
    if (this.state.dark) {
      document.getElementsByTagName("html")[0].style.background = "#121212";
    } else {
      document.getElementsByTagName("html")[0].style.background = "white";
    }
    this.setState({
      dark: this.state.dark ? false : true
    });
    localStorage.setItem(
      "darkmode",
      JSON.stringify({ dark: this.state.dark ? false : true })
    );
  };

  componentDidMount = () => {
    const cachedToggle = localStorage.getItem("darkmode");
    if (cachedToggle) {
      const cachedToggleJSON = JSON.parse(cachedToggle);
      this.setState({
        dark: cachedToggleJSON.dark ? true : false
      });
      if (!cachedToggleJSON.dark) {
        document.getElementsByTagName("html")[0].style.background = "#121212";
      }
    }
    fetch(
      "http://urlreq.appspot.com/req?method=GET&url=https%3A%2F%2Fgithub-contributions-api.herokuapp.com%2Fspencercorwin%2Fcount"
    ) //https://github-contributions-api.herokuapp.com/spencercorwin/count
      .then(res => res.json())
      .then(data => {
        let result = 0;
        for (const year in data.data) {
          for (const month in data.data[year]) {
            for (const day in data.data[year][month]) {
              result += data.data[year][month][day];
            }
          }
        }
        this.setState({
          contributions: result
        });
      });
    fetch(
      "https://api.stackexchange.com/2.2/users/9157715?order=desc&sort=reputation&site=stackoverflow"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          reputation: data.items[0].reputation
        });
      });
  };

  render() {
    return (
      <div
        className={
          this.state.dark
            ? "body-container light-body"
            : "body-container dark-body"
        }
      >
        <div className="body">
          <h1 id="h1-title">Spencer M. Corwin</h1>
          <div className="tagline-container">
            <div id="toggle-placeholder"></div>
            <p className="tagline">
              Software Engineer at{" "}
              <a href="https://neotracker.io">NEO tracker</a>
            </p>
            <button
              className={
                this.state.dark
                  ? "toggle-button toggle-button-dark"
                  : "toggle-button toggle-button-light"
              }
              onClick={this.toggleDarkMode}
            >
              Toggle {this.state.dark ? "Dark" : "Light"} Mode
            </button>
          </div>
          <div id="top">
            <MemoryRouter>
              <Route
                render={({ location }) => (
                  <div id="content">
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/about" />}
                    />
                    <div
                      className={
                        this.state.dark
                          ? "nav-container nav-container-dark"
                          : "nav-container nav-container-light"
                      }
                    >
                      <NavLink
                        className={
                          this.state.dark
                            ? "nav-link nav-link-dark"
                            : "nav-link nav-link-light"
                        }
                        activeClassName={
                          this.state.dark
                            ? "active-nav-link active-nav-link-dark"
                            : "active-nav-link active-nav-link-light"
                        }
                        to="/about"
                      >
                        About Me
                      </NavLink>
                      <NavLink
                        className={
                          this.state.dark
                            ? "nav-link nav-link-dark"
                            : "nav-link nav-link-light"
                        }
                        activeClassName={
                          this.state.dark
                            ? "active-nav-link active-nav-link-dark"
                            : "active-nav-link active-nav-link-light"
                        }
                        to="/projects"
                      >
                        Projects
                      </NavLink>
                      <NavLink
                        className={
                          this.state.dark
                            ? "nav-link nav-link-dark"
                            : "nav-link nav-link-light"
                        }
                        activeClassName={
                          this.state.dark
                            ? "active-nav-link active-nav-link-dark"
                            : "active-nav-link active-nav-link-light"
                        }
                        to="/social"
                      >
                        Profiles
                      </NavLink>
                      <NavLink
                        className={
                          this.state.dark
                            ? "nav-link nav-link-dark"
                            : "nav-link nav-link-light"
                        }
                        activeClassName={
                          this.state.dark
                            ? "active-nav-link active-nav-link-dark"
                            : "active-nav-link active-nav-link-light"
                        }
                        to="/testimonials"
                      >
                        Testimonials
                      </NavLink>
                    </div>
                    {/* <div className={this.state.dark ? "nav-container nav-container-dark" : "nav-container nav-container-light"}>
                      <NavLink className={this.state.dark ? "nav-link nav-link-dark" : "nav-link nav-link-light"} activeClassName={this.state.dark ? "active-nav-link active-nav-link-dark" : "active-nav-link active-nav-link-light"} to="/blog-posts">Blog Posts</NavLink>
                      <NavLink className={this.state.dark ? "nav-link nav-link-dark" : "nav-link nav-link-light"} activeClassName={this.state.dark ? "active-nav-link active-nav-link-dark" : "active-nav-link active-nav-link-light"} to="/fcc">Certification</NavLink>
                      <NavLink className={this.state.dark ? "nav-link nav-link-dark" : "nav-link nav-link-light"} activeClassName={this.state.dark ? "active-nav-link active-nav-link-dark" : "active-nav-link active-nav-link-light"} to="/resume">Résumé</NavLink>
                      <NavLink className={this.state.dark ? "nav-link nav-link-dark" : "nav-link nav-link-light"} activeClassName={this.state.dark ? "active-nav-link active-nav-link-dark" : "active-nav-link active-nav-link-light"} to="/contact">Contact</NavLink>
                    </div> */}
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={0}
                      >
                        <Switch location={location}>
                          <Route path="/about" component={AboutMe} />
                          <Route path="/projects" component={Projects} />
                          <Route
                            path="/social"
                            render={() => (
                              <Social
                                contributions={this.state.contributions}
                                reputation={this.state.reputation}
                                score={this.state.score}
                                rank={this.state.rank}
                                js={this.state.js}
                                jsscore={this.state.jsscore}
                                python={this.state.python}
                                pythonscore={this.state.pythonscore}
                              />
                            )}
                          />
                          <Route
                            path="/testimonials"
                            component={Testimonials}
                          />
                          {/* <Route path="/resume" component={Resume} />
                          <Route path="/blog-posts" component={Blog} />
                          <Route path="/fcc" component={FCC} />
                          <Route path="/contact" render={() => <Contact dark={this.state.dark} />} /> */}
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </div>
                )}
              />
            </MemoryRouter>
            <div id="photo">
              <img src={Image} alt="Spencer Corwin in Cartagena, Colombia" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
