"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
  nome: z
    .string()
    .min(2, {
      message: "Nome deve ter pelo menos 2 caracteres.",
    })
    .max(50, {
      message: "Nome deve ter no máximo 50 caracteres.",
    }),
  email: z
    .string()
    .min(1, { message: "Digite seu email." })
    .email("Email não é válido."),
  telefone: z.string().regex(phoneRegex, "Invalid Number!"),
  servico: z.string({
    required_error: "Selecione um tipo de serviço.",
  }),
  descricao: z.string().max(167).min(4),
});

type FormEmailValues = z.infer<typeof formEmailSchema>;

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

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

  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    toast.success("Orçamento solicitado!", {
      style: {
        color: "#081426",
        background: "#F8F8FF",
      },
    });

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState("loading");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
      }),
    });

    setState("ready");
  }

  // async function onSubmit(data: FormEmailValues) {
  //   await fetch("api/email", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       nome: "Leo",
  //     }),
  //   });

  //   console.log({ data });
  // }

  return (
    <Form {...form}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <form onSubmit={handleOnSubmit} className="font-nunito">
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
                  placeholder="João Pedro"
                  className="h-6 space-y-0 border-none bg-fundo-3 px-2 text-[10px] text-struct-7 focus:outline-none focus:ring sm:h-10 sm:px-3 sm:text-sm"
                  {...field}
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
                  placeholder="joaopedro@gmail.com"
                  type="email"
                  className="mt-0 h-6 space-y-0 border-none bg-fundo-3 px-2 text-[10px] text-struct-7 focus:outline-none focus:ring sm:mt-1 sm:h-10 sm:px-3 sm:text-sm"
                  {...field}
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
                  className="mt-0 h-6 space-y-0 border-none bg-fundo-3 px-2 text-[10px] text-struct-7 focus:outline-none focus:ring sm:mt-1 sm:h-10 sm:px-3 sm:text-sm"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="servico"
          render={({ field }) => (
            <FormItem className="mt-1 space-y-0 sm:mt-3 sm:space-y-1">
              <FormLabel className="text-[10px] sm:text-base">
                Serviço
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-6 border-none bg-fundo-3 px-2 text-[10px] text-struct-7/80 sm:mt-1 sm:h-10 sm:px-3 sm:text-sm">
                    <SelectValue placeholder="Selecione um tipo de serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7">
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
                  className="mt-1 min-h-[40px] resize-none border-none bg-fundo-3 px-2 text-[10px] text-struct-7 focus:outline-none sm:min-h-[80px] sm:px-3 sm:text-sm"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="my-3 flex justify-end sm:my-4">
          <Button
            type="submit"
            disabled={state === "loading"}
            className="h-6 bg-struct-7 px-3 py-1 font-oxanium text-[12px] font-semibold text-struct-1 hover:bg-struct-7-hover hover:font-bold active:border-none sm:h-11 sm:rounded-md sm:px-6 sm:text-[20px]"
          >
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default FormEmail;
