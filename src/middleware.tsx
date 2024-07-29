import { NextResponse, type NextRequest } from "next/server";
import { getUrlByPath } from "./lib/getUrlByPath";
import { type Session } from "next-auth";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("next-auth.session-token");

  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(getUrlByPath("/"));
  }

  if (pathname.startsWith("/dashboard")) {
    let session;

    if (token) {
      console.log("rodou o fetch");
      session = (await (
        await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
          method: "GET",
          headers: {
            ...Object.fromEntries(request.headers),
          },
        })
      ).json()) as Session;
    }

    return session?.user?.id
      ? NextResponse.next()
      : NextResponse.redirect(getUrlByPath("/login"));
  }

  return NextResponse.next();
}
