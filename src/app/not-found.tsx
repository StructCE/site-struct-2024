import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-[#081426] font-oxanium font-bold text-[#F8F8FF]">
      <h2 className="text-6xl">404 | Not Found</h2>
      <p className="font-nunito text-xl font-normal">
        A página que você está procurando não existe
      </p>
      <Link
        href="/"
        className="m-2 rounded-lg bg-[#F8F8FF] px-6 py-2 text-xl text-[#FD8D4B] hover:bg-[#ebebeb]"
      >
        Voltar
      </Link>
    </div>
  );
}
