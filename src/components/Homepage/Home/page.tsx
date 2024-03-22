"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  return (
    <>
      <section
        className="m-0 flex h-[650px] w-full items-center justify-center p-0 sm:h-[875px] lg:h-[1100px]"
        id="home"
      >
        <div className="w-[280px] sm:w-[600px] lg:w-[750px]">
          <TypeAnimation
            cursor={false}
            sequence={["", 600, "{struct}"]}
            speed={{ type: "keyStrokeDelayInMs", value: 150 }}
            wrapper="h1"
            className="text-center font-oxanium text-[72px] font-bold leading-[90px] sm:text-[156px] sm:leading-[195px] lg:text-[192px] lg:leading-[240px]"
          />
          <TypeAnimation
            cursor={false}
            className={CURSOR_CLASS_NAME}
            sequence={[
              (el) => el!.classList.remove(CURSOR_CLASS_NAME),
              "",
              2550,
              (el) => el!.classList.add(CURSOR_CLASS_NAME),
              "Atuando no mercado de desenvolvimento web desde 2014.",
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 40 }}
            wrapper="p"
            repeat={0}
          />
          <p className="text-[1px] leading-[0px] text-fundo-0 lg:leading-[150px]">
            .
          </p>
        </div>
      </section>
    </>
  );
}
