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
    <>
      {/* Titulo */}
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px]"
      >
        <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
          <span className="text-[#2DA2FF]">{"{ "}</span>Portfólio
          <span className="text-[#2DA2FF]">{" }"}</span>
        </h2>
        <p className="my-2 w-[32px] border-b-2 border-[#FD8D4B] sm:my-3 sm:w-[64px] lg:my-5 lg:w-[96px]"></p>
        <p className="font-nunito text-[10px] sm:text-[13px] lg:text-[16px]">
          Explore alguns dos nossos projetos!
        </p>
      </motion.div>
      {/* Projetos */}
      <div className="m-2 items-center justify-center sm:m-4">
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            const nextProject = projects[index + 1];
            return (
              <motion.div
                key={project.id}
                initial={{
                  opacity: "var(--opacity-from)",
                  y: "var(--y-from)",
                }}
                whileInView={{
                  opacity: "var(--opacity-to)",
                  y: "var(--y-to)",
                }}
                exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
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
    </>
  );
}
