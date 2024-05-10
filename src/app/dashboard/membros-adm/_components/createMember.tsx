"use client";
import { api } from "~/trpc/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useCreateMemberForm } from "~/hooks/useCreateMemberForm";

export function CreateMember() {
  const form = useCreateMemberForm();
  const projects = api.project.getAll.useQuery();
  return (
    <div className="m-0 flex w-full flex-col items-center justify-center gap-6 pt-40">
      <h2 className="text-center font-oxanium text-[16px] font-bold leading-[22px] sm:text-[24px] sm:leading-[40px] lg:text-[40px] lg:leading-[52px]">
        <span className="text-struct-3">{"{ "}</span>Admin - Membros
        <span className="text-struct-3">{" }"}</span>
      </h2>
      <form
        className="flex w-3/4 flex-col gap-7 sm:w-1/2 lg:w-1/3 "
        onSubmit={form.submit}
      >
        <input
          placeholder="Name"
          {...form.register("name")}
          className="mt-0 h-10 rounded-[8px] border-none bg-fundo-3 px-3 text-sm text-struct-7"
        />
        <input
          placeholder="Imagem (URL da cloudinary)"
          {...form.register("logoPublicId")}
          className="mt-0 h-10 rounded-[8px] border-none bg-fundo-3 px-3 text-sm text-struct-7"
        />
        <p className="font-nunito text-[20px] font-bold">Diretorias</p>
        {form.directorships.directorshipsFields.map(
          (directorshipField, index) => (
            <div
              className="relative flex w-full flex-col items-center justify-center gap-7"
              key={directorshipField.id}
            >
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => form.directorships.directorshipsRemove(index)}
                  className="absolute -left-20 h-[50px] w-[50px] rounded-[8px] bg-fundo-3"
                >
                  {" "}
                  -{" "}
                </button>
              )}
              <Select
                {...form.register(`directorships.${index}.directorship`)}
                onValueChange={(value) =>
                  form.setValue(`directorships.${index}.directorship`, value)
                }
              >
                <SelectTrigger className="mt-0 h-10 w-full rounded-[8px] border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                  <SelectValue placeholder={`Nome da diretoria ${index + 1}`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Presidência">Presidência</SelectItem>
                  <SelectItem value="Administração e Finanças">
                    Administração e Finanças
                  </SelectItem>
                  <SelectItem value="Comercial">Comercial</SelectItem>
                  <SelectItem value="Gestão de Pessoas">
                    Gestão de Pessoas
                  </SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Projetos">Projetos</SelectItem>
                </SelectContent>
              </Select>
              <Select
                {...form.register(`directorships.${index}.role`)}
                onValueChange={(value) =>
                  form.setValue(`directorships.${index}.role`, value)
                }
              >
                <SelectTrigger className="mt-0 h-10 w-full rounded-[8px] border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                  <SelectValue
                    placeholder={`Nome do cargo de diretoria ${index + 1}`}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Presidente">Presidente</SelectItem>
                  <SelectItem value="Assessor">Assessor</SelectItem>
                  <SelectItem value="Diretor">Diretor</SelectItem>
                  <SelectItem value="Membro">Membro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ),
        )}
        <button
          type="button"
          onClick={() =>
            form.directorships.directorshipsAppend({
              directorship: "",
              role: "",
            })
          }
          className="h-[50px] w-[50px] rounded-[8px] bg-fundo-3"
        >
          {" "}
          +{" "}
        </button>
        <p className="font-nunito text-[20px] font-bold">Projetos</p>
        {form.projects.projectsFields.map((projectField, index) => (
          <div
            className="relative flex w-full flex-col items-center justify-center gap-7"
            key={projectField.id}
          >
            <button
              type="button"
              onClick={() => form.projects.projectsRemove(index)}
              className="absolute -left-20 h-10 w-[50px] rounded-[8px] bg-fundo-3"
            >
              {" "}
              -{" "}
            </button>
            <Select
              {...form.register(`projects.${index}.project`)}
              onValueChange={(value) =>
                form.setValue(`projects.${index}.project`, value)
              }
            >
              <SelectTrigger className="mt-0 h-10 w-full rounded-[8px] border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue placeholder={`Nome do projeto ${index + 1}`} />
              </SelectTrigger>
              <SelectContent>
                {projects.data?.map((project) => (
                  <SelectItem value={project.name} key={project.id}>
                    {project.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              {...form.register(`projects.${index}.role`)}
              onValueChange={(value) =>
                form.setValue(`projects.${index}.role`, value)
              }
            >
              <SelectTrigger className="mt-0 h-10 w-full rounded-[8px] border-none bg-fundo-3 px-3 text-sm text-struct-7/70">
                <SelectValue
                  placeholder={`Nome do cargo de projeto ${index + 1}`}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Project Owner">Project Owner</SelectItem>
                <SelectItem value="Gerente">Gerente</SelectItem>
                <SelectItem value="Desenvolvedor">Desenvolvedor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            form.projects.projectsAppend({ project: "", role: "" })
          }
          className="h-[50px] w-[50px] rounded-[8px] bg-fundo-3"
        >
          {" "}
          +{" "}
        </button>
        <div className="flex w-full items-center justify-center">
          <button
            type="submit"
            className="flex h-[50px] w-[200px] items-center justify-center rounded-[8px] border-[2px] border-struct-7"
          >
            <p className="font-oxanium text-[20px] font-bold"> Criar Membro </p>
          </button>
        </div>
      </form>
    </div>
  );
}
