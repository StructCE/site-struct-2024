import { FAQAccordion } from "./faqAccordion";
import { FAQTitle } from "./faqTitle";

export function FAQ() {
  return (
    <section className="flex w-[280px] flex-col items-center gap-6 sm:w-[580px] lg:w-[1024px]">
      <FAQTitle />
      <FAQAccordion />
    </section>
  );
}
