import { Link } from "react-router-dom";

export interface ProjectSectionProps {
    year: string;
    projects: ProjectsData[];
}

const ProjectSection = ({ year, projects }: ProjectSectionProps) => {

    return (
        <div>
            <p className="text-5xl pt-6">{year}</p>
            <div className="divider"></div>
            <div className="project-container flex flex-col m-2 md:grid md:h-full justify-center md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
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
                                            {project.data.languages.join(", ")}
                                        </p>
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
    )
}

export { ProjectSection } 