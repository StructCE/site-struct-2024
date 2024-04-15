import { AuthProvider } from "~/components/pages/auth/authProvider";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
