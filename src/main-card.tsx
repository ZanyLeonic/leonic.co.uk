import { Component } from "react";

import Home from "./home";
import Projects from "./projects";

import "./sass/main-card.scss";
class MainCard extends Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="main-content col s12 m8 offset-m2 l6 offset-l3">
        <div className="card hoverable white-text" id="card">
          <ul id="tabs">
            <li className="tab col s3">
              <a className="active" href="#home"></a>
            </li>
            <li className="tab col s3">
              <a href="#projects"></a>
            </li>
          </ul>
          <div id="home">
            <Home />
          </div>
          <div id="projects" className="col s12">
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default MainCard;
