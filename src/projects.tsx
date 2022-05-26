import { Component } from "react";

import "./sass/home.scss";

interface ProjectsState {
  loading: boolean;
}

class Projects extends Component<{}, ProjectsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
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
              <span className="card-title">sdsad</span>
              <span className="card-subtitle">Other Aliases: sadas</span>
            </div>
            <div className="divider"></div>
            <div className="extra-info">sddf</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
