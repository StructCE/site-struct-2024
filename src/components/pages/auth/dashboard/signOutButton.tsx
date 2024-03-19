"use client";
import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

export default function SignOutButton() {
  return (
    <>
      <Button
        onClick={() => signOut()}
        className="bg-struct-7 p-6  font-oxanium text-xl font-bold text-struct-1 hover:scale-[1.02] hover:bg-struct-7-hover"
      >
        Sair
      </Button>
    </>
  );
}
