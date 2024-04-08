"use client"
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useCreateProjectForm } from "~/hooks/useCreateProjectForm";


export default function CreateProject() {
  const form = useCreateProjectForm();
  return (
    <form className="w-3/4 sm:w-1/2 lg:w-1/3" onSubmit={form.submit}>
            <Input
              className="mt-0 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Nome"
              {...form.register("name")}
            />
            <Textarea
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Descrição"
              {...form.register("description")}
            ></Textarea>
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Link (url completa)"
              {...form.register("link")}
            />
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Imagem do projeto (url do Cloudinary)"
              {...form.register("logoPublicId")}
            />
            <div className="mt-4 flex justify-center gap-2">
              <Checkbox className="size-8 border-struct-7" {...form.register("show")} onCheckedChange={(value) => {if (typeof value ==="boolean") form.setValue("show", value)}}/>
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
  )
}