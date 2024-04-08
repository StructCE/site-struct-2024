import { type Project } from "~/server/api/routers/project"; 
import Link from "next/link";
import CloudinaryImg from "~/components/ui/cloudinaryImage";

export default function ProjectCard({ admin = false, project }: { project: Project, admin?: boolean }) {
  return (
    <div className="relative mx-4 my-2 items-center justify-center transition delay-75 ease-in hover:scale-[1.02] hover:shadow-[0_0_40px_10px_rgba(0,0,0,0.2)] sm:m-3 lg:m-5">
      <CloudinaryImg
        width="460"
        height="250"
        crop="fill"
        src={project.logoPublicId? project.logoPublicId : ""}
        alt="Imagem do Projeto"
        className="rounded-[8px]"
      />
      <Link
        href={(admin? "/dashboard/projetosAdm/projeto/": "/projetos/") + project.id}
        target="_blank"
        className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-[8px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:duration-700"
      >
        <p className="font-oxanium text-3xl font-bold max-[420px]:text-[1.5rem]">
          {" "}
          {project.name}{" "}
        </p>
        <p className="text-1xl font-nunito text-[#d3d3d4] max-[420px]:text-[1rem]">
          website
        </p>
      </Link>
    </div>
  );
}
