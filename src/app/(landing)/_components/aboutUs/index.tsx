import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import { FAQ } from "./faq";
import { PartnerCard } from "./partnerCard";
import { WhoWeAre } from "./whoWeAre";

export async function AboutUs() {
  noStore();
  const partners = await api.partner.getAll.query();

  return (
    <section
      id="sobrenos"
      className="m-0 flex w-full flex-col items-center justify-center gap-24 p-0 py-16 font-nunito sm:py-24"
    >
      <WhoWeAre />
      {/* Parceiros */}
      <div className="flex flex-col gap-6">
        <PartnerCard partners={partners} />
      </div>
      <FAQ />
    </section>
  );
}
