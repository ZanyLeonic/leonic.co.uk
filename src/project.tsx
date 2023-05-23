import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Gallery, Item } from 'react-photoswipe-gallery'

import parse from "html-react-parser";

import MainCard from "./main-card";
import config from "./config.json";

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
  const [preloadedImages, setPreloaded] = useState([] as HTMLImageElement[])
  const [id, setId] = useState(-1);

  const currentProject = config.projects[id];

  document.title = `${currentProject ? `Project "${currentProject.title}"` : `Could not find project`} | leonic.co.uk`;

  useEffect(() => {
    const parsedId = parseInt(projectId ?? "");
    const images = config.projects[parsedId].image_urls ?? [];

    setId(parsedId);

    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = url
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(loadImg)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(images.map(image => loadImage(image)))
      .then((values) => { setPreloaded(values as HTMLImageElement[]); setLoading(false) })
      .catch(err => console.log("Failed to load images", err))

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
          {loading ? (<div className="h-96 w-full">
          </div>) : (<>
            <Gallery>
              <Carousel animation="slide">
                {preloadedImages.map((img, i) => (
                  <Item cropped original={img.src} width={img.naturalWidth} height={img.naturalHeight} key={i}>
                    {({ ref, open }) => (
                      <img
                        style={smallItemStyles}
                        className="object-contain h-96 w-full"
                        alt={currentProject.title}
                        src={img.src}
                        ref={ref as React.MutableRefObject<HTMLImageElement>}
                        onClick={open}
                      />
                    )}
                  </Item>
                )
                )}
              </Carousel>
            </Gallery>

            <p className="text-center">
              (Click or tap on an image to enlarge)
            </p></>)}
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
