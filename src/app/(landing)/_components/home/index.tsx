import { AnimatedLight } from "./animatedLight";
import { AnimatedLogoHome } from "./animatedLogoHome";
import { Stacks } from "./stacks";

export function Home() {
  return (
    <section
      className="mb-8 flex h-[650px] w-full flex-col items-center p-0 pt-[250px] sm:h-[875px] lg:h-[1000px]"
      id="home"
    >
      <AnimatedLogoHome />
      <Stacks />
      <AnimatedLight />
    </section>
  );
}
