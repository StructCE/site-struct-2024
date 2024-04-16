import { Toaster } from "react-hot-toast";
import {
  AdminPortfolio,
  CreateProject,
} from "~/components/app/dashboard/projetosAdm";

export default function ProjetosAdmin() {
  return (
    <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="m-0 flex w-full flex-col items-center justify-center gap-6 pt-40">
        <h2 className="text-center font-oxanium text-[16px] font-bold leading-[22px] sm:text-[24px] sm:leading-[40px] lg:text-[40px] lg:leading-[52px]">
          <span className="text-struct-3">{"{ "}</span>Admin - Projetos
          <span className="text-struct-3">{" }"}</span>
        </h2>
        <CreateProject />
        <div className="my-12">
          <h3 className="text-center font-oxanium text-[16px] font-bold leading-[21px] sm:text-[20px] sm:leading-[26px] lg:text-[36px] lg:leading-[44px]">
            <span className="text-struct-3">{"{ "}</span>Editar/Remover
            <span className="text-struct-3">{" }"}</span>
          </h3>
          <AdminPortfolio />
        </div>
      </div>
    </div>
  );
}
