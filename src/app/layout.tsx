import { AuthProvider } from "~/components/app/authProvider";
import { Footer } from "~/components/app/footer";
import { Navbar } from "~/components/app/navbar";
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
    <html lang="pt-br" className="!scroll-smooth">
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
