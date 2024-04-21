import { QuoteForm } from "./quoteForm";
import { AnimatedFormContainer } from "./animatedFormContainer";

export function RequestQuote() {
  return (
    <AnimatedFormContainer>
      <h3 className="text-center font-oxanium text-[14px] font-bold leading-[18px] sm:text-[32px] sm:leading-[40px]">
        Peça um orçamento
      </h3>
      <QuoteForm />
    </AnimatedFormContainer>
  );
}
