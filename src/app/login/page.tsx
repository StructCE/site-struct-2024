import { SignInButton } from "./_components";

export default async function SignInPage() {
  return (
    <div className="m-0 flex h-[800px] w-full flex-col items-center justify-center bg-fundo-0 p-0 text-struct-7 selection:bg-struct-5 lg:h-[1000px]">
      <span className="text-center font-oxanium text-[64px] font-bold sm:text-[128px] lg:text-[172px]">
        {"{admin}"}
      </span>
      <SignInButton />
    </div>
  );
}
