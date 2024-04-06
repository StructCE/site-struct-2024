import { api } from "~/trpc/server";
import MemberCard from "./MemberCard/memberCard";
import DirectorshipContainer from "./DirectorshipContainer/directorshipContainer";
import { unstable_noStore as noStore } from "next/cache";

export default async function MembersPage() {
  noStore();
  const directorshipsWithMembers =
    await api.directorship.getAllWithMembers.query();
  return (
    <section className="relative flex items-center bg-fundo-0">
      <div className="absolute h-2/5 w-full skew-y-3 bg-fundo-1 blur-[200px]"></div>
      <div className="relative mx-0 my-24 flex h-fit w-full flex-col items-center justify-center p-0">
        {directorshipsWithMembers.map( (directorshipWithMember) => (
          <DirectorshipContainer key={directorshipWithMember.name} name={directorshipWithMember.name}>
            {directorshipWithMember.members.map( (member) => (
              <MemberCard key={member.id} member={member} />
              ))}
          </DirectorshipContainer>
        ))}
      </div>
    </section>
  );
}