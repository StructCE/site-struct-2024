import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import { ProjectCard } from "../../landing/portfolio/projectCard";

export async function AdminPortfolio() {
  noStore();
  const projects = await api.project.getAll.query();
  return (
    <section className="flex h-fit w-full items-center justify-center">
      <div className="m-2 items-center justify-center sm:m-4">
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            const nextProject = projects[index + 1];
            return (
              <div
                key={project.id}
                className="flex w-full items-center justify-center text-lg max-lg:flex-col"
              >
                <ProjectCard project={project} admin={true} />
                {nextProject && (
                  <ProjectCard project={nextProject} admin={true} />
                )}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
