import CloudinaryImg from "~/components/ui/cloudinaryImage";
import { type Member } from "~/server/api/routers/project";
import getColor from "../getColor";


export default function MemberCard({ member, children }: { member: Member, children: React.ReactNode }) {
  return (
    <div className="m-12 flex h-[190px] w-[170px] flex-col items-center sm:m-10 sm:my-12 relative">
      <CloudinaryImg
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
        {
          children
        }
      </div>
    </div>
  );
}
