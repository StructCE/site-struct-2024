"use client"
import { api } from '~/trpc/react';
import { MdEditNote} from "react-icons/md";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "~/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
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
import toast from "react-hot-toast";

type Member = {
  id: string;
  name: string;
  logoPublicId: string;
  role: string;
};

const formSchema = z.object({
  name: z.string({
    required_error: "Nome do membro é necessário",
    invalid_type_error: "O nome do membro deve ser uma string"
  }),
  logoPublicId: z.string({
    invalid_type_error: "A descrição do projeto deve ser uma string"
  }).optional(),
});

export default function EditMember( { member }: { member: Member}) {
  const updateMember = api.member.updateMember.useMutation({
    onSuccess: () => {
      toast.success("Membro atualizado", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    },
    onError: () => {
      toast.error("Erro", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      })
    }
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: member.name,
      logoPublicId: member.logoPublicId,
    }
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger>
      <i className="text-yellow-300">
        <MdEditNote className="w-6 h-6 cursor-pointer text-blue"/>   
      </i>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-fundo-3 border-none w-[500px] flex flex-col items-center">
        <AlertDialogTitle>Editando dados de <span className="text-struct-1"> {member.name} </span></AlertDialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((value) => { updateMember.mutate( { id: member.id, data: value } ) })} className="m-5 h-fit flex flex-col gap-5 items-center justify-start">
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
              <AlertDialogCancel className="text-black hover:scale-[1.02]">Cancelar</AlertDialogCancel>
              <AlertDialogAction type="submit" className="hover:scale-[1.02]">Salvar Mudanças</AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
)
}