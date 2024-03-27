"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

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

const FormEmail = () => {
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

  return (
    <Form {...form}>
      <Toaster position="bottom-center" reverseOrder={false} />
      <form onSubmit={form.handleSubmit(handleSubmit)} className="font-nunito">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem className="space-y-0 sm:mt-4 sm:space-y-1">
              <FormLabel className="mb-0 text-[10px] sm:mb-1 sm:text-base">
                Nome
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu nome"
                  className="h-6 space-y-0 border-none bg-fundo-2/75 px-2 text-[10px] text-struct-7 focus:outline-none focus:ring sm:h-10 sm:px-3 sm:text-sm"
                  {...field}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
              <FormLabel className="text-[10px] sm:text-base">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu email"
                  type="email"
                  className="mt-0 h-6 space-y-0 border-none bg-fundo-2/75 px-2 text-[10px] text-struct-7 focus:outline-none focus:ring sm:mt-1 sm:h-10 sm:px-3 sm:text-sm"
                  {...field}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
              <FormLabel className="text-[10px] sm:text-base">
                Telefone
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="(61) 99999-9999"
                  type="tel"
                  className="mt-0 h-6 space-y-0 border-none bg-fundo-2/75 px-2 text-[10px] text-struct-7 focus:outline-none focus:ring sm:mt-1 sm:h-10 sm:px-3 sm:text-sm"
                  {...field}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="servico"
          render={() => (
            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
              <FormLabel className="text-[10px] sm:text-base">
                Serviço
              </FormLabel>
              <Select
              onValueChange={(value) => form.setValue("servico", value)}
                required
              >
                <FormControl>
                  <SelectTrigger className="h-6 border-none bg-fundo-2/75 px-2 text-[10px] text-struct-7/80 sm:mt-1 sm:h-10 sm:px-3 sm:text-sm">
                    <SelectValue placeholder="Selecione um tipo de serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-none bg-fundo-2/75 font-nunito text-struct-7">
                  <SelectItem
                    className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                    value="Website"
                  >
                    Website
                  </SelectItem>
                  <SelectItem
                    className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                    value="Servico Web"
                  >
                    Serviço Web
                  </SelectItem>
                  <SelectItem
                    className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                    value="Aplicativo"
                  >
                    Aplicativo
                  </SelectItem>
                  <SelectItem
                    className="text-[10px] font-semibold hover:font-bold sm:text-sm"
                    value="Consultoria"
                  >
                    Consultoria
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
              <FormLabel className="text-[10px] sm:text-base">
                Descrição
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Faça uma breve descrição do seu projeto"
                  className="mt-1 min-h-[40px] resize-none border-none bg-fundo-2/75 px-2 text-[10px] text-struct-7 focus:outline-none sm:min-h-[80px] sm:px-3 sm:text-sm"
                  {...field}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="my-3 flex justify-end sm:my-4">
          <Button
            type="submit"
            disabled={loading}
            className="h-6 bg-fundo-3 px-3 py-1 font-oxanium text-[12px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-1 hover:text-struct-1 active:border-none sm:h-11 sm:rounded-md sm:px-6 sm:text-[20px]"
          >
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default FormEmail;
