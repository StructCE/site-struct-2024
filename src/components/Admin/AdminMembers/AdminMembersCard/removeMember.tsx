"use client"
import { api } from "~/trpc/react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog"
import toast from "react-hot-toast"
import { MdDelete } from "react-icons/md";

type Member = {
  id: string;
  name: string;
  logoPublicId: string;
  role: string;
};

export default function RemoveMember( { member }: { member: Member}) {
  const removeMember = api.member.removeMember.useMutation({
    onSuccess: () => {
      toast.success("Membro removido", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    },
    onError: () => toast.error("Erro", {
      style: {
        color: "#081426",
        background: "#F8F8FF",
      },
    })
  })
  return (
    <AlertDialog>
    <AlertDialogTrigger>
      <i className="text-red-500">
        <MdDelete className="w-6 h-6 cursor-pointer"/>  
      </i>
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
        <AlertDialogAction className="hover:scale-[1.02]" onClick={() => {removeMember.mutate({id: member.id})}}>Remover Membro</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}