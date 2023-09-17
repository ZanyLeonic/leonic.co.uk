import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { unified } from "unified";

import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";

import "@/sass/projects.scss";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([] as ProjectsData[]);

  // Glob import all projects, parse them
  useEffect(() => {
    async function fetchProjects() {
      document.title = "Projects | leonic.co.uk";

      const projects = Object.entries(import.meta.glob('@/projects/*.md', { as: 'raw' }));
      const processor = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkFrontmatter, ['yaml', 'toml'])
        .use(remarkParseFrontmatter)

      // Load all projects
      const loadedProjects = await Promise.all(
        projects.map(async ([path, content]) => {
          const project = await processor.process(`${await content()}`);

          return {
            path: path.replace(/^.*[\\\/]/, '').replace('.md', ''),
            data: (project.data.frontmatter) as ProjectData
          }
        })
      )
      setProjects(loadedProjects);
      setLoading(false);
    }

    fetchProjects();
  }, [])

  return (
    <div
      className="home-wrapper w-full"
      id="projects-wrapper"
      data-content="projects"
    >
      <div className="blurred-panel p-4 md:mt-6 md:ml-2 md:mr-2 md:p-4 rounded-lg">
        <span className="pl-2 text-5xl font-bold">
          Projects
        </span>
        <p className="pl-2">
          A few highlights of a my previous passion and commission work
        </p>
        <div className="divider"></div>
        {loading ? (<div className="h-96 w-full"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}><div className="preloader-wrapper active center">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div></div>
        ) :
          (<div className="project-container flex flex-col m-2 md:grid md:h-full md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
            {projects
              .sort((a, b) => a.data.year > b.data.year ? -1 : 1)
              .map((project, i) => {
                return (
                  <div key={i}>
                    <div className="card md:h-full md:flex md:flex-col md:justify-end">
                      <Link className="h-full" to={`/projects/${project.path}`}>
                        <div className="card-image waves-effect waves-linkColour w-full">
                          <img
                            className="object-cover object-top h-[30em] w-full"
                            src={
                              project.data.thumbnail_url == ""
                                ? "/img/projects/unknown.png"
                                : project.data.thumbnail_url
                            }
                          />
                          <span className="card-title backdrop-blur-sm">
                            {project.data.title}
                          </span>
                        </div>
                      </Link>
                      <div className="card-content h-full">
                        <p className="text-md">
                          <span className="font-semibold">Language: </span>
                          {project.data.language}
                        </p>
                        <p className="text-md"><span className="font-semibold">Year:</span> {project.data.year}</p>
                        <p className="pt-4">{project.data.description}</p>
                      </div>
                      <div className="card-action">
                        <Link to={`/projects/${project.path}`}>
                          <a href="#">Learn more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>)}
      </div>
    </div >
  );
}

export default Projects;
