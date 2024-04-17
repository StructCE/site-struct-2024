import { CompanyInfo } from "./companyInfo";
import { MVV } from "./mvv";
import { WhoWeAreBox } from "./whoWeAreBox";
import { WhoWeAreTitle } from "./whoWeAreTitle";

export async function WhoWeAre() {
  return (
    <div className="flex flex-col gap-8">
      <WhoWeAreTitle />
      <WhoWeAreBox>
        <CompanyInfo />
        <MVV />
      </WhoWeAreBox>
    </div>
  );
}
