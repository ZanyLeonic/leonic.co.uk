import { Component } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import config from "./config.json";
import ImagePlaceholder from "./image-placeholder";

import "./sass/projects.scss";
import 'photoswipe/dist/photoswipe.css'
import Carousel from "react-material-ui-carousel";
import { Gallery, Item } from 'react-photoswipe-gallery'
import MainCard from "./main-card";

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

  componentDidMount(): void {
    const currentProject = config.projects[this.state.params];
    if (currentProject)
      document.title = `Project "${currentProject.title}" | leonic.co.uk`;
    else
      document.title = `Could not find project | leonic.co.uk`;
  }

  render() {
    const projects = config.projects;

    if (this.state.params == -1) {
      return (
        <MainCard className="mr-2 ml-2 md:mr-24 md:ml-24">
          <div className="home-wrapper" id="home-wrapper" data-content="home">
            <div className="card-image"></div>
            <div className="card-stacked">
              <div className="card-content">
                <div className="card-header">
                  <span className="card-title"><i className="material-icons text-4xl">error_outline</i> Project not found</span>
                  <span className="card-subtitle">
                    Cannot find the specified project.
                  </span>
                </div>
              </div>
              <div className="card-action">
                <Link to="/projects">
                  <a href="#">Back to all projects</a>
                </Link>
              </div>
            </div>
          </div>
        </MainCard>
      );
    }

    const currentProject = projects[this.state.params];

    return (
      <MainCard className="mr-2 ml-2 md:mr-24 md:ml-24">
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
              <>

                <Gallery>
                  <Carousel animation="slide">
                    {currentProject.image_urls.map((url, i) => (
                      <Item cropped original={url} thumbnail={url} key={i}>
                        {({ ref, open }) => (
                          <img
                            className="object-contain max-w-6xl max-h-80"
                            alt={currentProject.title}
                            src={url}
                            ref={ref as React.MutableRefObject<HTMLImageElement>}
                            onClick={open}
                          />
                        )}
                      </Item>
                    ))}
                  </Carousel>
                </Gallery>

                <p className="text-center">
                  (Click or tap on an image to enlarge)
                </p>
              </>
            )}
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="card-header">
                <span className="card-title">{currentProject.title}</span>
                <span className="card-subtitle pb-2 block">
                  <span className="font-bold">Language: </span>
                  {currentProject.language}
                </span>
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
                    <p className="pb-1">Related links:</p>
                    {currentProject.links.map((link, i) => {
                      let uri = new URL(link.url);

                      return (
                        <a
                          href={link.url}
                          className="waves-effect waves-linkColour btn-flat block text-xl pt-2"
                          target="_blank"
                          key={i}
                        >
                          <div className="flex items-center">
                            <img
                              className="bg-white rounded"
                              src={
                                link.icon == ""
                                  ? `${uri.protocol}//${uri.hostname}/favicon.ico`
                                  : link.icon
                              }
                              height="24"
                              width="24"
                            />

                            <span className="link-colour pl-1">{link.title}</span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
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
      </MainCard>
    );
  }
}

export default withParams(Project);
