import EmailForm from "./EmailForm/page";
import FindUs from "./FindUs/page";

export default function ContactUs() {
  return (
    <>
      <div className="m-0 flex w-full flex-col items-center justify-center gap-8 p-0 py-12 lg:h-[1000px] ">
        <h2 className="text-center font-oxanium text-[24px] font-bold leading-[30px] sm:text-[32px] sm:leading-[48px] lg:text-[48px] lg:leading-[60px]">
          <span className="text-struct-3">{"{ "}</span>Contato
          <span className="text-struct-3">{" }"}</span>
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <EmailForm />
          <FindUs />
        </div>
      </div>
    </>
  );
}
