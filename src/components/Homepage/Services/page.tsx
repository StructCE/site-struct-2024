"use client";
import ServicesCards from "./ServicesCards/page";

export default function Services() {
  return (
    <>
      <section
        id="servicos"
        className="m-0 flex w-full skew-y-3 items-center justify-center bg-fundo-2 p-0 lg:h-[1000px]"
      >
        <div className="-skew-y-3 py-16 sm:py-24">
          {/* titulo */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
              <span className="text-struct-3">{"{ "}</span>Serviços
              <span className="text-struct-3">{" }"}</span>
            </h2>
            <p className="my-2 w-[32px] border-b-2 border-struct-1 sm:my-3 sm:w-[64px] lg:my-5 lg:w-[96px]"></p>
            <p className="font-nunito text-[12px] sm:text-[14px] lg:text-[16px]">
              Conheça como podemos ajudar seu negócio!
            </p>
          </div>
          {/* caixas */}
          <div className="my-6 grid w-[280px] grid-cols-1 gap-4 font-nunito sm:w-[400px] sm:gap-6 lg:w-[762px] lg:grid-cols-2 lg:gap-8">
            <ServicesCards />
          </div>
        </div>
      </section>
    </>
  );
}
