"use client";
import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";

export function SignInButton() {
  return (
    <>
      <div className="my-6 flex justify-center">
        <Button
          onClick={() => signIn("google")}
          className="bg-struct-7 p-6 font-oxanium text-xl font-bold text-struct-1 hover:scale-[1.02] hover:bg-struct-7-hover"
        >
          Entrar
        </Button>
      </div>
    </>
  );
}
