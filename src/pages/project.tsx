import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Gallery, Item } from 'react-photoswipe-gallery'
import Carousel from "react-material-ui-carousel";
import parse from "html-react-parser";

import MainCard from "@/components/main-card";

import "@/sass/projects.scss";
import 'photoswipe/dist/photoswipe.css'

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";

const smallItemStyles: React.CSSProperties = {
  cursor: 'pointer',
  width: '100%',
  maxHeight: '100%',
}

interface LinkData {
  title: string;
  icon: string;
  url: string;
}

interface ProjectData {
  title: string;
  description: string;
  thumbnail_url: string;
  image_urls: string[];
  links: Array<LinkData>;
  language: string;
  year: string;
}

interface ProjectsData {
  data: ProjectData;
  body: string;
}

const emptyProject = (): ProjectsData => ({
  data: {
    title: "",
    description: "",
    thumbnail_url: "",
    image_urls: [],
    links: [],
    language: "",
    year: ""
  },
  body: ""
});

const Project = () => {
  const { projectId } = useParams();

  const [imageLoading, setImageLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [preloadedImages, setPreloaded] = useState([] as HTMLImageElement[])

  const [currentProject, setCurrentProject] = useState(emptyProject());

  const [carouselFocused, setCarouselFocused] = useState(false);

  /*
  * Attempts to fetch the requested project and parse it.
  */
  function fetchProject() {
    return import(`../projects/${projectId}.md?raw`)
      .then((res) => res.default)
      .then(async (res) => {
        const processor = unified()
          .use(remarkParse)
          .use(remarkFrontmatter, ['yaml', 'toml'])
          .use(remarkParseFrontmatter)
          .use(remarkRehype)
          .use(rehypeStringify);

        const project = await processor.process(`${res}`);

        setCurrentProject({ data: project.data.frontmatter as ProjectData, body: project.value as string });
        setContentLoading(false);
      }).catch((err) => {
        setNotFound(true);
        console.error(`Error loading Project "${projectId}". Does it exist?`)
      });
  }

  // Only try to fetch the project once per lifetime
  useEffect(() => {
    fetchProject();
  }, []);

  // Preload the images to bypass photoswipe's limitation of not being to get the image's dimensions.
  // But we have to wait until the project's details have been loaded.
  useEffect(() => {
    if (!currentProject) return;

    const images = currentProject.data.image_urls;

    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = url

        loadImg.onload = () => resolve(loadImg)
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(images.map(image => loadImage(image)))
      .then((values) => { setPreloaded(values as HTMLImageElement[]); setImageLoading(false); })
      .catch(err => console.error(`Image preload failed. (${err})`))

  }, [contentLoading]);

  // Update the page title depending on the state of the page.
  document.title = !(imageLoading && contentLoading) ? `${!notFound ? `Project "${currentProject.data.title}"` : `Could not find project`} | leonic.co.uk` : "Loading project... | leonic.co.uk";

  // If the project doesn't exist, show a 404 page.
  if (notFound) {
    return (
      <MainCard className="mr-2 ml-2 md:mr-24 md:ml-24 md:w-4/5 xl:w-2/5">
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
              <Link to="/projects">Back to all projects</Link>
            </div>
          </div>
        </div>
      </MainCard>
    );
  }

  return (
    <MainCard className="mr-2 ml-2 md:mr-24 md:ml-24 md:w-4/5 xl:w-2/5">
      <div className="home-wrapper" id="home-wrapper" data-content="home">
        {imageLoading || contentLoading ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        ) : null}
        <div className="card-image">
          <>
            {imageLoading || contentLoading ? (<div className="h-96 w-full"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <div className="preloader-wrapper active center">
                <div className="spinner-layer spinner-red-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
            </div>) : null}
            <Gallery onBeforeOpen={(g) => g.on('close', () => setCarouselFocused(false))}>
              <Carousel animation="slide" stopAutoPlayOnHover={true} changeOnFirstRender={true} autoPlay={!carouselFocused}>
                {preloadedImages.map((img, i) => (
                  <Item cropped original={img.src} width={img.naturalWidth} height={img.naturalHeight} key={i}>
                    {({ ref, open }) => (
                      <img
                        style={smallItemStyles}
                        className="object-contain h-96 w-full"
                        alt={currentProject.data.title}
                        src={img.src}
                        ref={ref as React.MutableRefObject<HTMLImageElement>}
                        onClick={(e) => {
                          setCarouselFocused(true);
                          open(e);
                        }}
                      />)
                    }
                  </Item>
                )
                )}
              </Carousel>
            </Gallery>

            <p className="text-center">
              (Click or tap on an image to enlarge)
            </p></>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <div className="card-header">
              <span className="card-title">{currentProject.data.title}</span>
              <span className="card-subtitle pb-2 block">
                <span className="font-bold">Language: </span>
                {currentProject.data.language}
              </span>
              <span className="card-subtitle pb-2 block">
                {currentProject.body.length < 1
                  ? parse(currentProject.data.description)
                  : parse(currentProject.body)}
              </span>
            </div>
            <div className="divider"></div>
            {currentProject.data.links.length > 0 ? (
              <>
                <div className="project-container pt-2 pb-2">
                  <p className="pb-1">Related links:</p>
                  {currentProject.data.links.map((link, i) => {
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
                        </div >
                      </a >
                    );
                  })}
                </div >
              </>
            ) : (
              <></>
            )}
            <div className="card-action">
              <Link to="/projects">
                <a href="#">Back to all projects</a>
              </Link>
            </div>
          </div >
        </div >
      </div >
    </MainCard >
  );
}

export default Project;
