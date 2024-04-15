import ProjectPage from "~/components/Admin/AdminProjects/AdminProject/projectPage";
import { api } from "~/trpc/server";
import { permanentRedirect } from "next/navigation";

export default async function Projects({ params }: { params: { id: string } }) {
  const projectWithMembers = await api.project.getProjectAndMembers.query({
    id: params.id,
  });
  return (
    <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
      {projectWithMembers? (
        <ProjectPage projectWithMembers={projectWithMembers} />
      )
      :
      permanentRedirect("/not-found")
      }
    </div>
  );
}
