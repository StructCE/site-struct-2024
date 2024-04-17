import { AnimatedLogoHome } from "./animatedLogoHome";
import { Stacks } from "./stacks";

export function Home() {
  return (
    <section
      className="mb-8 flex h-[650px] w-full flex-col items-center justify-center p-0 sm:h-[875px] lg:h-[1000px]"
      id="home"
    >
      <div className="absolute top-[250px] w-[280px] sm:w-[600px] lg:w-[750px]">
        <AnimatedLogoHome />
        <Stacks />
      </div>
    </section>
  );
}
