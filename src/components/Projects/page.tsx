"use client"
import { CldImage } from "next-cloudinary";
import MemberContainer from "../Members/MemberCard/page";
import Link from "next/link";

type projectWithMembers = {
  name: string | undefined;
  description: string | undefined;
  link: string | undefined;
  logoPublicId: string | undefined;
  members: {
      name: string;
      logoPublicId: string;
      role: string;
  }[] | undefined;
}

export default function ProjectsPage( { projectWithMembers }: { projectWithMembers: projectWithMembers }) {
  return (
    <section className="pt-28 flex items-center bg-fundo-0">
      <div className="w-full h-fit flex flex-col items-center justify-center">
        {/* Project Card */}
        <div className="m-10 p-10 gap-7 w-[1280px] bg-fundo-1 flex rounded-[16px] justify-center items-center max-[1440px]:flex-col max-[1440px]:w-[580px] max-[830px]:w-auto max-[830px]:p-7">
          <div className="w-[590px] h-fit flex flex-col max-[1440px]:w-full">
            <p className="text-start font-oxanium font-bold text-[48px] text-struct-3 max-[1440px]:text-[40px] max-[830px]:text-[20px]">
              {projectWithMembers.name? projectWithMembers.name : "Nome do Projeto"}
            </p>
            <p className="h-fit text-start font-nunito text-[20px] max-[1440px]:text-[16px] max-[830px]:text-[8px] max-[1440px]:text-justify">
              {projectWithMembers.description? projectWithMembers.description : "Descrição do Projeto"}
            </p>
          </div>
          <Link href={projectWithMembers.link? projectWithMembers.link : ""} className="hover:shadow-black hover:shadow-2xl">
            <CldImage
              width="580"
              height= "320"
              src={projectWithMembers.logoPublicId? projectWithMembers.logoPublicId : ""}
              alt="Imagem do Projeto"
              className="rounded-[8px] bg-struct-7"
            />
          </Link>
        </div>

        {/* Members Card */}
        <div className="mt-14 mb-20 flex flex-col items-center justify-center w-full h-fit">
          <p className="text-center font-oxanium font-bold text-[36px] text-struct-3 max-[1440px]:text-[32px] max-[830px]:text-[20px]">
            Membros Envolvidos
          </p>
          <div className="flex flex-wrap h-fit w-[1300px] items-center justify-center max-[1440px]:w-[500px] max-[830px]:w-[280px]">
            {projectWithMembers.members?.map( ( member ) => {
              return (
                <MemberContainer key={ member.name } member={ member } />
              )
            })}
          </div>
        </div>
      </div>
    </section>
) 
}
