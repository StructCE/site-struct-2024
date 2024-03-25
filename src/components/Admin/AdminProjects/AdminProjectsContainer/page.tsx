"use client";
import { type Project } from "@prisma/client";
import AdminProjectCard from "../AdminProjectCard/page";

export default function AdminProjectsContainer({
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
            <div
              key={project.id}
              className="flex w-full items-center justify-center text-lg max-lg:flex-col"
            >
              <AdminProjectCard project={project} />
              {nextProject ? <AdminProjectCard project={nextProject} /> : null}
            </div>
          );
        }
      })}
    </div>
  );
}
