import { api } from "~/trpc/server";
import { Statistic } from "./statistc";
import { getYearsActive } from "~/lib/getYearsActive";
import { unstable_noStore as noStore } from "next/cache";

function CompanyInfoContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="m-3 mr-4 w-[256px] sm:m-8 sm:w-[523px]">{children}</div>
  );
}

function CompanyInfoStats({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-center gap-4 text-[10px] font-normal sm:gap-8 sm:text-[24px]">
      {children}
    </div>
  );
}

function CompanyInfoText({ children }: React.PropsWithChildren) {
  return <p className="mb-4 text-[10px] sm:mb-8 sm:text-base">{children}</p>;
}

export async function CompanyInfo() {
  noStore();
  const countProjects = await api.project.countProjects.query();
  const yearsActive = getYearsActive();
  const countActiveMembers =
    await api.directorship.countDirectiorshipMembers.query();

  return (
    <CompanyInfoContainer>
      <CompanyInfoText>
        A Struct é a Empresa Junior (EJ) do curso Engenharia de Computação da
        Universidade de Brasília. Desde 2014, buscamos proporcionar soluções com
        as tecnologias mais atualizadas no mercado, prezando sempre pela
        qualidade e satisfação do cliente.
        <br />
        <br />
        Somos uma empresa criada, gerida e mantida por alunos universitários,
        com o objetivo de ter um ambiente que provê uma vivência empresarial aos
        estudantes.
      </CompanyInfoText>
      <CompanyInfoStats>
        <Statistic number={countProjects} description="projetos concluidos" />
        <Statistic number={yearsActive} description="anos de atividade" />
        <Statistic number={countActiveMembers} description="membros ativos" />
      </CompanyInfoStats>
    </CompanyInfoContainer>
  );
}
