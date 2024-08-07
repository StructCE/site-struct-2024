import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { AuthProvider } from "~/components/pages/auth/authProvider";
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
      <body className="relative bg-fundo-0 text-struct-7 antialiased">
        <TRPCReactProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
