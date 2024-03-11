import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-fundo-0 font-oxanium font-bold text-struct-7">
      <h2 className="text-6xl">404 | Not Found</h2>
      <p className="font-nunito text-xl font-normal">
        A página que você está procurando não existe
      </p>
      <Link
        href="/"
        className="hover:bg-struct-7-hover m-2 rounded-lg bg-struct-7 px-6 py-2 text-xl text-struct-1"
      >
        Voltar
      </Link>
    </div>
  );
}
