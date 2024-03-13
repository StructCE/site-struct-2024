"use client"
import { CldImage } from "next-cloudinary"

type Member = {
  name: string,
  logoPublicId: string, 
  role: string
}

const getColor = (role: string): string => {
  const roleColors: { [key: string]: string } = {
    "Presidente": "[#FD8D4B]",
    "Assessor": "[#FD8D4B]",
    "Diretor": "[#2DA2FF]",
    "Membro": "white"
  };

  return roleColors[role] || "white";
};

export default function MemberContainer({member}: {member: Member}) {
  const color = getColor(member.role)
  return (
    <div className="flex flex-col w-[170px] h-[190px] m-7 items-center" key={member.name}>
      <CldImage
      width="120"
      height="120"
      src={member.logoPublicId}
      alt="Foto de Membro"
      crop="fill"
      className={`rounded-full bg-white border-[3px] border-${color}`}
      />
      <div className="m-5 w-full h-fit flex flex-col items-center justify-center">
        <p className="font-nunito text-[16px] text-white text-center">
          {member.name}
        </p>
        <p className={`font-nunito text-[12px] text-${color} text-center`}>
          {member.role}
        </p>
      </div>
    </div>
  )
}