import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formEmailSchema = z.object({
  nome: z.string({ required_error: "Digite seu nome." }).min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z
    .string({ required_error: "Digite seu email." })
    .min(1, { message: "Digite seu email." })
    .email("Email inválido."),
  telefone: z
    .string({ required_error: "Digite seu telefone." })
    .regex(phoneRegex, "Telefone inválido."),
  servico: z.string({
    required_error: "Selecione um tipo de serviço.",
  }),
  descricao: z
    .string({ required_error: "Dê uma breve descrição do seu projeto." })
    .min(4),
});

type FormEmailValues = z.infer<typeof formEmailSchema>;

export function useQuoteForm() {
  const form = useForm<FormEmailValues>({
    resolver: zodResolver(formEmailSchema),
    mode: "onChange",
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      descricao: "",
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(
    () => emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? ""),
    [],
  );

  const handleSubmit = async (data: FormEmailValues) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: data.nome,
        email: data.email,
        telephone: data.telefone,
        service: data.servico,
        description: data.descricao,
      });
      toast.success("Orçamento solicitado!", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    } catch (error) {
      toast.error("Erro", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, handleSubmit };
}
