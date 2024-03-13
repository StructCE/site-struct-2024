"use client";
import Link from "next/link";
import { api } from "~/trpc/react";
import PartnerCard from "./PartnerCard/page";

export default function Home() {
  const { data } = api.partner.getAll.useQuery();

  const countProjects = api.project.countProjects.useQuery();
  const countActiveMembers =
    api.directorship.countDirectiorshipMembers.useQuery();

  const date = new Date();
  const YearsActive =
    (date.getDate() >= 20 && date.getMonth() + 1 === 11) ||
    date.getMonth() + 1 > 11
      ? date.getFullYear() - 2014
      : date.getFullYear() - 2014 - 1;

  return (
    <>
      <section className="m-0 flex w-full skew-y-3 flex-col items-center justify-center gap-9 bg-fundo-2 p-0 font-nunito lg:h-[1000px]">
        <div className="flex -skew-y-3 flex-col gap-9 py-12 sm:py-24">
          {/* Quem Somos */}
          <div className="flex flex-col gap-8">
            <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
              <span className="text-struct-3">{"{ "}</span>Quem Somos
              <span className="text-struct-3">{" }"}</span>
            </h2>
            {/* Caixa Quem Somos */}
            <div className="flex w-[280px] flex-col rounded-2xl bg-fundo-3 sm:w-[580px] sm:justify-center lg:w-[1024px] lg:flex-row">
              {/* Texto e números */}
              <div className="m-3 mr-4 w-[256px] sm:m-8 sm:w-[523px]">
                {/* Texto */}
                <p className="mb-3 text-[8px] sm:mb-8 sm:text-base">
                  A Struct é a Empresa Junior (EJ) do curso Engenharia de
                  Computação da Universidade de Brasília. Desde 2014, buscamos
                  proporcionar soluções com as tecnologias mais atualizadas no
                  mercado, prezando sempre pela qualidade e satisfação do
                  cliente.
                  <br></br>
                  <br></br>
                  Somos uma empresa criada, gerida e mantida por alunos
                  universitários, com o objetivo de ter um ambiente que provê
                  uma vivência empresarial aos estudantes.
                </p>
                {/* Números */}
                <div className="flex justify-center gap-4 text-[10px] font-normal sm:gap-8 sm:text-[24px]">
                  <p className="flex w-[64px] flex-col text-center sm:w-[130px]">
                    <span className="font-oxanium text-[48px] font-semibold leading-[45px] text-struct-1 sm:text-[96px] sm:leading-[90px]">
                      {countProjects.data}
                    </span>{" "}
                    projetos concluídos
                  </p>
                  <p className="flex w-[64px] flex-col text-center sm:w-[130px]">
                    <span className="font-oxanium text-[48px] font-semibold leading-[45px] text-struct-1 sm:text-[96px] sm:leading-[90px]">
                      {YearsActive}
                    </span>{" "}
                    anos de atividade
                  </p>
                  <p className="flex w-[64px] flex-col text-center sm:w-[130px]">
                    <span className="font-oxanium text-[48px] font-semibold leading-[45px] text-struct-1 sm:text-[96px] sm:leading-[90px]">
                      {countActiveMembers.data}
                    </span>{" "}
                    membros ativos
                  </p>
                </div>
              </div>
              {/* MVV */}
              <div className="m-3 rounded-lg px-8 shadow-[0_1px_12px_rgb(8,20,38,0.75)] sm:mx-auto sm:mb-6 sm:w-[405px] lg:m-8 lg:ml-4">
                {/* Título */}
                <h4 className="mb-2 mt-3 flex justify-center font-oxanium text-[20px] font-bold text-struct-2 sm:mt-4 sm:text-[24px]">
                  MVV
                </h4>
                {/* Missão, Valores e Visão */}
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4">
                  <div>
                    <div className="text-center sm:text-left">
                      <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
                        <span className="text-struct-2">M</span>issão
                      </h5>
                      <p className="text-[10px] sm:text-[12px]">
                        Formar estudantes mais profissionais e mais capacitados
                        por meio da vivência empresarial.
                      </p>
                    </div>
                    <div className="my-2 text-center sm:text-left">
                      <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
                        <span className="text-struct-2">V</span>isão
                      </h5>
                      <p className="text-[10px] sm:text-left sm:text-[12px]">
                        Proporcionar os melhores produtos e experiência ao
                        cliente. Fortalecer a representatividade da EC no
                        ambiente acadêmico e no mercado.
                      </p>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="text-center sm:text-left">
                      <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
                        <span className="text-struct-2">V</span>alores
                      </h5>
                      <div className="flex flex-col gap-1 p-2 text-[12px] font-bold sm:gap-2 sm:text-[16px]">
                        <p>
                          <span className="font-oxanium text-struct-3">S</span>
                          inergia
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-3">T</span>
                          ransparência
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-3">R</span>
                          espeito
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-3">U</span>
                          nião
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-3">C</span>
                          ompromisso
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-3">T</span>
                          ransformadora
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Botão */}
                <div className="m-2 mb-4 flex items-center justify-center">
                  <Link
                    href="/members"
                    className="border-animation border-b-[1px] border-struct-1 font-oxanium text-[14px] font-semibold leading-[16px] text-struct-3 sm:border-b-2 sm:py-1 sm:text-[24px] sm:leading-[20px]"
                  >
                    conheça nossos membros
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Parceiros */}
          <div className="flex flex-col gap-8">
            <h3 className="text-center font-oxanium text-[20px] font-bold leading-[25px] sm:text-[24px] sm:leading-[30px] lg:text-[40px] lg:leading-[50px]">
              <span className="text-struct-3">{"{ "}</span>Parceiros
              <span className="text-struct-3">{" }"}</span>
            </h3>
            <div className="flex justify-center">
              <div className="flex max-w-[256px] flex-wrap gap-6 rounded-xl bg-fundo-3 p-6 sm:max-w-[464px] sm:gap-8 sm:p-8 lg:max-w-[896px]">
                {data?.map((partner) => (
                  <PartnerCard
                    key={partner.id}
                    images={{
                      url: partner.logoPublicId,
                      alt: partner.name,
                      link: partner.link,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
