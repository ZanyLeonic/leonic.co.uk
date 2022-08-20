import { Component } from "react";
import config from "./config.json";

import "./sass/projects.scss";

interface ProjectsState {
  loading: boolean;
}

class Projects extends Component<{}, ProjectsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <div
        className="home-wrapper"
        id="projects-wrapper"
        data-content="projects"
      >
        {this.state.loading ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        ) : null}
        <div className="card-image"></div>
        <div className="card-stacked">
          <div className="card-content">
            <div className="card-header">
              <span className="card-title">Projects</span>
              <span className="card-subtitle">
                A few highlights of a my previous passion and comission work
              </span>
            </div>
            <div className="divider"></div>
            <div className="project-container">
              <div>
                <h2 className="header">Horizontal Card</h2>
                <div className="card">
                  <div className="card-image">
                    <img src="https://picsum.photos/100/190" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information.
                      </p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
