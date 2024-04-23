import { api } from "~/trpc/server";
import { permanentRedirect } from "next/navigation";
import { ProjectCard } from "./_components";
import { MemberCard } from "~/app/membros/_components";

export default async function Projects({ params }: { params: { id: string } }) {
  const projectWithMembers = await api.project.getProjectAndMembers.query({
    id: params.id,
  });
  return (
    <section className="flex w-full items-center bg-fundo-0 pt-28 text-struct-7 selection:bg-struct-5">
      {projectWithMembers ? (
        <div className="flex h-fit w-full flex-col items-center justify-center">
          <ProjectCard project={projectWithMembers.project} />
          <div className="mb-20 mt-14 flex h-fit w-full flex-col items-center justify-center">
            <p className="text-center font-oxanium text-[36px] font-bold text-struct-3 max-[1440px]:text-[32px] max-[830px]:text-[20px]">
              Membros Envolvidos
            </p>
            <div className="flex h-fit w-[1300px] flex-wrap items-center justify-center max-[1440px]:w-[500px] max-[830px]:w-[280px]">
              {projectWithMembers.members?.map((member) => {
                return <MemberCard key={member.name} member={member} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        permanentRedirect("/not-found")
      )}
    </section>
  );
}
