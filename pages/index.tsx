import type {NextPage} from 'next'
import Hero from "../components/index/hero";
import {DefaultLayout} from "../components/layouts/default";
import {ReactNode} from "react";
import ProjectsSection from "../components/index/sections/projects";
import ContactSection from "../components/index/sections/contact";
import useProjects from "../hooks/data/projects";

const Home: NextPage = () => {
    const projects = useProjects();

    return (
        <>
            <Hero />
            <ProjectsSection projects={projects} />
            <ContactSection />
        </>
    )
}

//@ts-ignore
Home.getLayout = function getLayout(page: ReactNode) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default Home

