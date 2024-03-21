import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import ProjectsContainer from "./ProjectsContainer/page";

export default async function Portfolio() {
  noStore();
  const projects = await api.project.getAll.query();
  return (
    <section
      className="flex h-fit w-full items-center justify-center py-36"
      id="portfolio"
    >
      <div>
        <ProjectsContainer projects={projects} />
      </div>
    </section>
  );
}
