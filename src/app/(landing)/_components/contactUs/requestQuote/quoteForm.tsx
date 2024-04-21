"use client";
import { Toaster } from "react-hot-toast";
import { Button } from "~/components/ui/button";
import { useQuoteForm } from "~/hooks/useQuoteForm";
import { FormFields } from "./formFields";
import { Form } from "~/components/ui/form";

export function QuoteForm() {
  const { form, handleSubmit, loading } = useQuoteForm();

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="font-nunito"
        >
          <FormFields form={form} />
          <Button
            type="submit"
            disabled={loading}
            className="my-3 flex h-6 justify-end bg-fundo-3 px-3 py-1 font-oxanium text-[12px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-1 hover:text-struct-1 active:border-none sm:my-4 sm:h-11 sm:rounded-md sm:px-6 sm:text-[20px]"
          >
            Enviar
          </Button>
        </form>
      </Form>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        containerStyle={{
          left: 24,
          bottom: 28,
        }}
      />
    </>
  );
}
