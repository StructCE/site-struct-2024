import {
  AdminMembers,
  CreateMember,
} from "~/components/app/dashboard/membrosAdm";

export default async function MembrosAdmin() {
  return (
    <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
      <CreateMember />
      <AdminMembers />
    </div>
  );
}
