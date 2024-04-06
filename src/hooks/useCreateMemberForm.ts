"use client"
import {z} from 'zod'
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { api } from '~/trpc/react';


const formSchema = z.object({
  name: z.string().min(1, {
    message: "O nome não pode ser vazio"
  }),
  logoPublicId: z.string(),
  directorships: z.array(
      z.object({
        directorship: z.string().min(1, {
          message: "O nome da diretoria não pode ser vazio"
        }),
        role: z.string().min(1, {
          message: "O nome do cargo de diretoria não pode ser vazio"
        })
      }), 
  ).min(1, {
    message: "Pelo menos uma diretoria é exigida"
  }),
  projects: z.array(
    z.object({
      project: z.string().min(1, {
        message: "O nome do projeto não pode ser vazio"
      }), 
      role: z.string().min(1, {
        message: "O nome do cargo de projeto não pode ser vazio"
      })
    })
  )
});

export type Form = z.infer<typeof formSchema>;

export function useCreateMemberForm() {
  const router = useRouter();
  const createMember = api.member.createMember.useMutation({
    onSuccess: () => {
      toast.success("Membro criado", {
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
      })
    }
  });
  const onSubmit = (values: Form) => {
    const res = {
      ...values,
      logoPublicId: values.logoPublicId !== ""? values.logoPublicId : undefined,
      projects: values.projects?.length > 0 ? values.projects : undefined
    };
    createMember.mutate(res);  
  };
  const form = useForm<Form>({
    defaultValues: {
      name: "",
      logoPublicId: "", 
      directorships: [{
      directorship: "",
      role: "",
    }],
  },
  resolver: zodResolver(formSchema)
});
const {fields: directorshipsFields,
   append: directorshipsAppend,
   remove: directorshipsRemove,
  } = useFieldArray({
  control: form.control,
  name: "directorships",
  rules: {minLength: 1}
});
const {fields: projectsFields,
   append: projectsAppend,
   remove: projectsRemove,
  } = useFieldArray({
    control: form.control,
    name: "projects", 
  });
  return {
    ...form,
    submit: form.handleSubmit(onSubmit),
    directorships: {
      directorshipsFields,
      directorshipsAppend,
      directorshipsRemove,
    },
    projects: {
      projectsFields,
      projectsAppend,
      projectsRemove,
    },
  }
}
