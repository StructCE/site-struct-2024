import { AuthProvider } from "~/components/app/dashboard";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
