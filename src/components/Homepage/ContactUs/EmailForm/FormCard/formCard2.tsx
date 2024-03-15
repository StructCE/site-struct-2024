"use client";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
// import { z } from "zod";
import { buttonVariants } from "~/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "~/components/ui/select";
// import { Textarea } from "~/components/ui/textarea";

// const phoneRegex = new RegExp(
//   /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
// );

// const formEmailSchema = z.object({
//   nome: z
//     .string()
//     .min(2, {
//       message: "Nome deve ter pelo menos 2 caracteres.",
//     })
//     .max(50, {
//       message: "Nome deve ter no máximo 50 caracteres.",
//     }),
//   email: z
//     .string()
//     .min(1, { message: "Digite seu email." })
//     .email("Email não é válido."),
//   telefone: z.string().regex(phoneRegex, "Invalid Number!"),
//   servico: z.string({
//     required_error: "Selecione um tipo de serviço.",
//   }),
//   descricao: z.string().max(167).min(4),
// });

// type FormEmailValues = z.infer<typeof formEmailSchema>;

function isInputNamedElement(
  e: Element,
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const FormEmail = () => {
  // const form = useForm<FormEmailValues>({
  //   resolver: zodResolver(formEmailSchema),
  //   mode: "onChange",
  //   defaultValues: {
  //     nome: "",
  //     email: "",
  //     telefone: "",
  //     descricao: "",
  //   },
  // });

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
        nome: formData.nome,
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
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <Toaster />
      <p>Nome: </p>
      <Input id="nome" name="nome" className="text-black" />
      <p>Email: </p>
      <Input id="email" name="email" className="text-black" />
      <button className={buttonVariants()} disabled={state === "loading"}>
        Sign Up
      </button>
    </form>
  );
};
export default FormEmail;
