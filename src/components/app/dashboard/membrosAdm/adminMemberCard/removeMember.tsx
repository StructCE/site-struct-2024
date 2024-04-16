"use client";
import { api } from "~/trpc/react";
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
} from "~/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { type Member } from "~/server/api/routers/directorship";

export function RemoveMember({ member }: { member: Member }) {
  const router = useRouter();
  const removeMember = api.member.removeMember.useMutation({
    onSuccess: () => {
      toast.success("Membro removido", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
      router.refresh();
    },
    onError: () => {
      toast.error("Erro", {
        style: {
          color: "#081426",
          background: "#F8F8FF",
        },
      });
    },
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <i className="text-red-500">
          <MdDelete className="h-6 w-6 cursor-pointer" />
        </i>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none bg-fundo-3">
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação irá deletar todos os dados deste membro. Peça autorização
            antes de executar esta ação.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black hover:scale-[1.02]">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="hover:scale-[1.02]"
            onClick={() => {
              removeMember.mutate({ id: member.id });
            }}
          >
            Remover Membro
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
