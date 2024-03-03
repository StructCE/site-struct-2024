import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Struct - Empresa Junior de Engenharia de Computação",
  description:
    "Struct - Empresa Junior de Engenharia de Computação da Universidade de Brasília. Atuando no mercado de desenvolvimento web desde 2014.",
  icons: [{ rel: "icon", url: "/foguetinho-branco.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
