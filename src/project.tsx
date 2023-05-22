import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Gallery, Item } from 'react-photoswipe-gallery'

import parse from "html-react-parser";

import MainCard from "./main-card";
import config from "./config.json";
import ImagePlaceholder from "./image-placeholder";

import "./sass/projects.scss";
import 'photoswipe/dist/photoswipe.css'

const smallItemStyles: React.CSSProperties = {
  cursor: 'pointer',
  width: '100%',
  maxHeight: '100%',
}

const Project = () => {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(-1);

  const currentProject = config.projects[id];

  document.title = `${currentProject ? `Project "${currentProject.title}"` : `Could not find project`} | leonic.co.uk`;

  useEffect(() => {
    setId(parseInt(projectId ?? ""));

    setLoading(false);
  }, []);

  if (!currentProject) {
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

  return (
    <MainCard className="mr-2 ml-2 md:mr-24 md:ml-24">
      <div className="home-wrapper" id="home-wrapper" data-content="home">
        {loading ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        ) : null}
        <div className="card-image">
          {loading ? (
            <ImagePlaceholder />
          ) : (
            <>

              <Gallery>
                <Carousel animation="slide">
                  {currentProject.image_urls.map((url, i) => (
                    <Item cropped original={url} key={i}>
                      {({ ref, open }) => (
                        <img
                          style={smallItemStyles}
                          className="object-contain h-96 w-full"
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

export default Project;
