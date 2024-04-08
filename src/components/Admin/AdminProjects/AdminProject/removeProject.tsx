"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogDescription,
} from "~/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { type ProjectWithMembers } from "~/server/api/routers/project";

export default function RemoveProject({ project }: { project: ProjectWithMembers["project"]}) {
  const router = useRouter();
  const removeProject = api.project.removeProject.useMutation({
    onSuccess: () => {
      toast.success("Projeto removido", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
      router.back();
      router.refresh();
    },
    onError: () => {
      toast.error("Erro", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    }
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger className="h-14 rounded-md border-[3px] border-red-600 bg-fundo-0 px-6 font-oxanium text-[24px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-2">
        Remover Projeto
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-fundo-3 border-none">
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação irá deletar todos os dados deste projeto. 
            Peça autorização antes de executar esta ação.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black hover:scale-[1.02]">Cancelar</AlertDialogCancel>
          <AlertDialogAction className="hover:scale-[1.02]" onClick={() => {removeProject.mutate({id: project.id})}}>Remover Projeto</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}