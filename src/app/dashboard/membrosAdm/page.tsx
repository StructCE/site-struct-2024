import AdminMembers from "~/components/Admin/AdminMembers/adminMembers";
import CreateMember from "~/components/Admin/AdminMembers/AdminCreateMember/createMember";

export default async function MembrosAdmin() {

  return (
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <CreateMember/>
        <AdminMembers/>
      </div>
  );
}
