import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";
import {
  ProjectCard,
  ProjectCardBackground,
  ProjectCardDescription,
  ProjectCardTitle,
} from "./projectCard";
import { ProjectsContainer } from "./projectsContainer";

export async function Projects({ admin = false }: { admin?: boolean }) {
  noStore();
  const projectsData = await api.project.getAll.query();

  return (
    <ProjectsContainer>
      {projectsData.map((project) => (
        <ProjectCard key={project.id}>
          <ProjectCardBackground
            href={
              (admin ? "/dashboard/projetosAdm/projeto/" : "/projetos/") +
              project.id
            }
            imgSrc={project.logoPublicId}
          >
            <ProjectCardTitle>{project.name}</ProjectCardTitle>
            <ProjectCardDescription>website</ProjectCardDescription>
          </ProjectCardBackground>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}
