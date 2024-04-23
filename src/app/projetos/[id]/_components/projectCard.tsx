import { type ProjectWithMembers } from "~/server/api/routers/project";
import Link from "next/link";
import CloudinaryImg from "~/components/ui/cloudinaryImage";

export function ProjectCard({
  project,
  children,
}: {
  project: ProjectWithMembers["project"];
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="m-10 mb-6 flex w-[1280px] items-center justify-center gap-7 rounded-[16px] bg-fundo-1 p-10 max-[1440px]:w-[580px] max-[1440px]:flex-col max-[830px]:w-auto max-[830px]:p-7">
        <div className="flex h-fit w-[590px] flex-col max-[1440px]:w-full">
          <p className="text-start font-oxanium text-[48px] font-bold text-struct-3 max-[1440px]:text-[40px] max-[830px]:text-[20px]">
            {project.name}
          </p>
          <p className="h-fit text-start font-nunito text-[20px] max-[1440px]:text-justify max-[1440px]:text-[16px] max-[830px]:text-[8px]">
            {project.description}
          </p>
        </div>
        <Link
          href={project.link}
          className="transition ease-in hover:scale-[1.01] hover:shadow-[0_0_40px_10px_rgba(0,0,0,0.2)]"
        >
          <CloudinaryImg
            width="580"
            height="320"
            src={project.logoPublicId ? project.logoPublicId : ""}
            alt="Imagem do Projeto"
            className="rounded-[8px] bg-struct-7"
          />
        </Link>
      </div>
      {children}
    </>
  );
}
