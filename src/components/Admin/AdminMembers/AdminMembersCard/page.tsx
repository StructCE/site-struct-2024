"use client";
import { useSession } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import { Toaster } from "react-hot-toast"
import EditMember from "./editMember";
import RemoveMember from "./removeMember";

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
export default function AdminMemberCard({ member }: { member: Member }) {
  const { data: session } = useSession();
  return (
    <div className="m-12 flex h-[280px] w-[170px] flex-col items-center sm:m-10 sm:my-12 relative">
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
        {session?.user? 
          <div className="absolute w-fit flex justify-center items-center top-36 right-0 gap-2">
            <Toaster position="bottom-center" reverseOrder={false} />
            <EditMember member={member}/>
            <RemoveMember member={member}/>
          </div>
          :
          null
      }
      </div>
    </div>
  );
}
