import Link from "next/link";

export function LinkItem({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="cursor-pointer transition delay-75 ease-in-out hover:text-struct-1"
    >
      {children}
    </Link>
  );
}
