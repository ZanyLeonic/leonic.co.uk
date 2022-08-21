import { Component } from "react";
import { Link } from "react-router-dom";
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
                A few highlights of a my previous passion and commission work
              </span>
            </div>
            <div className="divider"></div>
            <div className="project-container">
              {config.projects.map((project, i) => {
                return (
                  <div key={i}>
                    <div className="card">
                      <div className="card-image">
                        <img src="/img/card-test.png" />
                        <span className="card-title">
                          {project.title} ({project.year})
                        </span>
                      </div>
                      <div className="card-content">
                        <p>{project.description}</p>
                      </div>
                      <div className="card-action">
                        <Link to={`/projects/${i}`}>
                          <span style={{ cursor: "pointer" }}>Learn more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
