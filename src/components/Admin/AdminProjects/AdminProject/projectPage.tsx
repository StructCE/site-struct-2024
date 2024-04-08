import MemberCard from "~/components/Members/MemberCard/memberCard";
import EditMember from "../../AdminMembers/AdminMemberCard/editMember";
import RemoveMember from "../../AdminMembers/AdminMemberCard/removeMember";
import EditProject from "./editProject";
import RemoveProject from "./removeProject";
import { Toaster } from "react-hot-toast";
import { type ProjectWithMembers } from "~/server/api/routers/project";
import ProjectCard from "~/components/Projects/ProjectCard/projectCard";

export default function ProjectPage({
  projectWithMembers,
}: {
  projectWithMembers: ProjectWithMembers;
}) {
  return (
    <section className="flex items-center bg-fundo-0 pt-28">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="flex h-fit w-full flex-col items-center justify-center">
        {/* Project Card */}
        <ProjectCard project={projectWithMembers.project}>
          <div className="mb-6 flex justify-center gap-8">
            <EditProject project={projectWithMembers.project} />
            <RemoveProject project={projectWithMembers.project} />
          </div>
        </ProjectCard>
        {/* Members Card */}
        <div className="mb-20 mt-14 flex h-fit w-full flex-col items-center justify-center">
          <p className="text-center font-oxanium text-[36px] font-bold text-struct-3 max-[1440px]:text-[32px] max-[830px]:text-[20px]">
            Membros Envolvidos
          </p>
          <div className="flex h-fit w-[1300px] flex-wrap items-center justify-center max-[1440px]:w-[500px] max-[830px]:w-[280px]">
            {projectWithMembers.members.map((member) => {
              return (
                <MemberCard member={member}>
                    <div className="absolute w-fit flex justify-center items-center top-36 right-0 gap-2">
                      <EditMember member={member}/>
                      <RemoveMember member={member}/>
                    </div>
                </MemberCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
