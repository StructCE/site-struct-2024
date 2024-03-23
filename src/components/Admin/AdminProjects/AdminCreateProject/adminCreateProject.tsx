"use client"
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { api } from "~/trpc/react";
import toast from "react-hot-toast";


const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string(),
  logoPublicId: z.string(),
  show: z.boolean(),
})

type Form = z.infer<typeof formSchema>

export default function CreateProject() {
  const createProject = api.project.createProject.useMutation()
  const { handleSubmit, register, setValue} = useForm<Form>({
    defaultValues: {
      name: "",
      description: "",
      link: "",
      logoPublicId: "",
      show: false,
    },
    resolver: zodResolver(formSchema)
  });
  function onSubmit(values: Form) {
    const res = {...values,
      logoPublicId: values.logoPublicId !== ""? values.logoPublicId: undefined
    }
    try {
      const project = createProject.mutate(res)
      toast.success("Projeto criado", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
      return project
    } catch (error) {
      toast.error("Erro", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      })
      return error
    }
  }
  return (
    <form className="w-3/4 sm:w-1/2 lg:w-1/3" onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="mt-0 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Nome"
              {...register("name")}
            />
            <Textarea
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Descrição"
              {...register("description")}
            ></Textarea>
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Link (url completa)"
              {...register("link")}
            />
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Imagem do projeto (url do Cloudinary)"
              {...register("logoPublicId")}
            />
            <div className="mt-4 flex justify-center gap-2">
              <Checkbox className="size-8 border-struct-7" {...register("show")} onCheckedChange={(value) => {if (typeof value ==="boolean") setValue("show", value)}}/>
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