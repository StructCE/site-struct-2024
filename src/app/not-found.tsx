"use client";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-fundo-0 font-oxanium font-bold text-struct-7">
      <h2 className="text-6xl">404 | Not Found</h2>
      <p className="font-nunito text-xl font-normal">
        A página que você está procurando não existe.
      </p>
      <Button
        onClick={() => (router.push("/#home"), router.refresh())}
        className="m-2 rounded-lg bg-struct-7 px-6 py-2 text-xl font-bold text-struct-1 hover:bg-struct-7-hover"
      >
        Voltar
      </Button>
    </div>
  );
}
