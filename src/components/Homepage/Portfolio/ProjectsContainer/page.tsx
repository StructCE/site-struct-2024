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
              initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
              whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
              exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex w-full items-center justify-center text-lg [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] max-lg:flex-col"
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
