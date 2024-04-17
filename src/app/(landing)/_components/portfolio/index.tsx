import { PortfolioTitle } from "./portfolioTitle";
import { Projects } from "./projects";

export async function Portfolio() {
  return (
    <section
      className="flex h-fit w-full skew-y-3 items-center justify-center bg-gradient-to-br from-fundo-0 to-fundo-3 py-16 sm:py-36"
      id="portfolio"
    >
      <div className="-skew-y-3">
        <PortfolioTitle />
        <Projects />
      </div>
    </section>
  );
}
