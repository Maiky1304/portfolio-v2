import { Project } from "../../hooks/data/projects";
import urlForImage from "@sanity/image-url";
import sanity from "../../libs/sanity";
import { motion } from "framer-motion";

type Props = {
  project: Project;
  animation: number;
};

export default function ProjectCard({ project, animation }: Props) {
  const imageUrl = urlForImage(sanity).image(project.thumbnail);

  return (
    <motion.div
      className="rounded-md bg-purple-50 bg-cover bg-center hover:shadow-xl hover:cursor-pointer h-32"
      viewport={{ once: true }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "easeIn", duration: 1, delay: animation * 0.1 }}
      whileHover={{ scale: 1.05 }}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="h-full flex flex-col justify-end">
        <div className="flex justify-center  items-center px-5 py-2 bg-dark-300 bg-opacity-90 rounded-b-md">
          <span className="text-xl text-white">{project.name}</span>
        </div>
      </div>
    </motion.div>
  );
}
