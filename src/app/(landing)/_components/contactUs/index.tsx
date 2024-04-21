import { RequestQuote } from "./requestQuote";
import { FindUs } from "./findUs";
import { ContactUsTitle } from "./contactUsTitle";

export function ContactUs() {
  return (
    <section
      className="mb-12 flex w-full skew-y-3 items-center justify-center bg-gradient-to-br from-fundo-3 to-fundo-0 py-16 lg:h-[1000px] lg:py-0"
      id="contato"
    >
      <div className="flex -skew-y-3 flex-col gap-8">
        <ContactUsTitle />
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <RequestQuote />
          <FindUs />
        </div>
      </div>
    </section>
  );
}
