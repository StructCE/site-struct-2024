import { AnimatedServicesTitle } from "./animatedServicesTitle";
import { ServicesList } from "./servicesList";

export function Services() {
  return (
    <section
      id="servicos"
      className="m-0 flex w-full items-center justify-center p-0"
    >
      <div className="w-[85%] py-8 sm:py-16 lg:py-32">
        <AnimatedServicesTitle />
        <ServicesList />
      </div>
    </section>
  );
}
