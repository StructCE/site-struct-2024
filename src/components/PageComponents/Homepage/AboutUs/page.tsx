"use client";
import Link from "next/link";
import { api } from "~/trpc/react";
import PartnerCard from "./PartnerCard/page";

export default function Home() {
  const { data } = api.partner.getAll.useQuery();

  console.log(data);

  return (
    <>
      <section className="m-0 flex h-[650px] w-full skew-y-3 flex-col items-center justify-center gap-9 bg-fundo-2 p-0 font-nunito lg:h-[1000px]">
        <div className="flex -skew-y-3 flex-col gap-9 py-24">
          {/* Quem Somos */}
          <div className="flex flex-col gap-8">
            <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
              <span className="text-struct-3">{"{ "}</span>Quem Somos
              <span className="text-struct-3">{" }"}</span>
            </h2>
            <div className="flex w-[1024px] rounded-2xl bg-fundo-3">
              {/* Texto e números */}
              <div className="m-8 mr-4 w-[523px]">
                {/* Texto */}
                <p className="mb-8">
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
                <div className="flex justify-center gap-8 text-[24px] font-normal">
                  <p className="flex w-[130px] flex-col text-center">
                    <span className="font-oxanium text-[96px] font-semibold leading-[90px] text-struct-1">
                      55
                    </span>{" "}
                    projetos concluídos
                  </p>
                  <p className="flex w-[130px] flex-col text-center">
                    <span className="font-oxanium text-[96px] font-semibold leading-[90px] text-struct-1">
                      9
                    </span>{" "}
                    anos de atividade
                  </p>
                  <p className="flex w-[130px] flex-col text-center">
                    <span className="font-oxanium text-[96px] font-semibold leading-[90px] text-struct-1">
                      27
                    </span>{" "}
                    membros ativos
                  </p>
                </div>
              </div>
              {/* MVV */}
              <div className="m-8 ml-4 w-[405px] rounded-lg px-8 shadow-[0_1px_12px_rgb(8,20,38,0.75)]">
                {/* Título */}
                <h4 className="mb-2 mt-4 flex justify-center font-oxanium text-[24px] font-bold text-struct-2">
                  MVV
                </h4>
                {/* Missão, Valores e Visão */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div>
                      <h5 className="font-oxanium text-[22px] font-semibold">
                        <span className="text-struct-2">M</span>issão
                      </h5>
                      <p className="text-[12px]">
                        Formar estudantes mais profissionais e mais capacitados
                        por meio da vivência empresarial.
                      </p>
                    </div>
                    <div className="my-2">
                      <h5 className="font-oxanium text-[22px] font-semibold">
                        <span className="text-struct-2">V</span>isão
                      </h5>
                      <p className="text-[12px]">
                        Proporcionar os melhores produtos e experiência ao
                        cliente. Fortalecer a representatividade da EC no
                        ambiente acadêmico e no mercado.
                      </p>
                    </div>
                  </div>
                  <div className="px-4">
                    <div>
                      <h5 className="font-oxanium text-[22px] font-semibold">
                        <span className="text-struct-2">V</span>alores
                      </h5>
                      <div className="flex flex-col gap-2 p-2 font-bold">
                        <p>
                          <span className="font-oxanium text-struct-2">S</span>
                          inergia
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-2">T</span>
                          ransparência
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-2">R</span>
                          espeito
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-2">U</span>
                          nião
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-2">C</span>
                          ompromisso
                        </p>
                        <p>
                          <span className="font-oxanium text-struct-2">T</span>
                          ransformadora
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Botão */}
                <div className="m-2 flex items-center justify-center">
                  <Link
                    href="/membros"
                    className="border-b-2 border-struct-3 py-1 font-oxanium text-[24px] font-semibold leading-[20px] text-struct-3"
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
              <div className="flex max-w-[272px] flex-wrap gap-4 rounded-xl bg-fundo-3 p-4 sm:max-w-[464px] sm:gap-8 sm:p-8 lg:max-w-[896px]">
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
