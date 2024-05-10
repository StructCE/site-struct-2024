"use client";
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
import { type ProjectWithMembers } from "~/server/api/routers/project";
import { useEditProjectForm } from "~/hooks/useEditProjectForm";

export function EditProject({
  project,
}: {
  project: ProjectWithMembers["project"];
}) {
  const form = useEditProjectForm({
    id: project.id,
    defaultValues: project,
  });
  return (
    <AlertDialog open={form.open} onOpenChange={form.setOpen}>
      <AlertDialogTrigger className="h-14 rounded-md border-[3px] border-yellow-300 bg-fundo-0 px-6 font-oxanium text-[24px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-2">
        Editar Projeto
      </AlertDialogTrigger>
      <AlertDialogContent className="flex w-[500px] flex-col items-center border-none bg-fundo-3">
        <AlertDialogTitle>
          Editando dados de{" "}
          <span className="text-struct-1"> {project.name} </span>
        </AlertDialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.submit}
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
                defaultChecked={project.show}
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
                onClick={() => form.setOpen(false)}
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
