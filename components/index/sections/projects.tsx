import Section from "../section";
import {Project} from "../../../hooks/data/projects";
import ProjectCard from "../../projects/card";
import {socials} from "../../../constants/constants";

type Props = {
    projects: Project[] | undefined
}

export default function ProjectsSection(props: Props) {
    return (
        <Section id="projects">
            <div className="text-center mx-auto">
                <h2 className="text-3xl text-primary font-bold overflow-hidden">🎨 Some of my awesome projects</h2>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-20">
                {props.projects && props.projects
                    .map((project, index) => (
                        <ProjectCard project={project} animation={index} key={index} />
                    ))
                }
            </div>

            <div className="flex p-5 justify-center">
                <a
                    href={socials.find(link => link.includes("github")) || "https://github.com/Maiky1304"}
                    target="_blank"
                    aria-labelledby="button to github page"
                    className="border border-dark-50 px-3 py-1 rounded-md hover:cursor-pointer"
                >
                    View more
                </a>
            </div>
        </Section>
    )
}