import { type Project } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function ProjectContainer({ project }: { project: Project }) {
  return (
    <div className="relative m-5 items-center justify-center">
      <CldImage
        width="460"
        height="250"
        src={project.logoPublicId}
        alt="Imagem do Projeto"
        className="rounded-[8px]"
      />
      <Link
        href={`/projects/${project.id}`}
        target="_blank"
        className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-[8px] bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:duration-700"
      >
        <p className="font-nunito text-3xl max-[420px]:text-[1.5rem]">
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
