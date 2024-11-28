import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isProtectedRoute = req.nextUrl.pathname.includes("/write")

    if(isProtectedRoute && !isLoggedIn){
        return NextResponse.redirect(new URL('/login', req.url))
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}