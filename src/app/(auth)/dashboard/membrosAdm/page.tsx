import AdminMembersPage from "~/components/Admin/AdminMembers/adminMembersPage";
import CreateMember from "~/components/Admin/AdminMembers/AdminCreateMember/createMember";

export default async function MembrosAdmin() {

  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <CreateMember/>
        <AdminMembersPage />
      </div>
    </>
  );
}
