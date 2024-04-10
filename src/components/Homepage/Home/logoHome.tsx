"use client";
import { FaDocker, FaReact } from "react-icons/fa";
import { SiPrisma, SiTailwindcss } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { StacksContainer } from "./stacksContainer";

export default function LogoHome() {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  return (
    <>
      <section
        className="m-0 flex h-[650px] w-full items-center justify-center p-0 sm:h-[875px] lg:h-[1000px]"
        id="home"
      >
        <div className="absolute top-[250px] w-[280px] sm:w-[600px] lg:w-[750px]">
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
          <StacksContainer>
            <div className="flex items-center gap-1 sm:gap-2">
              <FaDocker className="delay-50 h-[20px] w-[20px] text-struct-7 transition ease-in-out hover:text-struct-1 sm:h-[36px] sm:w-[36px] lg:h-[46px] lg:w-[46px]" />
              <span className="font-oxanium text-[11px] sm:text-[16px] lg:text-[18px]">
                Docker
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <FaReact className="delay-50 h-[20px] w-[20px] text-struct-7 transition ease-in-out hover:text-struct-1 sm:h-[36px] sm:w-[36px] lg:h-[46px] lg:w-[46px]" />
              <span className="font-oxanium text-[11px] sm:text-[16px] lg:text-[18px]">
                React
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <SiTailwindcss className="delay-50 h-[20px] w-[20px] text-struct-7 transition ease-in-out hover:text-struct-1 sm:h-[36px] sm:w-[36px] lg:h-[46px] lg:w-[46px]" />
              <span className="font-oxanium text-[11px] sm:text-[16px] lg:text-[18px]">
                Tailwind
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <SiPrisma className="delay-50 h-[20px] w-[20px] text-struct-7 transition ease-in-out hover:text-struct-1 sm:h-[36px] sm:w-[36px] lg:h-[46px] lg:w-[46px]" />
              <span className="font-oxanium text-[11px] sm:text-[16px] lg:text-[18px]">
                Prisma
              </span>
            </div>
          </StacksContainer>
        </div>
      </section>
    </>
  );
}
