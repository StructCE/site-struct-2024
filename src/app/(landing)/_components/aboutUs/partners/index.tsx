import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import { PartnersListContainer } from "./partnersListContainer";
import { PartnersTitle } from "./partnersTitle";
import { PartnerCard, PartnerCardImg } from "./partnerCard";

export async function Partners() {
  noStore();
  const partners = await api.partner.getAll.query();

  return (
    <div className="flex flex-col gap-6">
      <PartnersTitle />
      <PartnersListContainer>
        {partners?.map((partner) => (
          <PartnerCard key={partner.id} href={partner.link}>
            <PartnerCardImg alt={partner.name} src={partner.logoPublicId} />
          </PartnerCard>
        ))}
      </PartnersListContainer>
    </div>
  );
}
