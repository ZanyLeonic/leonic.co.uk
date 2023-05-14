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

        <div className="p-4 md:mt-6 md:ml-12 md:mr-12 md:p-4 backdrop-blur-sm rounded-lg">
          <span className="text-5xl font-bold">
            Projects
          </span>
          <p>
            A few highlights of a my previous passion and commission work
          </p>
          <div className="divider"></div>
          <div className="project-container flex flex-col m-2 md:grid md:h-full md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
            {config.projects.map((project, i) => {
              return (
                <div key={i}>
                  <div className="card md:h-full md:flex md:flex-col md:justify-end">
                    <Link className="h-full" to={`/projects/${i}`}>
                      <div className="card-image waves-effect waves-linkColour">
                        <img
                          className="object-cover min-h-[25.75em]"
                          src={
                            project.thumb_image_url == ""
                              ? "/img/projects/unknown.png"
                              : project.thumb_image_url
                          }
                        />
                        <span className="card-title backdrop-blur-lg">
                          {project.title} ({project.year})
                        </span>
                      </div>
                    </Link>
                    <div className="card-content backdrop-blur-lg h-full">
                      <p>
                        <span style={{ fontWeight: "bold" }}>Language: </span>
                        {project.language}
                      </p>
                      <p>{project.description}</p>
                    </div>
                    <div className="card-action backdrop-blur-lg">
                      <Link to={`/projects/${i}`}>
                        <a href="#">Learn more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
