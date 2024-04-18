import { FAQ } from "./faq";
import { WhoWeAre } from "./whoWeAre";
import { Partners } from "./partners";

export async function AboutUs() {
  return (
    <section
      id="sobrenos"
      className="m-0 flex w-full flex-col items-center justify-center gap-24 p-0 py-16 font-nunito sm:py-24"
    >
      <WhoWeAre />
      <Partners />
      <FAQ />
    </section>
  );
}
