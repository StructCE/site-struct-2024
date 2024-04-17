import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";
import {
  ProjectCard,
  ProjectCardBackground,
  ProjectCardDescription,
  ProjectCardTitle,
} from "./projectCard";

export async function Projects() {
  noStore();
  const projectsData = await api.project.getAll.query();

  return (
    <div className="flex flex-col flex-wrap items-center justify-center lg:w-[1024px] lg:flex-row">
      {projectsData.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectCardBackground
            href={`/projetos/${project.id}`}
            imgSrc={project.logoPublicId}
          >
            <ProjectCardTitle>{project.name}</ProjectCardTitle>
            <ProjectCardDescription>website</ProjectCardDescription>
          </ProjectCardBackground>
        </ProjectCard>
      ))}
    </div>
  );
}
