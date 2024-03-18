import { permanentRedirect } from "next/navigation";
import LoginButton from "~/components/Admin/LoginButton/page";
import { getServerAuthSession } from "~/server/auth";

export default async function LoginPage() {
  const session = await getServerAuthSession();

  if (session?.user) {
    permanentRedirect("/profile");
  }

  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <div className="m-0 flex h-[800px] w-full items-center justify-center p-0 lg:h-[1000px]">
          <div className="w-[200px] sm:w-[450px] lg:w-[650px]">
            <span className="text-center font-oxanium text-[64px] font-bold sm:text-[128px] lg:text-[172px]">
              {"{struct}"}
            </span>
            <LoginButton />
            <p className="text-xl text-struct-7">{session?.user?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
