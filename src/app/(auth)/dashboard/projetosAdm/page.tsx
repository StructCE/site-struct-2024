// "use client";
import AdminPortfolio from "~/components/Admin/AdminProjects/page";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function ProjetosAdmin() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <div className="m-0 flex w-full flex-col items-center justify-center gap-6 pt-40">
          <h2 className="text-center font-oxanium text-[16px] font-bold leading-[22px] sm:text-[24px] sm:leading-[40px] lg:text-[40px] lg:leading-[52px]">
            <span className="text-struct-3">{"{ "}</span>Admin - Projetos
            <span className="text-struct-3">{" }"}</span>
          </h2>
          <form className="w-3/4 sm:w-1/2 lg:w-1/3">
            <Input
              className="mt-0 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Nome"
            />
            <Textarea
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Descrição"
            ></Textarea>
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Link (url completa)"
            />
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Imagem do projeto (url do Cloudinary)"
            />
            <div className="mt-4 flex justify-center gap-2">
              <Checkbox className="size-8 border-struct-7" />
              <p className="text-[20px]">Mostrar?</p>
            </div>
            <div className="my-5 flex justify-center">
              <Button
                type="submit"
                className="h-11 rounded-md border-[3px] border-struct-7  bg-fundo-0 px-6 font-oxanium text-[20px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-2"
              >
                Criar Projeto
              </Button>
            </div>
          </form>
          <div className="my-12">
            <h3 className="text-center font-oxanium text-[16px] font-bold leading-[21px] sm:text-[20px] sm:leading-[26px] lg:text-[36px] lg:leading-[44px]">
              <span className="text-struct-3">{"{ "}</span>Editar/Remover
              <span className="text-struct-3">{" }"}</span>
            </h3>
            <AdminPortfolio />
          </div>
        </div>
      </div>
    </>
  );
}
