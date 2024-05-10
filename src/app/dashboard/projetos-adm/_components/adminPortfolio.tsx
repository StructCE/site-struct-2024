import { unstable_noStore as noStore } from "next/cache";
import {
  ProjectCard,
  ProjectCardBackground,
  ProjectCardDescription,
  ProjectCardTitle,
} from "~/app/(landing)/_components/portfolio/projects/projectCard";
import { api } from "~/trpc/server";

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
                <ProjectCard>
                  <ProjectCardBackground
                    href={`/projetos/${project.id}`}
                    imgSrc={project.logoPublicId}
                  >
                    <ProjectCardTitle>{project.name}</ProjectCardTitle>
                    <ProjectCardDescription>Website</ProjectCardDescription>
                  </ProjectCardBackground>
                </ProjectCard>
                {nextProject && (
                  <ProjectCard>
                    <ProjectCardBackground
                      href={`/projetos/${nextProject.id}`}
                      imgSrc={nextProject.logoPublicId}
                    >
                      <ProjectCardTitle>{nextProject.name}</ProjectCardTitle>
                      <ProjectCardDescription>Website</ProjectCardDescription>
                    </ProjectCardBackground>
                  </ProjectCard>
                )}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
