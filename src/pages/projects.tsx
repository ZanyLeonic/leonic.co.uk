import { useState, useEffect } from "react";

import { unified } from "unified";

import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";

import "@/sass/projects.scss";
import { ProjectSection } from "@/components/project-section";

const Projects = () => {
  const [projects, setProjects] = useState({} as { [id: string]: ProjectsData[] });
  const [loading, setLoading] = useState(true);

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

      let loadedProjects: { [id: string]: ProjectsData[] } = {}

      // Load all projects
      await Promise.all(
        projects.map(async ([path, content]) => {
          const project = await processor.process(`${await content()}`);
          const year = ((project.data.frontmatter) as ProjectData).year;

          if (loadedProjects[year] == undefined) {
            loadedProjects[year] = []
          }

          loadedProjects[year].push({
            path: path.replace(/^.*[\\\/]/, '').replace('.md', ''),
            data: (project.data.frontmatter) as ProjectData
          });
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
        ) : (
          <div>
            {Object.keys(projects)
              .sort((a, b) => a > b ? -1 : 1)
              .map((year, i) => <ProjectSection key={i} year={year} projects={projects[year]} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
