import { api } from "~/trpc/server";
import MemberContainer from "./memberContainer";

export default async function Members() {
  const directorshipsWithMembers =
    await api.directorship.getAllWithMembers.query();
  return (
    <section className="relative flex items-center bg-fundo-0">
      <div className="absolute h-2/5 w-full skew-y-3 bg-fundo-1 blur-[200px]"></div>
      <div className=" relative mx-0 my-24 flex h-fit w-full flex-col items-center justify-center p-0">
        {directorshipsWithMembers.map((directorshipWithMember) => {
          return (
            <div
              className="m-12 flex h-fit w-[1130px] flex-col items-center justify-center max-[1194px]:w-[500px] max-[564px]:w-[280px]"
              key={directorshipWithMember.name}
            >
              <p className="text-center font-oxanium text-[32px] font-bold text-struct-3 max-[1194px]:text-[30px] max-[564px]:text-[28px]">
                {directorshipWithMember.name}
              </p>
              <div className="flex h-fit w-full flex-wrap items-center justify-center">
                {directorshipWithMember.members.map((member) => {
                  return <MemberContainer member={member} key={member.name} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
