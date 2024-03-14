import { api } from "~/trpc/server";
import PartnerCard from "./PartnerCard/page";
import WhoWeAre from "./WhoWeAreCard/page";

export default async function AboutUs() {
  const partners = await api.partner.getAll.query();

  return (
    <>
      <section
        id="sobrenos"
        className="m-0 flex w-full skew-y-3 flex-col items-center justify-center gap-9 bg-fundo-2 p-0 font-nunito lg:h-[1000px]"
      >
        <div className="flex -skew-y-3 flex-col gap-9 py-12 sm:py-24">
          {/* Quem Somos */}
          <div className="flex flex-col gap-8">
            <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
              <span className="text-struct-3">{"{ "}</span>Quem Somos
              <span className="text-struct-3">{" }"}</span>
            </h2>
            {/* Caixa Quem Somos */}
            <div className="flex w-[280px] flex-col rounded-2xl bg-fundo-3 sm:w-[580px] sm:justify-center lg:w-[1024px] lg:flex-row">
              <WhoWeAre />
            </div>
          </div>
          {/* Parceiros */}
          <div className="flex flex-col gap-8">
            <h3 className="text-center font-oxanium text-[20px] font-bold leading-[25px] sm:text-[24px] sm:leading-[30px] lg:text-[40px] lg:leading-[50px]">
              <span className="text-struct-3">{"{ "}</span>Parceiros
              <span className="text-struct-3">{" }"}</span>
            </h3>
            <div className="flex justify-center">
              <div className="flex max-w-[256px] flex-wrap gap-6 rounded-xl bg-fundo-3 p-6 sm:max-w-[464px] sm:gap-8 sm:p-8 lg:max-w-[896px]">
                <PartnerCard partners={partners} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
