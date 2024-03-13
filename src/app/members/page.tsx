import { api } from "~/trpc/server"
import MemberContainer from "./memberContainer"

export default async function Members() {
  const directorshipsWithMembers = await api.directorship.getAllWithMembers.query()
  return (
    <section className="flex bg-fundo-1 relative items-center">
      <div className="absolute w-full h-2/5 skew-y-3 bg-fundo-1 brightness-150 blur-3xl">
      </div>
      <div className="m-0 p-0 w-full h-fit items-center justify-center flex flex-col relative">
        {directorshipsWithMembers.map((directorshipWithMember) => {
          return (
            <div className="flex flex-col items-center justify-center m-12 w-[1130px] h-fit max-[1194px]:w-[500px] max-[564px]:w-[280px]" key={directorshipWithMember.name}>
              <p className="text-struct-3 font-bold text-[32px] text-center max-[1194px]:text-[28px] max-[564px]:text-[24px]">
                {directorshipWithMember.name}
              </p>
              <div className="flex flex-wrap w-full h-fit items-center justify-center">
                {directorshipWithMember.members.map((member) => {
                  return (
                    <MemberContainer member={member} key={member.name}/>
                  )
                })}
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}