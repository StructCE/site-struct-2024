"use client";

export default function Home() {
  return (
    <>
      <div className="z-2 m-0 flex h-[650px] w-full items-center justify-center p-0 lg:h-[1000px]">
        <div className="w-[280px] sm:w-[600px] lg:w-[750px]">
          <h1 className="font-oxanium text-center text-[72px] font-bold leading-[90px] sm:text-[156px] sm:leading-[195px] lg:text-[192px] lg:leading-[240px]">
            {"{struct}"}
          </h1>
          <p className="font-nunito text-center text-[12px] font-bold sm:text-[20px] lg:text-[24px]">
            Atuando no mercado de desenvolvimento web desde 2014.
          </p>
        </div>
      </div>
    </>
  );
}
