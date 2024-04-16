const borderColors: Record<string, string> = {
  Presidente: "border-struct-1",
  Assessor: "border-struct-1",
  Diretor: "border-struct-3",
  Membro: "border-struct-7",
  Gerente: "border-struct-3",
  "Project Owner": "border-struct-1",
};

const textColors: Record<string, string> = {
  Presidente: "text-struct-1",
  Assessor: "text-struct-1",
  Diretor: "text-struct-3",
  Membro: "text-struct-7",
  Gerente: "text-struct-3",
  "Project Owner": "text-struct-1",
};

export default function getColor(role:string, component:string) {
  let res;
  if (component === "text") res = textColors[role];
  if (component === "border") res = borderColors[role];
  return res ?? "";

}