import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import ProjectsContainer from "./ProjectsContainer/page";

export default async function Portfolio() {
  noStore();
  const projects = await api.project.getAll.query();
  return (
    <section
      className="flex h-fit w-full skew-y-3 items-center justify-center bg-gradient-to-br from-fundo-0 to-fundo-3 py-16 sm:py-36"
      id="portfolio"
    >
      <div className="-skew-y-3">
        <ProjectsContainer projects={projects} />
      </div>
    </section>
  );
}
