import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { api } from '~/trpc/react';
import { useForm } from 'react-hook-form';

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
      message: "A descrição do projeto não pode ser vazio"
    }),
    link: z.string({
      required_error: "Link do projeto é necessário",
      invalid_type_error: "Link do projeto deve ser uma string"
    }).min(1, {
      message: "O link do projeto não pode ser vazio"
    }),
    logoPublicId: z.string(),
    show: z.boolean(),
  })
  
type Form = z.infer<typeof formSchema>;

export function useCreateProjectForm() {
  const router = useRouter();
  const createProject = api.project.createProject.useMutation({
    onSuccess: () => {
      toast.success("Projeto criado", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
      form.reset();
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
    };
    createProject.mutate(res);
  }
  return { 
    ...form,
    submit: form.handleSubmit(onSubmit)
  }
}