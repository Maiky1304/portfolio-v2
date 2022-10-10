import {useEffect, useState} from "react";
import sanity from "../../libs/sanity";

export type Project = {
    name: string;
    thumbnail: { asset: { url: string, _id: string } };
    links: string[];
}

export default function useProjects() {
    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        sanity.fetch(`*[_type == "project"]{ name, thumbnail{asset->{_id,url}}, links }`)
            .then(results => setProjects(results))
            .catch(error => console.error(error));
    }, []);

    return projects;
}