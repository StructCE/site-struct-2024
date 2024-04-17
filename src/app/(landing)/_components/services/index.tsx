import { ServicesTitle } from "./servicesTitle";
import { ServicesList } from "./servicesList";

export function Services() {
  return (
    <section
      id="servicos"
      className="m-0 flex w-full flex-col items-center justify-center px-4 py-8 sm:py-16 lg:py-32"
    >
      <ServicesTitle />
      <ServicesList />
    </section>
  );
}
