import "~/styles/globals.css";

import { Montserrat } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const font = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en">
      <body className={`font-sans ${font.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
