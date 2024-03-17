"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import MemberContainer from "../Members/MemberCard/page";

type projectWithMembers = {
  name: string | undefined;
  description: string | undefined;
  link: string | undefined;
  logoPublicId: string | undefined;
  members:
    | {
        name: string;
        logoPublicId: string;
        role: string;
      }[]
    | undefined;
};

export default function ProjectsPage({
  projectWithMembers,
}: {
  projectWithMembers: projectWithMembers;
}) {
  return (
    <section className="flex items-center bg-fundo-0 pt-28">
      <div className="flex h-fit w-full flex-col items-center justify-center">
        {/* Project Card */}
        <div className="m-10 flex w-[1280px] items-center justify-center gap-7 rounded-[16px] bg-fundo-1 p-10 max-[1440px]:w-[580px] max-[1440px]:flex-col max-[830px]:w-auto max-[830px]:p-7">
          <div className="flex h-fit w-[590px] flex-col max-[1440px]:w-full">
            <p className="text-start font-oxanium text-[48px] font-bold text-struct-3 max-[1440px]:text-[40px] max-[830px]:text-[20px]">
              {projectWithMembers.name
                ? projectWithMembers.name
                : "Nome do Projeto"}
            </p>
            <p className="h-fit text-start font-nunito text-[20px] max-[1440px]:text-justify max-[1440px]:text-[16px] max-[830px]:text-[8px]">
              {projectWithMembers.description
                ? projectWithMembers.description
                : "Descrição do Projeto"}
            </p>
          </div>
          <Link
            href={projectWithMembers.link ? projectWithMembers.link : ""}
            className="transition ease-in hover:scale-[1.01] hover:shadow-[0_0_40px_10px_rgba(0,0,0,0.2)]"
          >
            <CldImage
              width="580"
              height="320"
              src={
                projectWithMembers.logoPublicId
                  ? projectWithMembers.logoPublicId
                  : ""
              }
              alt="Imagem do Projeto"
              className="rounded-[8px] bg-struct-7"
            />
          </Link>
        </div>

        {/* Members Card */}
        <div className="mb-20 mt-14 flex h-fit w-full flex-col items-center justify-center">
          <p className="text-center font-oxanium text-[36px] font-bold text-struct-3 max-[1440px]:text-[32px] max-[830px]:text-[20px]">
            Membros Envolvidos
          </p>
          <div className="flex h-fit w-[1300px] flex-wrap items-center justify-center max-[1440px]:w-[500px] max-[830px]:w-[280px]">
            {projectWithMembers.members?.map((member) => {
              return <MemberContainer key={member.name} member={member} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
