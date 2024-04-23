"use client";
import { MdEditNote } from "react-icons/md";
import { Input } from "~/components/ui/input";
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
import { useEditMemberForm } from "~/hooks/useEditMemberForm";
import { type Member } from "~/server/api/routers/directorship";

export function EditMember({ member }: { member: Member }) {
  const form = useEditMemberForm({
    id: member.id,
    defaultValues: {
      name: member.name,
      logoPublicId: member.logoPublicId,
    },
  });
  return (
    <AlertDialog open={form.open} onOpenChange={form.setOpen}>
      <AlertDialogTrigger>
        <i className="text-yellow-300">
          <MdEditNote className="text-blue h-6 w-6 cursor-pointer" />
        </i>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex w-[500px] flex-col items-center border-none bg-fundo-3">
        <AlertDialogTitle>
          Editando dados de{" "}
          <span className="text-struct-1"> {member.name} </span>
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
