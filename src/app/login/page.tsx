import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LoginPage() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <section
          className="m-0 flex h-[800/px] w-full items-center justify-center p-0 lg:h-[1000px]"
          id="home"
        >
          <div className="w-[280px] sm:w-[600px] lg:w-[650px]">
            <h1 className="text-center font-oxanium text-[64px] font-bold sm:text-[128px] lg:text-[172px]">
              {"{struct}"}
            </h1>
            <form className="mx-2">
              <Label className="text-[24px]">Email</Label>
              <Input className="mb-2 mt-1 text-[16px] text-fundo-0"></Input>
              <Label className="text-[24px]">Senha</Label>
              <Input className="mb-2 mt-1 text-[16px] text-fundo-0"></Input>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
