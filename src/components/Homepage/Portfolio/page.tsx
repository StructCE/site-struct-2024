import { api } from "~/trpc/server";
import ProjectsContainer from "./ProjectsContainer/page";
import { unstable_noStore as noStore } from "next/cache";

export default async function Portfolio() {
  noStore();
  const projects = await api.project.getAll.query();
  return (
    <section
      className="flex h-fit w-full items-center justify-center py-36"
      id="portfolio"
    >
      <div>
        {/* titulo */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
            <span className="text-[#2DA2FF]">{"{ "}</span>Portfólio
            <span className="text-[#2DA2FF]">{" }"}</span>
          </h2>
          <p className="my-2 w-[32px] border-b-2 border-[#FD8D4B] sm:my-3 sm:w-[64px] lg:my-5 lg:w-[96px]"></p>
          <p className="font-nunito text-[8px] sm:text-[12px] lg:text-[16px]">
            Explore alguns dos nossos projetos!
          </p>
        </div>
        {/* projetos */}
        <ProjectsContainer projects={projects} />
      </div>
    </section>
  );
}
