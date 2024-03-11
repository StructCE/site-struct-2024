"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const profileFormSchema = z.object({
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

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function FormEmail() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    console.log({ data });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 font-nunito"
      >
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem className="mt-2">
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="João Pedro"
                  className="border-none bg-fundo-3 text-struct-7 focus:border-blue-500 focus:outline-none focus:ring"
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
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="joaopedro@gmail.com"
                  className="border-none bg-fundo-3 text-struct-7 focus:border-blue-500 focus:outline-none focus:ring"
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
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input
                  placeholder="(61) 99999-9999"
                  className="border-none bg-fundo-3 text-struct-7 focus:border-struct-1 focus:outline-none focus:ring-0"
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
            <FormItem>
              <FormLabel>Serviço</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none bg-fundo-3 text-struct-7">
                    <SelectValue placeholder="Selecione um tipo de serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7">
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="servicoweb">Serviço Web</SelectItem>
                  <SelectItem value="aplicativo">Aplicativo</SelectItem>
                  <SelectItem value="consultoria">Consultoria</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Faça uma breve descrição do seu projeto"
                  className="resize-none border-none bg-fundo-3 text-struct-7 focus:outline-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="hover:bg- bg-struct-7 font-oxanium text-[20px] font-semibold text-struct-1 hover:bg-struct-7-hover hover:font-bold"
          >
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
}
