import { api } from '~/trpc/react';
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

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

  
export function useEditMemberForm({
  id, 
  defaultValues: {name,
     logoPublicId,
  }}: {
    id: string, 
    defaultValues: {
      name: string, 
      logoPublicId?: string,
    }
  }
) {
  const router = useRouter();
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
      router.refresh();
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
      name: name,
      logoPublicId: logoPublicId,
      }
  });
  function onSubmit(values: Form) {
      const res = {
      id: id,
      data: {
          ...values,
          logoPublicId: values.logoPublicId !== ""? values.logoPublicId : undefined
      }
      };
      updateMember.mutate(res);
  };
  return {
    ...form,
    submit: form.handleSubmit(onSubmit),
    open: open,
    setOpen: setOpen,
  }
}