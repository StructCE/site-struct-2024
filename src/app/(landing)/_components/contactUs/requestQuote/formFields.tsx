import { type UseFormReturn } from "react-hook-form";
import {
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

export function FormFields({
  form,
}: {
  form: UseFormReturn<
    {
      nome: string;
      email: string;
      telefone: string;
      servico: string;
      descricao: string;
    },
    undefined
  >;
}) {
  return (
    <>
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
            <FormLabel className="text-[10px] sm:text-base">Telefone</FormLabel>
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
            <FormLabel className="text-[10px] sm:text-base">Serviço</FormLabel>
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
    </>
  );
}
