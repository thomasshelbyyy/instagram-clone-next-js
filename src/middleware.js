import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
const authPath = ["/auth/login", "/auth/register", "/auth/forgot-password"]

export async function middleware(req) {
    const token = await getToken({req, secret: process.env.NEXT_AUTH_SECRET})
    const {pathname} = req.nextUrl

    if(!token) {
        if(!authPath.includes(pathname)) {
            return NextResponse.redirect(new URL("/auth/login", req.url))
        }
    }

    if(token) {
        if(authPath.includes(pathname)) {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next|static|public|favicon.ico).*)'
}