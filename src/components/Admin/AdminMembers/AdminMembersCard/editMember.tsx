"use client"
import { api } from '~/trpc/react';
import { MdEditNote} from "react-icons/md";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import toast from "react-hot-toast";
import { useState } from 'react';

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
  }).min(1, {
    message: "O nome do membro não pode ser vazio"
  }),
  logoPublicId: z.string({
    invalid_type_error: "A descrição do projeto deve ser uma string"
  }),
});

type Form = z.infer<typeof formSchema>;

export default function EditMember( { member }: { member: Member}) {
  const [open, setOpen] = useState(false);
  const updateMember = api.member.updateMember.useMutation({
    onSuccess: () => {
      toast.success("Membro atualizado", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
      setOpen(false);
    },
    onError: () => {
      toast.error("Erro", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    }
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: member.name,
      logoPublicId: member.logoPublicId,
    }
  });
  function onSubmit(values: Form) {
    const res = {
      id: member.id,
      data: {
        ...values,
        logoPublicId: values.logoPublicId !== ""? values.logoPublicId : undefined
      }
    };
    updateMember.mutate(res);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
      <i className="text-yellow-300">
        <MdEditNote className="w-6 h-6 cursor-pointer text-blue"/>   
      </i>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-fundo-3 border-none w-[500px] flex flex-col items-center">
        <AlertDialogTitle>Editando dados de <span className="text-struct-1"> {member.name} </span></AlertDialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="m-5 h-fit flex flex-col gap-5 items-center justify-start">
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
              <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 h-10 rounded-md bg-white font-nunito font-bold text-black hover:scale-[1.02]">Cancelar</button>
              <button type="submit" className="px-4 py-2 h-10 rounded-md bg-primary font-nunito font-bold hover:scale-[1.02]">Salvar Mudanças</button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
)
}