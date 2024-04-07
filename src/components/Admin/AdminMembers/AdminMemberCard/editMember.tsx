"use client"
import { MdEditNote} from "react-icons/md";
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


export default function EditMember({ member }: { member: Member}) {
  const form = useEditMemberForm({
    id: member.id,
    defaultValues: {
      name: member.name,
      logoPublicId: member.logoPublicId
    }}
  );
  return (
    <AlertDialog open={form.open} onOpenChange={form.setOpen}>
      <AlertDialogTrigger>
      <i className="text-yellow-300">
        <MdEditNote className="w-6 h-6 cursor-pointer text-blue"/>   
      </i>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-fundo-3 border-none w-[500px] flex flex-col items-center">
        <AlertDialogTitle>Editando dados de <span className="text-struct-1"> {member.name} </span></AlertDialogTitle>
        <Form {...form}>
          <form onSubmit={form.submit} className="px-10 w-full h-fit flex flex-col gap-5 items-center justify-start">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Nome" {...field} className="font-nunito text-[20px] text-start bg-fundo-1 border-none"/>
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
                    <Input placeholder="Imagem (URL da Cloudinary)" {...field} className="font-nunito text-[20px] text-start bg-fundo-1 border-none"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <button type="button" onClick={() => form.setOpen(false)} className="px-4 py-2 h-10 rounded-md bg-white font-nunito font-bold text-black hover:scale-[1.02]">Cancelar</button>
              <button type="submit" className="px-4 py-2 h-10 rounded-md bg-primary font-nunito font-bold hover:scale-[1.02]">Salvar Mudanças</button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
)
}