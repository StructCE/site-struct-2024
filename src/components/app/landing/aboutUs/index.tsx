import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import { FAQ } from "./faq";
import { PartnerCard } from "./partnerCard";
import { WhoWeAreCard } from "./whoWeAreCard";

export async function AboutUs() {
  noStore();
  const partners = await api.partner.getAll.query();

  const countProjects = await api.project.countProjects.query();
  const countActiveMembers =
    await api.directorship.countDirectiorshipMembers.query();

  const date = new Date();
  const yearsActive =
    (date.getDate() >= 20 && date.getMonth() + 1 === 11) ||
    date.getMonth() + 1 > 11
      ? date.getFullYear() - 2014
      : date.getFullYear() - 2014 - 1;

  return (
    <>
      <section
        id="sobrenos"
        className="m-0 flex w-full flex-col items-center justify-center gap-9 p-0 font-nunito"
      >
        <div className="flex flex-col gap-24 py-16 sm:py-24">
          {/* Quem Somos */}
          <div className="flex flex-col gap-8">
            <WhoWeAreCard
              countProjects={countProjects}
              yearsActive={yearsActive}
              countActiveMembers={countActiveMembers}
            />
          </div>
          {/* Parceiros */}
          <div className="flex flex-col gap-6">
            <PartnerCard partners={partners} />
          </div>
          {/* FAQ */}
          <div>
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}
