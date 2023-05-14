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

  componentDidMount(): void {
    document.title = "Projects | leonic.co.uk";
  }

  render() {
    return (
      <div
        className="home-wrapper w-full"
        id="projects-wrapper"
        data-content="projects"
      >
        {this.state.loading ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        ) : null}
        <div className="card-image"></div>
        <div className="card-content">
          <div className="card-header">
            <span className="card-title">
              <span className="inline text-4xl lg:hidden material-icons">
                <Link to="/">arrow_back</Link>
              </span>
              Projects
            </span>
            <span className="card-subtitle">
              A few highlights of a my previous passion and commission work
            </span>
          </div>
          <div className="divider"></div>
          <div className="project-container flex flex-col md:grid md:h-full md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 m-12">
            {config.projects.map((project, i) => {
              return (
                <div key={i}>
                  <div className="card md:h-full md:flex md:flex-col md:justify-end">
                    <Link to={`/projects/${i}`}>
                      <div className="card-image waves-effect waves-linkColour w-full">
                        <img
                          className="md:object-fill"
                          src={
                            project.thumb_image_url == ""
                              ? "/img/projects/unknown.png"
                              : project.thumb_image_url
                          }
                        />
                        <span className="card-title">
                          {project.title} ({project.year})
                        </span>
                      </div>
                    </Link>
                    <div className="card-content md:min-h-[20%] lg:min-h-[25%]">
                      <p>
                        <span style={{ fontWeight: "bold" }}>Language: </span>
                        {project.language}
                      </p>
                      <p>{project.description}</p>
                    </div>
                    <div className="card-action">
                      <Link to={`/projects/${i}`}>
                        <a href="#">Learn more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card-action">
            <a href="#">Go to Top</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
