"use client";
import { Cog, Lightbulb, ScreenShare, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <>
      <section
        id="servicos"
        className="m-0 flex w-full skew-y-3 items-center justify-center bg-fundo-2 p-0 lg:h-[1000px]"
      >
        <div className="-skew-y-3 py-24">
          {/* titulo */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
              <span className="text-struct-3">{"{ "}</span>Serviços
              <span className="text-struct-3">{" }"}</span>
            </h2>
            <p className="my-2 w-[32px] border-b-2 border-struct-1 sm:my-3 sm:w-[64px] lg:my-5 lg:w-[96px]"></p>
            <p className="font-nunito text-[8px] sm:text-[12px] lg:text-[16px]">
              Conheça como podemos ajudar seu negócio!
            </p>
          </div>
          {/* caixas */}
          <div className="my-8 grid w-[280px] grid-cols-1 gap-4 font-nunito sm:w-[400px] sm:gap-6 lg:w-[762px] lg:grid-cols-2 lg:gap-8">
            <div className="h-[165px] w-[280px] rounded-lg bg-fundo-3 sm:h-[210px] sm:w-[400px] lg:h-[252px] lg:w-[365px]">
              <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                <ScreenShare
                  color="#f8f8ff"
                  className="mx-1.5 my-1.5 h-[18px] w-[18px] sm:mx-1.5 sm:my-2 sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-2.5 lg:h-[28px] lg:w-[28px]"
                />
                <h3 className="text-[18px] font-bold leading-relaxed sm:text-[26px] lg:text-[32px]">
                  Websites
                </h3>
              </div>
              <p className="mx-6 text-[11px] sm:mx-7 sm:text-sm lg:mx-8">
                Desenvolvemos websites modernos e responsivos que não apenas
                cativam visualmente, mas também oferecem uma experiência de
                usuário intuitiva. Criamos sites personalizados que refletem a
                identidade única de cada cliente.
              </p>
            </div>
            <div className="h-[165px] w-[280px] rounded-lg bg-fundo-3 sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]">
              <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                <Cog
                  color="#f8f8ff"
                  className="mx-1.5 my-1 h-[18px] w-[18px] sm:mx-1.5 sm:my-[7px] sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-2.5 lg:h-[28px] lg:w-[28px]"
                />
                <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                  Sistemas Web
                </h3>
              </div>
              <p className="mx-6 text-[11px] sm:mx-7 sm:text-sm lg:mx-8">
                Desenvolvemos sistemas web sob medida para atender às
                necessidades específicas do seu negócio. Otimize seus processos
                internos e melhore a eficiência operacional com nossos sistemas
                web personalizados.
              </p>
            </div>
            <div className="h-[165px] w-[280px] rounded-lg bg-fundo-3 sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]">
              <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                <Smartphone
                  color="#f8f8ff"
                  className="mx-1.5 my-1 h-[18px] w-[18px] sm:mx-1.5 sm:my-[7px] sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-2.5 lg:h-[28px] lg:w-[28px]"
                />
                <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                  Aplicativos
                </h3>
              </div>
              <p className="mx-6 text-[11px] sm:mx-7 sm:text-sm lg:mx-8">
                Desenvolvemos soluções móveis intuitivas e envolventes para iOS
                e Android. Transformamos conceitos em realidade digital,
                proporcionando uma experiência única aos usuários.
              </p>
            </div>
            <div className="h-[165px] w-[280px] rounded-lg bg-fundo-3 sm:h-[200px] sm:w-[400px] lg:h-[252px] lg:w-[365px]">
              <div className="mx-5 mb-1 mt-3 flex sm:mx-5 sm:mb-1.5 sm:mt-5 lg:mx-6 lg:mb-2 lg:mt-6">
                <Lightbulb
                  color="#f8f8ff"
                  className="mx-1.5 my-1 h-[18px] w-[18px] sm:mx-1.5 sm:my-[7px] sm:h-[24px] sm:w-[24px] lg:mx-1.5 lg:my-2.5 lg:h-[28px] lg:w-[28px]"
                />
                <h3 className="text-[18px] font-bold sm:text-[26px] lg:text-[32px]">
                  Consultoria
                </h3>
              </div>
              <p className="mx-6 text-[11px] sm:mx-7 sm:text-sm lg:mx-8">
                Oferecemos orientação especializada em estratégias digitais,
                arquitetura de informação, e otimização de desempenho. Visamos
                impulsionar o sucesso do seu empreendimento online, fornecendo
                insights valiosos e soluções sob medida para seus desafios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
