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
    path?: string;
    body?: string;
}

interface ProjectsState {
    loading: boolean;
    projects: Array<ProjectsData>;
}

module.exports = ProjectsData, ProjectData, LinkData, ProjectsState;
