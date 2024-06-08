import { NextResponse, type NextRequest } from "next/server";
import { getUrlByPath } from "./lib/getUrlByPath";
import { type Session } from "next-auth";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const session = (await (
    await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
      method: "GET",
      headers: {
        ...Object.fromEntries(request.headers),
      },
    })
  ).json()) as Session;

  if (pathname.startsWith("/login") && session?.user?.id) {
    return NextResponse.redirect(getUrlByPath("/"));
  }

  if (pathname.startsWith("/dashboard") && !session?.user?.id) {
    return NextResponse.redirect(getUrlByPath("/login"));
  }

  return NextResponse.next();
}
