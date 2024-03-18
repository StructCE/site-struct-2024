"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LoginButton() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  return (
    <>
      <form className="mx-6">
        <Label className="text-[24px]">Email</Label>
        <Input
          value={userInfo.email}
          className="mb-2 mt-1 text-[16px] text-fundo-0"
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          placeholder="admin@struct.unb.br"
        ></Input>
        <Label className="text-[24px]">Senha</Label>
        <Input
          value={userInfo.password}
          type="password"
          className="mb-2 mt-1 text-[16px] text-fundo-0"
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          placeholder="***************"
        ></Input>
        <div className="my-6 flex justify-center">
          <Button
            onClick={(e) => (
              e.preventDefault(),
              signIn("credentials", {
                email: userInfo.email,
                password: userInfo.password,
                redirect: false,
              })
            )}
            className="bg-struct-7 p-6 font-oxanium text-xl font-bold text-struct-1 hover:scale-[1.02] hover:bg-struct-7-hover"
          >
            Entrar
          </Button>
        </div>
      </form>
    </>
  );
}
