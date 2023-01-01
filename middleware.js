import { NextResponse } from "next/server";
import { verify } from "./services/jwt_sign_verify";

const secret = process.env.SECRET || "secret";

export default async function middleware(req) {
  const jwt = req.cookies.get("OursiteJWT");
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      verify(jwt, secret);
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }
  }
  return NextResponse.next();
}
