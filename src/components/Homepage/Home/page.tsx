"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <section
        className="m-0 flex h-[650px] w-full items-center justify-center p-0 lg:h-[1000px]"
        id="home"
      >
        <div className="w-[280px] sm:w-[600px] lg:w-[750px]">
          <h1 className="text-center font-oxanium text-[72px] font-bold leading-[90px] sm:text-[156px] sm:leading-[195px] lg:text-[192px] lg:leading-[240px]">
            {"{struct}"}
          </h1>
          <TypeAnimation
            sequence={["{struct}", 1000]}
            speed={10}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            className="ml-2 text-center font-oxanium text-[72px] font-bold leading-[90px] sm:text-[156px] sm:leading-[195px] lg:text-[192px] lg:leading-[240px]"
          />
          <p className="text-center font-nunito text-[12px] font-bold sm:text-[20px] lg:text-[24px]">
            Atuando no mercado de desenvolvimento web desde 2014.
          </p>
        </div>
      </section>
    </>
  );
}
