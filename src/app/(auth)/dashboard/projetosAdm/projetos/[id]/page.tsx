import ProjectsPage from "~/components/Admin/AdminProjects/Projects/page";
import { api } from "~/trpc/server";

export default async function Projects({ params }: { params: { id: string } }) {
  const projectWithMembers = await api.project.getProjectAndMembers.query({
    id: params.id,
  });
  return (
    <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
      <ProjectsPage projectWithMembers={projectWithMembers} />
    </div>
  );
}
