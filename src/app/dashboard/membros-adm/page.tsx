import { AdminMembers, CreateMember } from "./_components";

export default async function MembrosAdmin() {
  return (
    <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
      <CreateMember />
      <AdminMembers />
    </div>
  );
}
