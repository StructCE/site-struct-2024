import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '~/trpc/react';
import toast from 'react-hot-toast';

const formSchema = z.object({
    name: z.string({
      required_error: "Nome do projeto é necessário",
      invalid_type_error: "O nome do projeto deve ser uma string"
    }).min(1, {
      message: "O nome do projeto não pode ser vazio"
    }),
    description: z.string({
      required_error: "A descrição do projeto é necessária",
      invalid_type_error: "A descrição do projeto deve ser uma string"
    }).min(1, {
      message: "A descrição do projeto não pode ser vazia"
    }),
    link: z.string({
      required_error: "Link do projeto é necessário",
      invalid_type_error: "Link do projeto deve ser uma string"
    }).min(1, {
      message: "O link do projeto não pode ser vazio"
    }),
    logoPublicId: z.string(),
    show: z.boolean()
  });
  
type Form = z.infer<typeof formSchema>;

export function useEditProjectForm({
    id,
    defaultValues: {
        name,
        description,
        logoPublicId,
        link, 
        show,
    }
}: {
    id: string, 
    defaultValues : {
        name: string, 
        description: string, 
        logoPublicId?: string, 
        link: string, 
        show: boolean
    }
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
    }
  });
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      description: description,
      logoPublicId: logoPublicId,
      link: link,
      show: show,
    }
  });
  function onSubmit(values: Form) {
    const res = {
    id: id,
    data: {
        ...values,
        logoPublidID: values.logoPublicId !== ""? values.logoPublicId : undefined
    }
    }
    updateProject.mutate(res);
    }
  return {
    ...form,
    submit: form.handleSubmit(onSubmit),
    open: open,
    setOpen: setOpen,
  }
}