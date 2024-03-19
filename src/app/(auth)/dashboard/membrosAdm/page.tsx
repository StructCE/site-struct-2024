import AdminMembersPage from "~/components/Admin/AdminMembers/page";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default async function MembrosAdmin() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-struct-7 selection:bg-struct-5">
        <div className="m-0 flex w-full flex-col items-center justify-center gap-6 pt-40">
          <h2 className="text-center font-oxanium text-[16px] font-bold leading-[22px] sm:text-[24px] sm:leading-[40px] lg:text-[40px] lg:leading-[52px]">
            <span className="text-struct-3">{"{ "}</span>Admin - Membros
            <span className="text-struct-3">{" }"}</span>
          </h2>
          <form className="w-3/4 sm:w-1/2 lg:w-1/3">
            <Input
              className="mt-0 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70"
              placeholder="Nome"
            />
            <Select>
              <SelectTrigger className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder="Selecione a Diretoria 1" />
              </SelectTrigger>
              <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7/70">
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Projetos"
                >
                  Projetos
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Gestão de Pessoas"
                >
                  Gestão de Pessoas
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Administração e Finanças"
                >
                  Administração e Finanças
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Comercial"
                >
                  Comercial
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Marketing"
                >
                  Marketing
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Presidência"
                >
                  Presidência
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Previdência"
                >
                  Previdência
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder="Selecione o Cargo da Diretoria 1" />
              </SelectTrigger>
              <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7/70">
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Diretor"
                >
                  Diretor
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Membro"
                >
                  Membro
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Presidente"
                >
                  Presidente
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Assessor"
                >
                  Assessor
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Piloto Aposentado"
                >
                  Piloto Aposentado
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder="Selecione a Diretoria 2" />
              </SelectTrigger>
              <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7/70">
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Projetos"
                >
                  Projetos
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Gestão de Pessoas"
                >
                  Gestão de Pessoas
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Administração e Finanças"
                >
                  Administração e Finanças
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Comercial"
                >
                  Comercial
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Marketing"
                >
                  Marketing
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Presidência"
                >
                  Presidência
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Previdência"
                >
                  Previdência
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder="Selecione o Cargo da Diretoria 2" />
              </SelectTrigger>
              <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7/70">
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Diretor"
                >
                  Diretor
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Membro"
                >
                  Membro
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Presidente"
                >
                  Presidente
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Assessor"
                >
                  Assessor
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Piloto Aposentado"
                >
                  Piloto Aposentado
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70"
              placeholder="Nome do Projeto 1"
            />
            <Select>
              <SelectTrigger className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder="Selecione o Cargo do Projeto 1" />
              </SelectTrigger>
              <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7/70">
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Project Owner"
                >
                  Project Owner
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Gerente"
                >
                  Gerente
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Desenvolvedor"
                >
                  Desenvolvedor
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70"
              placeholder="Nome do Projeto 2"
            />
            <Select>
              <SelectTrigger className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder="Selecione o Cargo do Projeto 2" />
              </SelectTrigger>
              <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7/70">
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Project Owner"
                >
                  Project Owner
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Gerente"
                >
                  Gerente
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Desenvolvedor"
                >
                  Desenvolvedor
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70"
              placeholder="Nome do Projeto 3"
            />
            <Select>
              <SelectTrigger className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder="Selecione o Cargo do Projeto 3" />
              </SelectTrigger>
              <SelectContent className="border-none bg-fundo-3 font-nunito text-struct-7/70">
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Project Owner"
                >
                  Project Owner
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Gerente"
                >
                  Gerente
                </SelectItem>
                <SelectItem
                  className="text-sm font-semibold hover:font-bold"
                  value="Desenvolvedor"
                >
                  Desenvolvedor
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="mt-4 h-10 border-none bg-fundo-3 px-3 text-sm text-struct-7"
              placeholder="Foto de perfil (url do Cloudinary)"
            />
            <div className="my-3 flex justify-center sm:my-4">
              <Button
                type="submit"
                className="h-11 rounded-md border-[3px] border-struct-7 bg-fundo-0 px-6 font-oxanium text-[20px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-2"
              >
                Criar Membro
              </Button>
            </div>
          </form>
        </div>
        <AdminMembersPage />
      </div>
    </>
  );
}
