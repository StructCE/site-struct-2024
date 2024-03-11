import { Project } from "@prisma/client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function ProjectContainer({project} : {project:Project}) {
  return (
    <div className="m-5 relative items-center justify-center">
      <CldImage
        width="460"
        height="250"
        src={project.logoPublicId}
        alt="Imagem do Projeto"
        className="rounded-[8px]"
        />
      <Link href={`/projects/${project.id}`} target="_blank" className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 rounded-[8px] hover:duration-700">
        <p className="font-nunito text-3xl max-[420px]:text-[1.5rem]"> {project.name} </p>
        <p className="font-nunito text-1xl text-[#d3d3d4] max-[420px]:text-[1rem]">website</p>
      </Link>
    </div>
  )
}