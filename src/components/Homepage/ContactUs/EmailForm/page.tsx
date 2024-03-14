import { FormEmail } from "./FormCard/page";

export default function EmailForm() {
  return (
    <>
      <div className="h-[360px] w-[280px] rounded-lg bg-fundo-2 p-4 sm:h-[598px] sm:w-[496px] sm:p-6">
        <h3 className="text-center font-oxanium text-[14px] font-bold leading-[18px] sm:text-[32px] sm:leading-[40px]">
          <span className="text-struct-3">{"{ "}</span>Peça um orçamento
          <span className="text-struct-3">{" }"}</span>
        </h3>
        <FormEmail />
      </div>
    </>
  );
}
