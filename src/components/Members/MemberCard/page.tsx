"use client";
import { CldImage } from "next-cloudinary";

type Member = {
  id: string;
  name: string;
  logoPublicId: string;
  role: string;
};

const borderColors: Record<string, string> = {
  Presidente: "border-struct-1",
  Assessor: "border-struct-1",
  Diretor: "border-struct-3",
  Membro: "border-struct-7",
  Gerente: "border-struct-3",
  "Project Owner": "border-struct-1",
};

const textColors: Record<string, string> = {
  Presidente: "text-struct-1",
  Assessor: "text-struct-1",
  Diretor: "text-struct-3",
  Membro: "text-struct-7",
  Gerente: "text-struct-3",
  "Project Owner": "text-struct-1",
};

const getColor = (role: string, component: string): string => {
  let res;
  if (component === "text") res = textColors[role];
  if (component === "border") res = borderColors[role];
  return res ?? "";
};

export default function MemberContainer({ member }: { member: Member }) {
  return (
    <div className="m-12 flex h-[190px] w-[170px] flex-col items-center sm:m-10 sm:my-12">
      <CldImage
        width="180"
        height="180"
        src={member.logoPublicId}
        alt="Foto de Membro"
        crop="fill"
        className={
          "rounded-full border-[3px] bg-struct-7 " +
          getColor(member.role, "border")
        }
      />
      <div className="m-5 flex h-fit w-full flex-col items-center justify-center">
        <p className="text-center font-nunito text-[16px] text-struct-7">
          {member.name}
        </p>
        <p
          className={
            "text-center font-nunito text-[14px] text-opacity-70 " +
            getColor(member.role, "text")
          }
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}
