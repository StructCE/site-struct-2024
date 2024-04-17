"use client";
import { TypeAnimation } from "react-type-animation";

export function AnimatedLogoHome() {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  return (
    <>
      <TypeAnimation
        cursor={false}
        sequence={["", 600, "{struct}"]}
        speed={{ type: "keyStrokeDelayInMs", value: 150 }}
        wrapper="h1"
        className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-500 bg-clip-text text-center font-oxanium text-[72px] font-bold leading-[90px] text-transparent selection:text-struct-7 sm:text-[156px] sm:leading-[195px]"
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
    </>
  );
}
