"use client";
import { Cog, Lightbulb, ScreenShare, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <>
      <div className="z-2 m-0 flex h-[650px] w-full items-center justify-center p-0 lg:h-[1000px]">
        <div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-oxanium text-[48px] font-bold leading-[60px]">
              <span className="text-[#2DA2FF]">{"{ "}</span>Serviços
              <span className="text-[#2DA2FF]">{" }"}</span>
            </h2>
            <p className="my-5 w-[96px] border-b-2 border-[#FD8D4B]"></p>
            <p className="font-nunito text-[16px]">
              Conheça como podemos ajudar seu negócio!
            </p>
          </div>
          <div className="m-8 grid w-[762px] grid-cols-2 gap-8 font-nunito">
            <div className="h-[252px] w-[365px] rounded-lg bg-[#0A1D38]">
              <div className="mx-6 mb-2 mt-6 flex text-[32px] font-bold">
                <ScreenShare size={28} color="#f8f8ff" className="m-2" />
                <h3>Websites</h3>
              </div>
              <p className="mx-8 text-sm">
                Desenvolvemos websites modernos e responsivos que não apenas
                cativam visualmente, mas também oferecem uma experiência de
                usuário intuitiva. Criamos sites personalizados que refletem a
                identidade única de cada cliente.
              </p>
            </div>
            <div className="h-[252px] w-[365px] rounded-lg bg-[#0A1D38]">
              <div className="mx-6 mb-2 mt-6 flex text-[32px] font-bold">
                <Cog size={28} color="#f8f8ff" className="m-2" />
                <h3>Sistemas Web</h3>
              </div>
              <p className="mx-8 text-sm">
                Desenvolvemos sistemas web sob medida para atender às
                necessidades específicas do seu negócio. Otimize seus processos
                internos e melhore a eficiência operacional com nossos sistemas
                web personalizados.
              </p>
            </div>
            <div className="h-[252px] w-[365px] rounded-lg bg-[#0A1D38]">
              <div className="mx-6 mb-2 mt-6 flex text-[32px] font-bold">
                <Smartphone size={28} color="#f8f8ff" className="m-2" />
                <h3>Aplicativos</h3>
              </div>
              <p className="mx-8 text-sm">
                Desenvolvemos soluções móveis intuitivas e envolventes para iOS
                e Android. Transformamos conceitos em realidade digital,
                proporcionando uma experiência única aos usuários.
              </p>
            </div>
            <div className="h-[252px] w-[365px] rounded-lg bg-[#0A1D38]">
              <div className="mx-6 mb-2 mt-6 flex text-[32px] font-bold">
                <Lightbulb size={28} color="#f8f8ff" className="m-2" />
                <h3>Consultoria</h3>
              </div>
              <p className="mx-8 text-sm">
                Oferecemos orientação especializada em estratégias digitais,
                arquitetura de informação, e otimização de desempenho. Visamos
                impulsionar o sucesso do seu empreendimento online, fornecendo
                insights valiosos e soluções sob medida para seus desafios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
