import ProjectsPage from "~/components/Projects/page";
import { api } from "~/trpc/server";

export default async function Projects( { params }: { params: { name: string } } ) {
  const projectWithMembers = await api.project.getProjectAndMembers.query( { name: params.name } );
  return (
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <ProjectsPage projectWithMembers={ projectWithMembers }/>
      </div>
  );
}
