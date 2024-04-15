import { NextResponse, type NextRequest } from "next/server";
import { getUrlByPath } from "./lib/getUrlByPath";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  const pathname = request.nextUrl.pathname;

  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL(getUrlByPath("/dashboard")));
  } else if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL(getUrlByPath("/login")));
  }
}
