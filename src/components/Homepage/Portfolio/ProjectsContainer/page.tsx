"use client";
import { type Project } from "@prisma/client";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/page";

export default function ProjectsContainer({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <div className="m-2 items-center justify-center sm:m-4">
      {projects.map((project, index) => {
        if (index % 2 === 0) {
          const nextProject = projects[index + 1];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: "var(--opacity-from)", y: "var(--x-from)" }}
              whileInView={{ opacity: "var(--opacity-to)", y: "var(--x-to)" }}
              exit={{ opacity: "var(--opacity-from)", y: "var(--x-to)" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex w-full items-center justify-center text-lg [--opacity-from:0%] [--opacity-to:100%] [--x-from:50px] [--x-to:0px] max-lg:flex-col"
            >
              <ProjectCard project={project} />
              {nextProject ? <ProjectCard project={nextProject} /> : null}
            </motion.div>
          );
        }
      })}
    </div>
  );
}
