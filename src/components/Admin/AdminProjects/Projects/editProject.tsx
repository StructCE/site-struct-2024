"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ProjectWithMembers } from "~/server/api/routers/project";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Nome do projeto é necessário",
      invalid_type_error: "O nome do projeto deve ser uma string",
    })
    .min(1, {
      message: "O nome do projeto não pode ser vazio",
    }),
  description: z
    .string({
      required_error: "A descrição do projeto é necessária",
      invalid_type_error: "A descrição do projeto deve ser uma string",
    })
    .min(1, {
      message: "A descrição do projeto não pode ser vazia",
    }),
  link: z
    .string({
      required_error: "Link do projeto é necessário",
      invalid_type_error: "Link do projeto deve ser uma string",
    })
    .min(1, {
      message: "O link do projeto não pode ser vazio",
    }),
  logoPublicId: z.string(),
  show: z.boolean(),
});

type Form = z.infer<typeof formSchema>;

export default function EditProject({
  projectWithMembers,
}: {
  projectWithMembers: ProjectWithMembers;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const updateProject = api.project.updateProject.useMutation({
    onSuccess: () => {
      toast.success("Projeto atualizado", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
      setOpen(false);
      router.refresh();
    },
    onError: () => {
      toast.error("Erro", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    },
  });
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: projectWithMembers?.name,
      description: projectWithMembers?.description,
      logoPublicId: projectWithMembers?.logoPublicId,
      link: projectWithMembers?.link,
      show: projectWithMembers?.show,
    },
  });
  function onSubmit(values: Form) {
    if (projectWithMembers) {
      const res = {
        id: projectWithMembers.id,
        data: {
          ...values,
          logoPublidID:
            values.logoPublicId !== "" ? values.logoPublicId : undefined,
        },
      };
      updateProject.mutate(res);
    }
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className="h-14 rounded-md border-[3px] border-yellow-300 bg-fundo-0 px-6 font-oxanium text-[24px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-2">
        Editar Projeto
      </AlertDialogTrigger>
      <AlertDialogContent className="flex w-[500px] flex-col items-center border-none bg-fundo-3">
        <AlertDialogTitle>
          Editando dados de{" "}
          <span className="text-struct-1"> {projectWithMembers?.name} </span>
        </AlertDialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-fit w-full flex-col items-center justify-start gap-5 px-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Nome"
                      {...field}
                      className="border-none bg-fundo-1 text-start font-nunito text-[20px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Descrição"
                      {...field}
                      className="border-none bg-fundo-1 text-start font-nunito text-[20px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logoPublicId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Imagem (URL da Cloudinary)"
                      {...field}
                      className="border-none bg-fundo-1 text-start font-nunito text-[20px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Link (url Completa)"
                      {...field}
                      className="border-none bg-fundo-1 text-start font-nunito text-[20px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full items-center justify-start gap-3">
              <Checkbox
                defaultChecked={projectWithMembers?.show}
                onCheckedChange={(value) => {
                  if (typeof value === "boolean") form.setValue("show", value);
                }}
                className="size-6 border-struct-7"
              />
              <p>Mostrar?</p>
            </div>
            <AlertDialogFooter>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-10 rounded-md bg-white px-4 py-2 font-nunito font-bold text-black hover:scale-[1.02]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="h-10 rounded-md bg-primary px-4 py-2 font-nunito font-bold hover:scale-[1.02]"
              >
                Salvar Mudanças
              </button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
