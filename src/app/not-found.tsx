import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-fundo-0 text-struct-7 flex h-screen w-full flex-col items-center justify-center gap-4 font-oxanium font-bold">
      <h2 className="text-6xl">404 | Not Found</h2>
      <p className="font-nunito text-xl font-normal">
        A página que você está procurando não existe
      </p>
      <Link
        href="/"
        className="bg-struct-7 text-struct-1 m-2 rounded-lg px-6 py-2 text-xl hover:bg-[#ebebeb]"
      >
        Voltar
      </Link>
    </div>
  );
}
