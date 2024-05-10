import { PortfolioTitle } from "./portfolioTitle";
import { Projects } from "./projects";

export async function Portfolio() {
  return (
    <section className="flex h-fit w-full skew-y-3 items-center justify-center bg-gradient-to-br from-fundo-0 to-fundo-3 sm:py-12">
      <div className="-skew-y-3 py-24" id="portfolio">
        <PortfolioTitle />
        <Projects />
      </div>
    </section>
  );
}
