import { api } from "~/trpc/server";
import { unstable_noStore as noStore } from "next/cache";
import { DirectorshipContainer } from "./directorshipContainer";
import { MemberCard } from "./memberCard";

export async function MembersPage() {
  noStore();
  const directorshipsWithMembers =
    await api.directorship.getAllWithMembers.query();
  return (
    <section className="relative flex items-center bg-fundo-0">
      <div className="absolute h-2/5 w-full skew-y-3 bg-fundo-1 blur-[200px]"></div>
      <div className="relative mx-0 my-24 flex h-fit w-full flex-col items-center justify-center p-0">
        {directorshipsWithMembers.map((directorshipWithMember) => (
          <DirectorshipContainer
            key={directorshipWithMember.name}
            name={directorshipWithMember.name}
          >
            {directorshipWithMember.members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </DirectorshipContainer>
        ))}
      </div>
    </section>
  );
}
