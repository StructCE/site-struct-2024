import Link from "next/link";
import LogoutButton from "~/components/pages/auth/dashboard/signOutButton";

export default function LoginPage() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <div className="m-0 flex h-screen w-full flex-col items-center justify-center gap-6 p-0">
          <Link
            href="/dashboard/membrosAdm"
            className="rounded-lg bg-struct-7 p-4 font-oxanium text-xl font-bold text-struct-1 hover:scale-[1.02] hover:bg-struct-7-hover"
          >
            Gerenciar Membros
          </Link>
          <Link
            href="/dashboard/projetosAdm"
            className="rounded-lg bg-struct-7 p-4 font-oxanium text-xl font-bold text-struct-1 hover:scale-[1.02] hover:bg-struct-7-hover"
          >
            Gerenciar Projetos
          </Link>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}
