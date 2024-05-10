import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import { Toaster } from "react-hot-toast";
import { EditMember, RemoveMember } from "./adminMemberCard";
import { MemberCard } from "~/app/membros/_components";

export async function AdminMembers() {
  noStore();
  const directorshipsWithMembers =
    await api.directorship.getAllWithMembers.query();
  return (
    <section className="relative flex items-center bg-fundo-0">
      <div className="absolute h-2/5 w-full skew-y-3 bg-fundo-1 blur-[200px]"></div>
      <div className="relative mx-0 my-20 flex h-fit w-full flex-col items-center justify-center p-0">
        <h3 className="text-center font-oxanium text-[16px] font-bold leading-[21px] sm:text-[20px] sm:leading-[26px] lg:text-[36px] lg:leading-[44px]">
          <span className="text-struct-3">{"{ "}</span>Editar/Remover
          <span className="text-struct-3">{" }"}</span>
        </h3>
        {directorshipsWithMembers.map((directorshipWithMember) => (
          <div
            className="m-12 flex h-fit w-[1130px] flex-col items-center justify-center max-[1194px]:w-[500px] max-[564px]:w-[280px]"
            key={directorshipWithMember.name}
          >
            <p className="text-center font-oxanium text-[32px] font-bold text-struct-3 max-[1194px]:text-[30px] max-[564px]:text-[28px]">
              {directorshipWithMember.name}
            </p>
            <div className="flex h-fit w-full flex-wrap items-center justify-center">
              {directorshipWithMember.members.map((member) => (
                <MemberCard member={member} key={member.id}>
                  <div className="absolute right-0 top-36 flex w-fit items-center justify-center gap-2">
                    <Toaster position="bottom-center" reverseOrder={false} />
                    <EditMember member={member} />
                    <RemoveMember member={member} />
                  </div>
                </MemberCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
