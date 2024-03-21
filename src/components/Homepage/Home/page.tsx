"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <section
        className="m-0 flex h-[650px] w-full items-center justify-center p-0 lg:h-[1100px]"
        id="home"
      >
        <div className="w-[280px] sm:w-[600px] lg:w-[750px]">
          <TypeAnimation
            sequence={["", 750, "{struct}"]}
            speed={{ type: "keyStrokeDelayInMs", value: 150 }}
            wrapper="h1"
            cursor={false}
            className="text-center font-oxanium text-[72px] font-bold leading-[90px] sm:text-[156px] sm:leading-[195px] lg:text-[192px] lg:leading-[240px]"
          />
          <TypeAnimation
            sequence={[
              "",
              2700,
              "Atuando no mercado de desenvolvimento web desde 2014.",
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 40 }}
            wrapper="p"
            cursor={false}
            repeat={0}
            className="text-center font-nunito text-[12px] font-bold sm:text-[20px] lg:text-[24px]"
          />
          <p className="text-[1px] leading-[150px] text-fundo-0">.</p>
        </div>
      </section>
    </>
  );
}
