"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CompanyInformationStatistic } from "./CompanyStats";

export default function WhoWeAreCard({
  countProjects,
  yearsActive,
  countActiveMembers,
}: {
  countProjects: number;
  yearsActive: number;
  countActiveMembers: number;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className=" [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] "
      >
        <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
          Quem Somos
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", y: "var(--y-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", y: "var(--y-to)" }}
        exit={{ opacity: "var(--opacity-from)", y: "var(--y-to)" }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className=" [--opacity-from:1%] [--opacity-to:100%] [--y-from:75px] [--y-to:0px] "
      >
        {/* Caixa Quem Somos */}
        <div className="flex w-[280px] flex-col rounded-2xl bg-fundo-1/50 sm:w-[580px] sm:justify-center lg:w-[1024px] lg:flex-row">
          {/* Texto e números */}
          <div className="m-3 mr-4 w-[256px] sm:m-8 sm:w-[523px]">
            {/* Texto */}
            <p className="mb-4 text-[10px] sm:mb-8 sm:text-base">
              A Struct é a Empresa Junior (EJ) do curso Engenharia de Computação
              da Universidade de Brasília. Desde 2014, buscamos proporcionar
              soluções com as tecnologias mais atualizadas no mercado, prezando
              sempre pela qualidade e satisfação do cliente.
              <br></br>
              <br></br>
              Somos uma empresa criada, gerida e mantida por alunos
              universitários, com o objetivo de ter um ambiente que provê uma
              vivência empresarial aos estudantes.
            </p>
            {/* Estatísticas */}
            <div className="flex justify-center gap-4 text-[10px] font-normal sm:gap-8 sm:text-[24px]">
              <CompanyInformationStatistic
                statistic={countProjects}
                description="projetos concluidos"
              />
              <CompanyInformationStatistic
                statistic={yearsActive}
                description="anos de atividade"
              />
              <CompanyInformationStatistic
                statistic={countActiveMembers}
                description="membros ativos"
              />
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
                  <p className="text-[11px] sm:text-[12px]">
                    Formar estudantes mais profissionais e mais capacitados por
                    meio da vivência empresarial.
                  </p>
                </div>
                <div className="my-2 text-center sm:text-left">
                  <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
                    <span className="text-struct-2">V</span>isão
                  </h5>
                  <p className="text-[11px] sm:text-left sm:text-[12px]">
                    Proporcionar os melhores produtos e experiência ao cliente.
                    Fortalecer a representatividade da EC no ambiente acadêmico
                    e no mercado.
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
                href="/membros"
                className="mt-3 self-start bg-fundo-3 px-2 py-1 font-oxanium text-[12px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-1 hover:text-struct-1 hover:shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] active:border-none sm:rounded-md sm:px-4 sm:text-[20px]"
              >
                conheça nossos membros
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
