"use client"
import { CldImage } from "next-cloudinary"

type Member = {
  name: string,
  logoPublicId: string, 
  role: string
}

const borderColors: { [key: string]: string } = {
  "Presidente": "border-struct-1",
  "Assessor": "border-struct-1",
  "Diretor": "border-struct-3",
  "Membro": "border-struct-7"
}

const textColors: { [key: string]: string } = {
  "Presidente": "text-struct-1",
  "Assessor": "text-struct-1",
  "Diretor": "text-struct-3",
  "Membro": "text-struct-7"
}

const getColor = (role: string, component:string): string => {
  let res
  if (component === "text")
    res = textColors[role]
  if (component === "border")
    res = borderColors[role]
  return res || "" 
};

export default function MemberContainer({member}: {member: Member}) {
  return (
    <div className="flex flex-col w-[170px] h-[190px] m-10 sm:m-8 items-center" >
      <CldImage
      width="150"
      height="150"
      src={member.logoPublicId}
      alt="Foto de Membro"
      crop="fill"
      className={"rounded-full bg-struct-7 border-[3px] "+ getColor(member.role, "border")}
      />
      <div className="m-5 w-full h-fit flex flex-col items-center justify-center">
        <p className="font-nunito text-[16px] text-struct-7 text-center">
          {member.name}
        </p>
        <p className={"font-nunito text-[14px] text-opacity-70 text-center " + getColor(member.role, "text")}>
          {member.role}
        </p>
      </div>
    </div>
  )
}