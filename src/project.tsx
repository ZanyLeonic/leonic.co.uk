import { Component } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import config from "./config.json";
import ImagePlaceholder from "./image-placeholder";

import "./sass/projects.scss";
import Carousel from "react-material-ui-carousel";

interface ProjectState {
  loading: boolean;
  params: number;
}

function withParams(Component: any) {
  return (props: any) => <Component {...props} params={useParams()} />;
}

class Project extends Component<{ params: any }, ProjectState> {
  constructor(props: { params: any }) {
    super(props);

    const projects = config.projects;
    let projectId = Number(this.props.params.projectId);

    if (
      !Number.isInteger(projectId) ||
      projectId < 0 ||
      projectId > projects.length
    ) {
      projectId = -1;
    }

    this.state = {
      loading: false,
      params: projectId,
    };
  }

  render() {
    const projects = config.projects;

    if (this.state.params == -1) {
      return (
        <div className="home-wrapper" id="home-wrapper" data-content="home">
          <div className="card-image"></div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="card-header">
                <span className="card-title">Project not found</span>
                <span className="card-subtitle">
                  Cannot find the specified project.
                </span>
              </div>
            </div>
            <div className="card-action">
              <Link to="/projects">
                <span style={{ cursor: "pointer" }}>Back to all projects</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    const currentProject = projects[this.state.params];

    return (
      <div className="home-wrapper" id="home-wrapper" data-content="home">
        {this.state.loading ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        ) : null}
        <div className="card-image">
          {this.state.loading ? (
            <ImagePlaceholder />
          ) : (
            <Carousel animation="slide">
              {currentProject.image_urls.map((url, i) => {
                return (
                  <a href={url} target="_blank">
                    <img
                      className="object-contain max-w-6xl max-h-80"
                      alt={currentProject.title}
                      key={i}
                      src={url}
                    />
                  </a>
                );
              })}
            </Carousel>
          )}
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <div className="card-header">
              <span className="card-title">{currentProject.title}</span>
              <span className="card-subtitle pb-2 block">
                {currentProject.extended_description.length < 1
                  ? parse(currentProject.description)
                  : parse(currentProject.extended_description)}
              </span>
            </div>
            <div className="divider"></div>

            {currentProject.links.length > 0 ? (
              <>
                <div className="project-container pt-2 pb-2">
                  {currentProject.links.map((link, i) => {
                    let uri = new URL(link.url);

                    return (
                      <p key={i}>
                        <img
                          className="bg-white"
                          src={
                            link.icon == ""
                              ? `${uri.protocol}//${uri.hostname}/favicon.ico`
                              : link.icon
                          }
                          height="18"
                          width="18"
                          style={{ verticalAlign: "middle", display: "inline" }}
                        />{" "}
                        <a href={link.url} target="_blank" style={{}}>
                          {link.title}
                        </a>
                      </p>
                    );
                  })}
                </div>
                <div className="divider"></div>
              </>
            ) : (
              <></>
            )}
            <div className="card-action">
              <Link to="/projects">
                <a href="#">Back to all projects</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(Project);
