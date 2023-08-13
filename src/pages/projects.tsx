import { Component } from "react";
import { Link } from "react-router-dom";
import { unified } from "unified";

import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";

import "@/sass/projects.scss";

interface LinkData {
  title: string;
  icon: string;
  url: string;
}

interface ProjectData {
  title: string;
  description: string;
  image_urls: string[];
  thumbnail_url: string;
  links: Array<LinkData>;
  language: string;
  year: string;
}

interface ProjectsData {
  path: string;
  data: ProjectData;
}

interface ProjectsState {
  loading: boolean;
  projects: Array<ProjectsData>;
}

class Projects extends Component<{}, ProjectsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
      projects: []
    };
  }

  async componentDidMount(): Promise<void> {
    document.title = "Projects | leonic.co.uk";

    const projects = Object.entries(import.meta.glob('@/projects/*.md', { as: 'raw' }));
    const processor = unified()
      .use(remarkParse)
      .use(remarkStringify)
      .use(remarkFrontmatter, ['yaml', 'toml'])
      .use(remarkParseFrontmatter)

    const loadedProjects = await Promise.all(
      projects.map(async ([path, content]) => {
        const project = await processor.process(`${content}`);

        return {
          path: path.replace(/^.*[\\\/]/, '').replace('.md', ''),
          data: (project.data.frontmatter) as ProjectData
        }
      })
    )
    this.setState({ loading: false, projects: loadedProjects })
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

        <div className="blurred-panel p-4 md:mt-6 md:ml-2 md:mr-2 md:p-4 rounded-lg">
          <span className="pl-2 text-5xl font-bold">
            Projects
          </span>
          <p className="pl-2">
            A few highlights of a my previous passion and commission work
          </p>
          <div className="divider"></div>
          <div className="project-container flex flex-col m-2 md:grid md:h-full md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
            {this.state.projects.map((project, i) => {
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
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
