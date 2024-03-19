import { permanentRedirect } from "next/navigation";
import { AuthProvider } from "~/components/pages/auth/authProvider";
import { getServerAuthSession } from "~/server/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session?.user) {
    permanentRedirect("/login");
  }

  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
